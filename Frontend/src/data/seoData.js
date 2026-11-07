/**
 * Centralized SEO & Structured Data Configuration for ZestBotz Solutions
 * Official Domain: https://www.zestbotz.com
 * Company: ZestBotz Solutions
 */

export const BASE_URL = 'https://www.zestbotz.com'
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`
export const LOGO_URL = `${BASE_URL}/logo.png`

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'ZestBotz Solutions',
  legalName: 'ZestBotz Solutions Pvt Ltd',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${BASE_URL}/#logo`,
    url: LOGO_URL,
    caption: 'ZestBotz Solutions Logo',
  },
  image: DEFAULT_OG_IMAGE,
  description:
    'ZestBotz Solutions is an IT services and consulting company delivering AI automation, Python RPA, web scraping, data engineering, business intelligence, healthcare analytics, and custom software.',
  founder: {
    '@type': 'Person',
    name: 'Anil Kumar M.',
  },
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 7973645912',
    contactType: 'customer support',
    email: 'support@zestbotz.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/zestbotz',
    'https://www.youtube.com/@zestbotzsolutions',
    'https://www.instagram.com/zestbotz_solutions/',
  ],
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'ZestBotz Solutions',
  url: BASE_URL,
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
}

function makeBreadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.item ? `${BASE_URL}${item.item}` : undefined,
    })),
  }
}

