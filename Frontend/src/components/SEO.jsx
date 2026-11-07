import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath, DEFAULT_OG_IMAGE } from '../data/seoData.js'

function updateMeta(attr, key, content) {
  if (typeof document === 'undefined') return
  let element = document.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content || '')
}

function updateCanonical(url) {
  if (typeof document === 'undefined') return
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function updateJsonLd(schema) {
  if (typeof document === 'undefined') return
  let script = document.getElementById('dynamic-seo-schema')
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('id', 'dynamic-seo-schema')
    document.head.appendChild(script)
  }
  script.textContent = schema ? JSON.stringify(schema, null, 2) : ''
}

export function SEO(props) {
  const location = useLocation()
  const fallbackSeo = getSeoForPath(location.pathname)

  const title = props.title || fallbackSeo.title
  const description = props.description || fallbackSeo.description
  const canonical = props.canonical || fallbackSeo.canonical
  const ogType = props.ogType || fallbackSeo.ogType || 'website'
  const ogImage = props.ogImage || DEFAULT_OG_IMAGE
  const schema = props.schema || fallbackSeo.schema
  const noindex = props.noindex || false

  useEffect(() => {
    // 1. Title
    document.title = title

    // 2. Standard Meta
    updateMeta('name', 'description', description)
    updateMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    updateCanonical(canonical)

    // 3. Open Graph
    updateMeta('property', 'og:site_name', 'ZestBotz Solutions')
    updateMeta('property', 'og:locale', 'en_US')
    updateMeta('property', 'og:type', ogType)
    updateMeta('property', 'og:url', canonical)
    updateMeta('property', 'og:title', title)
    updateMeta('property', 'og:description', description)
    updateMeta('property', 'og:image', ogImage)

    // 4. Twitter Cards
    updateMeta('name', 'twitter:card', 'summary_large_image')
    updateMeta('name', 'twitter:title', title)
    updateMeta('name', 'twitter:description', description)
    updateMeta('name', 'twitter:url', canonical)
    updateMeta('name', 'twitter:image', ogImage)

    // 5. Schema.org JSON-LD
    updateJsonLd(schema)
  }, [title, description, canonical, ogType, ogImage, schema, noindex])

  // React 19 supports rendering metadata tags directly for automatic hoisting
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:site_name" content="ZestBotz Solutions" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}

export default SEO
