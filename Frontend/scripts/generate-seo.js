import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { seoData, routeAliases, BASE_URL } from '../src/data/seoData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '../dist')
const publicDir = path.resolve(__dirname, '../public')

function generateHtmlForRoute(baseTemplate, route, seo) {
  let html = baseTemplate

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`)

  // 2. Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${seo.description}" />`
  )

  // 3. Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${seo.canonical}" />`
  )

  // 4. Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${seo.canonical}" />`
  )
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${seo.title}" />`
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${seo.description}" />`
  )
  if (seo.ogType) {
    html = html.replace(
      /<meta\s+property="og:type"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:type" content="${seo.ogType}" />`
    )
  }

  // 5. Replace Twitter Tags
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:url" content="${seo.canonical}" />`
  )
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${seo.title}" />`
  )
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${seo.description}" />`
  )

  // 6. Replace Schema.org JSON-LD
  const schemaString = JSON.stringify(seo.schema, null, 2)
  html = html.replace(
    /<script\s+type="application\/ld\+json"\s+id="initial-schema">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json" id="initial-schema">\n${schemaString}\n    </script>`
  )

  // 7. Inject Noscript Content inside <div id="root"> for non-JS crawlers
  const noscriptSnippet = `
      <noscript>
        <div style="padding: 2rem; font-family: sans-serif; max-width: 800px; margin: 0 auto;">
          <h1>${seo.title}</h1>
          <p>${seo.description}</p>
          <p><a href="${BASE_URL}">Return to ZestBotz Solutions Homepage</a></p>
        </div>
      </noscript>`

  html = html.replace('<div id="root"></div>', `<div id="root">${noscriptSnippet}</div>`)

  return html
}

async function run() {
  console.log('--- Starting Post-Build SEO Generation ---')

  const templatePath = path.join(distDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Base template not found at ${templatePath}. Run vite build first.`)
    process.exit(1)
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf8')

  // Copy static SEO & favicon assets if missing or updated in dist
  const assetsToCopy = [
    'sitemap.xml',
    'robots.txt',
    'logo.png',
    'og-image.png',
    'favicon.ico',
    'favicon.png',
    'favicon-48x48.png',
    'favicon-96x96.png',
    'favicon-192x192.png',
    'favicon-512x512.png',
    'apple-touch-icon.png',
    'site.webmanifest',
  ]
  for (const asset of assetsToCopy) {
    const src = path.join(publicDir, asset)
    const dest = path.join(distDir, asset)
    if (fs.existsSync(src) && (!fs.existsSync(dest) || fs.statSync(src).mtime > fs.statSync(dest).mtime)) {
      fs.copyFileSync(src, dest)
      console.log(`✓ Copied ${asset} to dist/`)
    }
  }

  // Generate for all primary routes
  let generatedCount = 0
  for (const [route, seo] of Object.entries(seoData)) {
    const html = generateHtmlForRoute(baseTemplate, route, seo)

    if (route === '/') {
      fs.writeFileSync(templatePath, html, 'utf8')
      generatedCount++
      console.log(`✓ Generated SEO for root: / (index.html)`)
    } else {
      const cleanRoute = route.startsWith('/') ? route.slice(1) : route
      const routeDirPath = path.join(distDir, cleanRoute)
      fs.mkdirSync(routeDirPath, { recursive: true })

      // Write dist/[route]/index.html
      const indexPath = path.join(routeDirPath, 'index.html')
      fs.writeFileSync(indexPath, html, 'utf8')

      // Also write dist/[route].html for cleanUrls compatibility
      const cleanHtmlPath = path.join(distDir, `${cleanRoute}.html`)
      fs.writeFileSync(cleanHtmlPath, html, 'utf8')

      generatedCount++
      console.log(`✓ Generated SEO for route: ${route}`)
    }
  }

  // Generate for legacy aliases (pointing canonical to primary)
  for (const [aliasRoute, targetRoute] of Object.entries(routeAliases)) {
    const targetSeo = seoData[targetRoute]
    if (!targetSeo) continue

    const aliasSeo = {
      ...targetSeo,
      canonical: targetSeo.canonical, // Keep canonical to the primary target!
    }

    const html = generateHtmlForRoute(baseTemplate, aliasRoute, aliasSeo)
    const cleanRoute = aliasRoute.startsWith('/') ? aliasRoute.slice(1) : aliasRoute
    const routeDirPath = path.join(distDir, cleanRoute)
    fs.mkdirSync(routeDirPath, { recursive: true })

    fs.writeFileSync(path.join(routeDirPath, 'index.html'), html, 'utf8')
    fs.writeFileSync(path.join(distDir, `${cleanRoute}.html`), html, 'utf8')
    console.log(`✓ Generated alias route: ${aliasRoute} -> canonical: ${targetSeo.canonical}`)
  }

  console.log(`--- Finished SEO Generation: ${generatedCount} primary routes generated ---`)
}

run().catch((err) => {
  console.error('Fatal error during SEO generation:', err)
  process.exit(1)
})