export const seoData = {
  '/': {
    title: 'ZestBotz Solutions | AI Automation & Software Development',
    description:
      'ZestBotz Solutions delivers AI automation, RPA, web scraping, data solutions, software development, chatbot integration and healthcare RCM solutions.',
    canonical: `${BASE_URL}/`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, websiteSchema],
    },
  },

  '/about': {
    title: 'About Us & Leadership | ZestBotz Solutions',
    description:
      'Learn about ZestBotz Solutions, an IT services venture founded by Anil Kumar M. We bridge AI capabilities with business operations through practical automation.',
    canonical: `${BASE_URL}/about`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'AboutPage',
          '@id': `${BASE_URL}/about#webpage`,
          url: `${BASE_URL}/about`,
          name: 'About Us & Leadership | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'About ZestBotz Solutions, our founding team, core values, and mission to deliver practical automation and data analytics.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about' },
        ]),
      ],
    },
  },

  '/services': {
    title: 'Services | ZestBotz Solutions - Automation, Data & Software',
    description:
      'Explore our 8 core service disciplines: AI agents, Python & RPA automation, web scraping, data engineering, Power BI analytics, healthcare RCM, and custom software.',
    canonical: `${BASE_URL}/services`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'CollectionPage',
          '@id': `${BASE_URL}/services#webpage`,
          url: `${BASE_URL}/services`,
          name: 'Services | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Comprehensive technology and intelligent automation services offered by ZestBotz Solutions.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
        ]),
      ],
    },
  },

  '/services/ai-automation': {
    title: 'AI Agents & Intelligent Workflow Automation | ZestBotz Solutions',
    description:
      'Enterprise AI agents and intelligent workflow automation. Autonomous process orchestration, document parsing, API execution, and human-in-the-loop approvals.',
    canonical: `${BASE_URL}/services/ai-automation`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/ai-automation#service`,
          name: 'AI Agents and Intelligent Workflow Automation',
          serviceType: 'AI Workflow Automation',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/ai-automation`,
          description:
            'Workflow mapping, AI-assisted document processing, classification, summarization, routing, API integrations, and human-in-the-loop approvals.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'AI Agents & Automation', item: '/services/ai-automation' },
        ]),
      ],
    },
  },

  '/services/python-rpa-automation': {
    title: 'Python & RPA Process Automation | ZestBotz Solutions',
    description:
      'Deterministic Python automation and RPA bots for scheduled tasks, desktop and browser automation, file processing, Excel/CSV reconciliation, and data entry.',
    canonical: `${BASE_URL}/services/python-rpa-automation`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/python-rpa-automation#service`,
          name: 'Python and RPA Automation',
          serviceType: 'Robotic Process Automation',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/python-rpa-automation`,
          description:
            'Scheduled workflows, desktop & browser automation, file processing, data entry, Excel/CSV/PDF reconciliation, validation, and error reporting.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Python & RPA Automation', item: '/services/python-rpa-automation' },
        ]),
      ],
    },
  },

  '/services/web-scraping-data-extraction': {
    title: 'Web Scraping & Business Data Extraction | ZestBotz Solutions',
    description:
      'Compliant, authorized web data collection and extraction pipelines. B2B prospect research, directory extraction, deduplication, and structured exports.',
    canonical: `${BASE_URL}/services/web-scraping-data-extraction`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/web-scraping-data-extraction#service`,
          name: 'Web Scraping and Business Data Extraction',
          serviceType: 'Web Data Extraction',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/web-scraping-data-extraction`,
          description:
            'Authorized, compliant web data collection, directory research, B2B prospect research, data cleaning, deduplication, and structured exports.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Web Scraping & Data Extraction', item: '/services/web-scraping-data-extraction' },
        ]),
      ],
    },
  },

  '/services/data-engineering': {
    title: 'Data Engineering & ETL/ELT Pipelines | ZestBotz Solutions',
    description:
      'Robust data engineering and ETL/ELT pipelines. Database integrations, automated data cleaning, transformation, orchestration, and warehouse staging.',
    canonical: `${BASE_URL}/services/data-engineering`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/data-engineering#service`,
          name: 'Data Engineering and ETL/ELT',
          serviceType: 'Data Engineering',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/data-engineering`,
          description:
            'Data ingestion, API and database integration, SQL/Python transformations, data validation, ETL/ELT pipelines, orchestration, and monitoring.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Data Engineering', item: '/services/data-engineering' },
        ]),
      ],
    },
  },

  '/services/business-intelligence': {
    title: 'Business Intelligence & Power BI Analytics | ZestBotz Solutions',
    description:
      'Interactive Power BI dashboards, KPI tracking, and business intelligence models. Actionable insights, automated refreshes, and validated data visualization.',
    canonical: `${BASE_URL}/services/business-intelligence`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/business-intelligence#service`,
          name: 'Business Intelligence and Power BI Analytics',
          serviceType: 'Business Intelligence',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/business-intelligence`,
          description:
            'KPI definitions, Power BI dashboards, reporting data models, drill-down analysis, automated refreshes, recurring reports, and data validation.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Business Intelligence', item: '/services/business-intelligence' },
        ]),
      ],
    },
  },

  '/services/healthcare-analytics-rcm': {
    title: 'Healthcare Analytics & RCM Solutions | ZestBotz Solutions',
    description:
      'Healthcare RCM analytics, claims status tracking, denial categorization, and revenue cycle reporting dashboards for medical billing organizations.',
    canonical: `${BASE_URL}/services/healthcare-analytics-rcm`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/healthcare-analytics-rcm#service`,
          name: 'Healthcare Analytics and Revenue Cycle Management',
          serviceType: 'Healthcare Analytics & RCM',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/healthcare-analytics-rcm`,
          description:
            'Claims, payments, adjustments, denial reporting, RCM KPI dashboards, revenue trends, missing-data alerts, and authorized healthcare data ingestion.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Healthcare Analytics & RCM', item: '/services/healthcare-analytics-rcm' },
        ]),
      ],
    },
  },

  '/services/custom-software-development': {
    title: 'Custom Software & SaaS Development | ZestBotz Solutions',
    description:
      'Tailored web applications, internal administration portals, SaaS platforms, and secure REST APIs built with modern React, Python, and cloud architectures.',
    canonical: `${BASE_URL}/services/custom-software-development`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/custom-software-development#service`,
          name: 'Custom Software and SaaS Development',
          serviceType: 'Software Development',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/custom-software-development`,
          description:
            'Custom web applications, internal portals, administration panels, upload & processing interfaces, REST APIs, and database-backed platforms.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Custom Software Development', item: '/services/custom-software-development' },
        ]),
      ],
    },
  },

  '/services/document-automation': {
    title: 'Document Processing & Business Automation | ZestBotz Solutions',
    description:
      'Automated document processing, OCR invoice extraction, form parsing, document classification, and intelligent workflow routing with human review.',
    canonical: `${BASE_URL}/services/document-automation`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/document-automation#service`,
          name: 'Document Processing and Business Process Automation',
          serviceType: 'Document Automation',
          provider: { '@id': `${BASE_URL}/#organization` },
          url: `${BASE_URL}/services/document-automation`,
          description:
            'PDF and form extraction, invoice processing, OCR-assisted workflows, document classification, routing, validation, and human review.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Document Processing & BPA', item: '/services/document-automation' },
        ]),
      ],
    },
  },

  '/products': {
    title: 'Product Suite & SaaS Platforms | ZestBotz Solutions',
    description:
      'Explore our purpose-built product portfolio: SchoolOS (school operations platform), ZestHR (people operations concept), and ZestRCM (revenue cycle analytics).',
    canonical: `${BASE_URL}/products`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'CollectionPage',
          '@id': `${BASE_URL}/products#webpage`,
          url: `${BASE_URL}/products`,
          name: 'Product Suite & SaaS Platforms | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Purpose-built platforms and SaaS solutions developed by ZestBotz Solutions.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/products' },
        ]),
      ],
    },
  },

  '/products/zestSchool': {
    title: 'SchoolOS | School Operations Platform | ZestBotz Solutions',
    description:
      'Multi-tenant school operations SaaS engineered for Indian schools. Student records, batch attendance, gate pass safety workflows, and WhatsApp communication.',
    canonical: `${BASE_URL}/products/zestSchool`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'SoftwareApplication',
          '@id': `${BASE_URL}/products/zestSchool#software`,
          name: 'SchoolOS',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web-based',
          url: `${BASE_URL}/products/zestSchool`,
          description:
            'A planned school management SaaS platform engineered around Indian school administration workflows. Capabilities include student records, batch attendance, gate-pass safety, and WhatsApp communication.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            availability: 'https://schema.org/PreOrder',
          },
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/products' },
          { name: 'SchoolOS', item: '/products/zestSchool' },
        ]),
      ],
    },
  },

  '/products/zestHR': {
    title: 'ZestHR | HR & People Operations Concept | ZestBotz Solutions',
    description:
      'A structured HR management concept exploring employee directory records, attendance tracking, leave request workflows, and onboarding checklists.',
    canonical: `${BASE_URL}/products/zestHR`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'SoftwareApplication',
          '@id': `${BASE_URL}/products/zestHR#software`,
          name: 'ZestHR',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web-based',
          url: `${BASE_URL}/products/zestHR`,
          description:
            'A product-page concept exploring streamlined employee profiles, leave requests, attendance tracking, and internal HR task checklists for growing teams.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/products' },
          { name: 'ZestHR', item: '/products/zestHR' },
        ]),
      ],
    },
  },

  '/products/zestRCM': {
    title: 'ZestRCM Analytics | Healthcare RCM Prototype | ZestBotz Solutions',
    description:
      'Operational healthcare revenue cycle prototype. Claims tracking, denial root-cause analysis, and accounts receivable trends for billing teams.',
    canonical: `${BASE_URL}/products/zestRCM`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'SoftwareApplication',
          '@id': `${BASE_URL}/products/zestRCM#software`,
          name: 'ZestRCM Analytics',
          applicationCategory: 'HealthApplication',
          operatingSystem: 'Web-based',
          url: `${BASE_URL}/products/zestRCM`,
          description:
            'An RCM analytics prototype focused on healthcare data ingestion, claims status tracking, denial categorization, and revenue trend analysis.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/products' },
          { name: 'ZestRCM Analytics', item: '/products/zestRCM' },
        ]),
      ],
    },
  },

  '/industries': {
    title: 'Target Industries & Sectors | ZestBotz Solutions',
    description:
      'Discover how ZestBotz Solutions delivers automation, data pipelines, and analytics for Healthcare, SMBs, Sales & Marketing, Logistics, and Tech Services.',
    canonical: `${BASE_URL}/industries`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'CollectionPage',
          '@id': `${BASE_URL}/industries#webpage`,
          url: `${BASE_URL}/industries`,
          name: 'Target Industries & Sectors | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Target industry solutions across healthcare providers, SMBs, sales and marketing teams, logistics, and tech services.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Industries', item: '/industries' },
        ]),
      ],
    },
  },

  '/work': {
    title: 'Our Work & Case Studies | ZestBotz Solutions',
    description:
      'Explore our engineering methodology, delivery framework, and case studies across process automation, data engineering, and custom software systems.',
    canonical: `${BASE_URL}/work`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'CollectionPage',
          '@id': `${BASE_URL}/work#webpage`,
          url: `${BASE_URL}/work`,
          name: 'Our Work & Case Studies | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Detailed methodology, delivery standards, and practical case studies by ZestBotz Solutions.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Our Work', item: '/work' },
        ]),
      ],
    },
  },

  '/careers': {
    title: 'Careers at ZestBotz Solutions | Join Our Engineering Team',
    description:
      'Explore career opportunities and open roles at ZestBotz Solutions. Join our remote-first team building intelligent automation and data solutions.',
    canonical: `${BASE_URL}/careers`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/careers#webpage`,
          url: `${BASE_URL}/careers`,
          name: 'Careers at ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Careers and engineering opportunities at ZestBotz Solutions.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Careers', item: '/careers' },
        ]),
      ],
    },
  },

  '/contact': {
    title: 'Contact Us | ZestBotz Solutions',
    description:
      'Get in touch with ZestBotz Solutions. Reach out for project inquiries, technical consultations, or business automation partnerships.',
    canonical: `${BASE_URL}/contact`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'ContactPage',
          '@id': `${BASE_URL}/contact#webpage`,
          url: `${BASE_URL}/contact`,
          name: 'Contact Us | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Contact pathways for business enquiries, consultations, and technical inquiries with ZestBotz Solutions.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Contact Us', item: '/contact' },
        ]),
      ],
    },
  },

  '/book-a-call': {
    title: 'Schedule a Consultation | ZestBotz Solutions',
    description:
      'Book a 30-minute discovery call with the ZestBotz Solutions engineering team to discuss your workflows, data challenges, and automation opportunities.',
    canonical: `${BASE_URL}/book-a-call`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'ContactPage',
          '@id': `${BASE_URL}/book-a-call#webpage`,
          url: `${BASE_URL}/book-a-call`,
          name: 'Schedule a Consultation | ZestBotz Solutions',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          description:
            'Schedule a direct consultation with ZestBotz Solutions.',
        },
        makeBreadcrumb([
          { name: 'Home', item: '/' },
          { name: 'Book a Call', item: '/book-a-call' },
        ]),
      ],
    },
  },
}

