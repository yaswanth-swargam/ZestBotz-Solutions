/**
 * Centralized API configuration.
 *
 * Prevents hardcoding localhost/development URLs into production bundles while
 * preserving seamless local development workflows.
 *
 * - In Development (vite dev): Falls back to 'http://localhost:5000' (or VITE_API_URL if set).
 * - In Production (vite build): Tree-shakes away dev fallbacks; uses VITE_API_URL or defaults
 *   to '' for same-origin / reverse-proxied endpoints.
 */

function resolveApiBaseUrl() {
  const envUrl = import.meta.env.VITE_API_URL
  if (typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/$/, '')
  }

  // Vite replaces `import.meta.env.DEV` with false at build time,
  // enabling dead-code elimination so localhost is never baked into production bundles.
  if (import.meta.env.DEV) {
    return 'http://localhost:5000'
  }

  return ''
}

export const API_BASE_URL = resolveApiBaseUrl()

/**
 * Builds a full API endpoint URL from a relative path.
 * Ensures leading slash consistency.
 *
 * @param {string} path - Endpoint path, e.g. '/api/contact'
 * @returns {string} Fully qualified or normalized relative endpoint URL
 */
export function getApiEndpoint(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalizedPath}`
}

