import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { seoData, BASE_URL } from '../src/data/seoData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '../dist')

let passedTests = 0
let failedTests = 0

function assert(condition, message) {
  if (condition) {
    passedTests++
    console.log(`  ✓ ${message}`)
  } else {
    failedTests++
    console.error(`  ✗ FAIL: ${message}`)
  }
}

async function validate() {
  console.log('=== STARTING COMPREHENSIVE SEO VALIDATION ===\n')

  // 1. Robots.txt Validation
  console.log('Testing robots.txt:')
  const robotsPath = path.join(distDir, 'robots.txt')
  assert(fs.existsSync(robotsPath), 'dist/robots.txt exists')
  const robotsContent = fs.readFileSync(robotsPath, 'utf8')
  assert(robotsContent.includes('User-agent: *'), 'robots.txt specifies User-agent: *')
  assert(robotsContent.includes('Allow: /'), 'robots.txt allows root /')
  assert(
    robotsContent.includes('Sitemap: https://www.zestbotz.com/sitemap.xml'),
    'robots.txt specifies official canonical sitemap URL'
  )

  // 2. Sitemap.xml Validation
  console.log('\nTesting sitemap.xml:')
  const sitemapPath = path.join(distDir, 'sitemap.xml')
  assert(fs.existsSync(sitemapPath), 'dist/sitemap.xml exists')
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
  assert(
    sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>'),
    'sitemap.xml has valid XML declaration'
  )
  assert(
    sitemapContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'),
    'sitemap.xml uses standard sitemap schema'
  )
  const locMatches = sitemapContent.match(/<loc>https:\/\/www\.zestbotz\.com[^<]*<\/loc>/g) || []
  assert(locMatches.length === 20, `sitemap.xml contains exactly 20 canonical public URLs (found: ${locMatches.length})`)

  // Check no non-www or broken domains
  assert(!sitemapContent.includes('<loc>https://zestbotz.com'), 'sitemap.xml contains NO non-www URLs')
  assert(!sitemapContent.includes('<loc>http://'), 'sitemap.xml contains NO unencrypted http URLs')

  // 3. Static Assets Validation
  console.log('\nTesting static branding and favicon assets:')
  const logoPath = path.join(distDir, 'logo.png')
  const ogImagePath = path.join(distDir, 'og-image.png')
  const faviconPath = path.join(distDir, 'favicon.png')
  const faviconIcoPath = path.join(distDir, 'favicon.ico')
  const favicon48Path = path.join(distDir, 'favicon-48x48.png')
  const favicon96Path = path.join(distDir, 'favicon-96x96.png')
  const favicon192Path = path.join(distDir, 'favicon-192x192.png')
  const favicon512Path = path.join(distDir, 'favicon-512x512.png')
  const appleTouchPath = path.join(distDir, 'apple-touch-icon.png')
  const manifestPath = path.join(distDir, 'site.webmanifest')

  assert(fs.existsSync(logoPath) && fs.statSync(logoPath).size > 0, 'dist/logo.png is present and non-empty')
  assert(fs.existsSync(ogImagePath) && fs.statSync(ogImagePath).size > 0, 'dist/og-image.png is present and non-empty')
  assert(fs.existsSync(faviconPath) && fs.statSync(faviconPath).size > 0, 'dist/favicon.png is present and non-empty')
  assert(fs.existsSync(faviconIcoPath) && fs.statSync(faviconIcoPath).size > 0, 'dist/favicon.ico is present and non-empty')
  assert(fs.existsSync(favicon48Path) && fs.statSync(favicon48Path).size > 0, 'dist/favicon-48x48.png is present and non-empty')
  assert(fs.existsSync(favicon96Path) && fs.statSync(favicon96Path).size > 0, 'dist/favicon-96x96.png is present and non-empty')
  assert(fs.existsSync(favicon192Path) && fs.statSync(favicon192Path).size > 0, 'dist/favicon-192x192.png is present and non-empty')
  assert(fs.existsSync(favicon512Path) && fs.statSync(favicon512Path).size > 0, 'dist/favicon-512x512.png is present and non-empty')
  assert(fs.existsSync(appleTouchPath) && fs.statSync(appleTouchPath).size > 0, 'dist/apple-touch-icon.png is present and non-empty')
  assert(fs.existsSync(manifestPath) && fs.statSync(manifestPath).size > 0, 'dist/site.webmanifest is present and non-empty')

  // Check favicon tags in index.html
  const rootHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
  assert(rootHtml.includes('href="/favicon.ico"'), 'index.html links to /favicon.ico')
  assert(rootHtml.includes('href="/favicon-48x48.png"'), 'index.html links to /favicon-48x48.png')
  assert(rootHtml.includes('href="/favicon.png"'), 'index.html links to stable /favicon.png')
  assert(rootHtml.includes('href="/apple-touch-icon.png"'), 'index.html links to /apple-touch-icon.png')
  assert(rootHtml.includes('href="/site.webmanifest"'), 'index.html links to /site.webmanifest')

  // 4. Page-Level Metadata & Schema Validation
  console.log('\nTesting Page-Level Metadata & Schema for all 20 Primary Routes:')
  for (const [route, seo] of Object.entries(seoData)) {
    console.log(`\nValidating route: "${route}":`)

    // File existence
    const cleanRoute = route === '/' ? 'index' : (route.startsWith('/') ? route.slice(1) : route)
    const htmlFile = route === '/' 
      ? path.join(distDir, 'index.html') 
      : path.join(distDir, cleanRoute, 'index.html')

    assert(fs.existsSync(htmlFile), `Pre-rendered HTML exists for ${route}`)
    const html = fs.readFileSync(htmlFile, 'utf8')

    // Title validation
    assert(
      html.includes(`<title>${seo.title}</title>`),
      `HTML contains exact title: "${seo.title}"`
    )
    assert(
      seo.title.includes('ZestBotz Solutions') || seo.title.includes('ZestBotz'),
      `Title includes consistent company name`
    )
    assert(
      seo.title.length <= 70,
      `Title length (${seo.title.length} chars) is optimal for SERPs (<= 70)`
    )

    // Meta description validation
    assert(
      html.includes(`name="description" content="${seo.description}"`),
      `HTML contains exact meta description`
    )
    assert(
      seo.description.length >= 70 && seo.description.length <= 175,
      `Meta description length (${seo.description.length} chars) is within search-engine guidelines (70-175)`
    )

    // Canonical URL validation
    assert(
      html.includes(`rel="canonical" href="${seo.canonical}"`),
      `HTML contains canonical URL: "${seo.canonical}"`
    )
    assert(
      seo.canonical.startsWith('https://www.zestbotz.com'),
      `Canonical URL strictly uses https://www.zestbotz.com domain`
    )

    // Open Graph & Twitter validation
    assert(
      html.includes(`property="og:title" content="${seo.title}"`),
      `OG title matches page title`
    )
    assert(
      html.includes(`property="og:url" content="${seo.canonical}"`),
      `OG url matches canonical`
    )
    assert(
      html.includes('property="og:image" content="https://www.zestbotz.com/og-image.png"'),
      `OG image uses absolute URL`
    )
    assert(
      html.includes(`name="twitter:title" content="${seo.title}"`),
      `Twitter title matches page title`
    )

    // JSON-LD validation
    const jsonLdMatch = html.match(/<script type="application\/ld\+json" id="initial-schema">([\s\S]*?)<\/script>/i)
    assert(jsonLdMatch && jsonLdMatch[1], `Schema script is present in HTML`)
    if (jsonLdMatch && jsonLdMatch[1]) {
      try {
        const parsed = JSON.parse(jsonLdMatch[1])
        assert(parsed['@context'] === 'https://schema.org', `Schema has valid @context: "https://schema.org"`)
        assert(Array.isArray(parsed['@graph']) && parsed['@graph'].length > 0, `Schema contains valid @graph array`)

        // Verify Organization schema
        const org = parsed['@graph'].find((item) => item['@type'] === 'Organization')
        if (org) {
          assert(org.name === 'ZestBotz Solutions', 'Organization name is "ZestBotz Solutions"')
          assert(org.url === 'https://www.zestbotz.com', 'Organization URL is "https://www.zestbotz.com"')
          assert(Array.isArray(org.sameAs) && org.sameAs.length === 3, 'Organization sameAs includes LinkedIn, YouTube, Instagram')
        }
      } catch (err) {
        assert(false, `JSON-LD syntax is valid JSON (Error: ${err.message})`)
      }
    }
  }

  console.log('\n=============================================')
  console.log(`VALIDATION SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`)
  console.log('=============================================\n')

  if (failedTests > 0) {
    process.exit(1)
  }
}

validate().catch((err) => {
  console.error('Validation script error:', err)
  process.exit(1)
})