// Aliases and legacy routes mapping to their primary canonical entries
export const routeAliases = {
  '/services/agentic-ai-page': '/services/ai-automation',
  '/services/process-workflow-page': '/services/python-rpa-automation',
  '/services/web-scraping-page': '/services/web-scraping-data-extraction',
  '/services/erp-page': '/services/data-engineering',
  '/services/data-analytics': '/services/business-intelligence',
  '/services/healthcare-page': '/services/healthcare-analytics-rcm',
  '/services/healthcare-rcm-page': '/services/healthcare-analytics-rcm',
  '/services/web-software-page': '/services/custom-software-development',
  '/services/web-software-development': '/services/custom-software-development',
  '/services/chatbot-page': '/services/document-automation',
  '/services/chatbot-integration': '/services/document-automation',
  '/products/schoolos': '/products/zestSchool',
}

/**
 * Helper to retrieve SEO metadata for any pathname
 */
export function getSeoForPath(pathname) {
  // Normalize pathname: remove trailing slash except for root
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  const targetPath = routeAliases[cleanPath] || cleanPath

  if (seoData[targetPath]) {
    return seoData[targetPath]
  }

  // Fallback for unknown routes
  return {
    title: 'ZestBotz Solutions | AI Automation & Software Development',
    description:
      'ZestBotz Solutions delivers AI automation, RPA, web scraping, data solutions, software development, chatbot integration and healthcare RCM solutions.',
    canonical: `${BASE_URL}${cleanPath}`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [organizationSchema, websiteSchema],
    },
  }
}
