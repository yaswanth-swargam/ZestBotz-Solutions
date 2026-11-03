export const company = {
  name: 'ZestBotz',
  legalName: 'ZestBotz Solutions Pvt Ltd',
  founder: 'Anil Kumar M.',
  positioning: 'Bridging AI Capabilities with Business Operations',
  tagline: 'Transforming workflows with AI-driven automation & analytics.',
  promises: [
    {
      title: 'Automate work',
      description: 'Streamline repetitive manual work through intelligent automation and reliable scripts.',
    },
    {
      title: 'Connect data',
      description: 'Connect, clean, validate, and integrate operational data across your business systems.',
    },
    {
      title: 'Improve decisions',
      description: 'Gain operational visibility through validated dashboards, alerts, and timely reporting.',
    },
  ],
  mission:
    'Help businesses simplify operations and make better decisions through practical, reliable, and accessible technology solutions.',
  vision:
    'Build a trusted technology partner and product ecosystem that makes intelligent automation and data-driven operations accessible to businesses of different sizes.',
  coreValues: [
    {
      title: 'Practical innovation',
      description: 'We focus on practical, working solutions rather than technology for its own sake.',
    },
    {
      title: 'Reliability and validation',
      description: 'Every automation, pipeline, and report is built with rigorous checks and verification.',
    },
    {
      title: 'Transparency',
      description: 'Clear communication, realistic project scopes, and honest technology guidance.',
    },
    {
      title: 'Continuous improvement',
      description: 'Refining processes and architectures iteratively based on real operational feedback.',
    },
    {
      title: 'Human-centred automation',
      description: 'Designing automation that supports people, maintains approval controls, and respects workflows.',
    },
  ],
  founded: '2024',
  city: 'Hyderabad',
  region: 'Telangana',
  country: 'India',
  locationShort: 'Hyderabad, India',
  locationFull: 'Hyderabad, Telangana, India',
  phone: '+91 7973645912',
  phoneHref: 'tel:+917973645912',
  email: 'support@zestbotz.com',
  websiteLabel: 'www.zestbotz.com',
  websiteHref: 'https://www.zestbotz.com',
  youtubeLabel: 'ZestBotz Solutions',
  youtubeHref: 'https://www.youtube.com/@zestbotzsolutions',
  instagramLabel: '@zestbotz_solutions',
  instagramHref: 'https://www.instagram.com/zestbotz_solutions',
  industry: 'IT Services and IT Consulting',
  companyType: 'Privately held',
  workStyle: 'Remote-first',
  copyright: `© ${new Date().getFullYear()} ZestBotz Solutions Pvt Ltd. All rights reserved.`,
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/zestbotz',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/zestbotz_solutions',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@zestbotzsolutions',
    },
  ],
}

export const trustedCompanies = [
  {
    name: 'Ktrips',
    category: 'Travel & Mobility Solutions',
  },
  {
    name: 'Happy Air Travels',
    category: 'Aviation & Global Ticketing',
  },
  {
    name: 'Rapid Group',
    category: 'Logistics & Industrial Services',
  },
  {
    name: 'Raman Schools',
    category: 'Education & Institutional Operations',
  },
  {
    name: 'Revantage',
    category: 'Enterprise Growth & Analytics',
  },
]

export const servicesList = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Agents and Intelligent Workflow Automation',
    shortTitle: 'AI Agents & Automation',
    href: '/services/ai-automation',
    legacyHref: '/services/agentic-ai-page',
    summary:
      'Workflow mapping, AI-assisted document processing, classification, summarization, routing, API integrations, and human-in-the-loop approvals.',
    tags: ['AI Agents', 'Intelligent Workflows', 'Human Approval'],
    technologies: ['Python', 'LLM Integrations', 'REST APIs', 'FastAPI', 'Automation Frameworks'],
  },
  {
    id: 'python-rpa-automation',
    number: '02',
    title: 'Python and RPA Automation',
    shortTitle: 'Python & RPA Automation',
    href: '/services/python-rpa-automation',
    legacyHref: '/services/process-workflow-page',
    summary:
      'Scheduled workflows, desktop & browser automation, file processing, data entry, Excel/CSV/PDF reconciliation, validation, and error reporting.',
    tags: ['Python Scripts', 'RPA', 'File Processing', 'Scheduled Tasks'],
    technologies: ['Python', 'Selenium', 'PyAutoGUI', 'pywinauto', 'Pandas', 'Task Schedulers'],
  },
  {
    id: 'web-scraping-data-extraction',
    number: '03',
    title: 'Web Scraping and Business Data Extraction',
    shortTitle: 'Web Scraping & Data Extraction',
    href: '/services/web-scraping-data-extraction',
    legacyHref: '/services/web-scraping-page',
    summary:
      'Authorized, compliant web data collection, directory research, B2B prospect research, data cleaning, deduplication, and structured exports.',
    tags: ['Web Scraping', 'Data Extraction', 'Lead Research', 'ETL Staging'],
    technologies: ['Scrapy', 'BeautifulSoup', 'Requests', 'Selenium', 'Python', 'PostgreSQL'],
  },
  {
    id: 'data-engineering',
    number: '04',
    title: 'Data Engineering and ETL/ELT',
    shortTitle: 'Data Engineering & Pipelines',
    href: '/services/data-engineering',
    legacyHref: '/services/erp-page',
    summary:
      'Data ingestion, API and database integration, SQL/Python transformations, data validation, ETL/ELT pipelines, orchestration, and monitoring.',
    tags: ['ETL / ELT', 'Data Pipelines', 'Data Quality', 'Warehousing'],
    technologies: ['SQL', 'Python', 'Airbyte', 'dbt Core', 'Prefect', 'PostgreSQL', 'SQL Server'],
  },
  {
    id: 'business-intelligence',
    number: '05',
    title: 'Business Intelligence and Power BI Analytics',
    shortTitle: 'Business Intelligence & Power BI',
    href: '/services/business-intelligence',
    legacyHref: '/services/data-analytics',
    summary:
      'KPI definitions, Power BI dashboards, reporting data models, drill-down analysis, automated refreshes, recurring reports, and data validation.',
    tags: ['Power BI', 'KPI Dashboards', 'Data Modeling', 'Business Insights'],
    technologies: ['Power BI', 'DAX', 'SQL', 'Python', 'Excel', 'Data Modeling'],
  },
  {
    id: 'healthcare-analytics-rcm',
    number: '06',
    title: 'Healthcare Analytics and Revenue Cycle Management',
    shortTitle: 'Healthcare Analytics & RCM',
    href: '/services/healthcare-analytics-rcm',
    legacyHref: '/services/healthcare-page',
    summary:
      'Claims, payments, adjustments, denial reporting, RCM KPI dashboards, revenue trends, missing-data alerts, and authorized healthcare data ingestion.',
    tags: ['Healthcare Analytics', 'RCM Dashboards', 'Denial Analysis', 'Claims Reporting'],
    technologies: ['Python', 'SQL', 'Power BI', 'Recharts', 'EDI 835/837 Concepts', 'Data Validation'],
  },
  {
    id: 'custom-software-development',
    number: '07',
    title: 'Custom Software and SaaS Development',
    shortTitle: 'Custom Software & SaaS',
    href: '/services/custom-software-development',
    legacyHref: '/services/web-software-page',
    summary:
      'Custom web applications, internal portals, administration panels, upload & processing interfaces, REST APIs, and database-backed platforms.',
    tags: ['Web Applications', 'SaaS', 'REST APIs', 'Admin Portals'],
    technologies: ['React', 'Next.js', 'Node.js', 'Django', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'document-automation',
    number: '08',
    title: 'Document Processing and Business Process Automation',
    shortTitle: 'Document Processing & BPA',
    href: '/services/document-automation',
    legacyHref: '/services/chatbot-page',
    summary:
      'PDF and form extraction, invoice processing, OCR-assisted workflows, document classification, routing, validation, and human review.',
    tags: ['Document OCR', 'Invoice Processing', 'Form Extraction', 'Workflow Routing'],
    technologies: ['OCR', 'Python', 'LLM Parsing', 'Regex', 'PDF Utilities', 'Validation Rules'],
  },
]

export const productList = [
  {
    id: 'schoolos',
    name: 'SchoolOS',
    status: 'Concept / Development Roadmap',
    statusBadge: 'Planned SaaS Roadmap',
    category: 'Education Technology • Multi-Tenant SaaS',
    tagline: 'Planned AI-ready school operations and administration platform.',
    description:
      'A planned school management SaaS platform designed around Indian school administration workflows. Planned capabilities include student records, attendance tracking, fee management, perimeter gate-pass safety workflows, and WhatsApp communication.',
    capabilities: [
      'Student information and records management',
      'Batch attendance tracking with notification triggers',
      'Perimeter safety gate pass workflows with guard verification',
      'Constructive academic growth metrics and reporting',
      'Multi-tenant architecture exploration',
    ],
    route: '/products/zestSchool',
    accent: '#2563EB',
  },
  {
    id: 'zesthr',
    name: 'ZestHR',
    status: 'Product-Page Concept',
    statusBadge: 'Conceptual Design',
    category: 'Human Resources & People Operations',
    tagline: 'Streamlined employee records and routine people workflows.',
    description:
      'A product-page concept exploring streamlined employee profiles, leave requests, attendance tracking, and internal HR task checklists for growing teams.',
    capabilities: [
      'Employee directory and department records concept',
      'Leave application and review workflow design',
      'Attendance summary and tracking views',
      'New hire onboarding checklist templates',
      'Standardized internal HR reporting models',
    ],
    route: '/products/zestHR',
    accent: '#7C3AED',
  },
  {
    id: 'zestrcm',
    name: 'ZestRCM Analytics',
    status: 'Prototype / In Development',
    statusBadge: 'Working Prototype',
    category: 'Healthcare Revenue Operations',
    tagline: 'Operational visibility for healthcare revenue cycle workflows.',
    description:
      'An RCM analytics prototype focused on healthcare data ingestion, claims status tracking, denial categorization, and revenue trend analysis. Built to help billing teams identify reporting gaps without exposing confidential patient data.',
    capabilities: [
      'Claims, payments, and adjustment reporting models',
      'Denial category breakdown and root-cause indicators',
      'Accounts receivable aging trends and missing-data alerts',
      'KPI dashboards for billing and revenue cycle teams',
      'Structured CSV and reporting ingestion workflows',
    ],
    route: '/products/zestRCM',
    accent: '#FF631C',
  },
]

export const targetIndustries = [
  {
    id: 'healthcare',
    number: '01',
    name: 'Healthcare Providers & RCM Organizations',
    shortName: 'Healthcare & RCM',
    summary:
      'Administrative automation, claims and payment reporting, denial tracking, and validated revenue cycle intelligence.',
    challenges: [
      'Manual verification and billing administrative overhead',
      'Fragmented denial categorization and follow-up tracking',
      'Reconciliation bottlenecks across remittances and reports',
    ],
    solutions: [
      'Healthcare Analytics and RCM KPI Dashboards',
      'Claims & Denial Categorization Reporting',
      'Python-driven Remittance File Reconciliation',
    ],
  },
  {
    id: 'smb',
    number: '02',
    name: 'Small & Medium-Sized Businesses',
    shortName: 'Small & Medium Business',
    summary:
      'Practical automation of repetitive tasks, connected spreadsheets, validated dashboards, and accessible custom software.',
    challenges: [
      'Time-consuming manual data entry across disconnected tools',
      'Lack of unified visibility into daily sales and operational KPIs',
      'Limited internal engineering bandwidth for custom software',
    ],
    solutions: [
      'Python RPA for Routine File & Form Handling',
      'Power BI Operational Dashboards',
      'Tailored Web Portals & Lightweight Internal Tools',
    ],
  },
  {
    id: 'sales-marketing',
    number: '03',
    name: 'Sales & Marketing Teams',
    shortName: 'Sales & Marketing',
    summary:
      'Authorized web data extraction, structured directory research, market intelligence, and lead data normalization.',
    challenges: [
      'Labor-intensive prospect discovery and manual data gathering',
      'Messy, duplicate, or unformatted contact and company lists',
      'Manual tracking of competitor pricing and market changes',
    ],
    solutions: [
      'Scheduled, Authorized Web Data Scraping Pipelines',
      'Automated Data Deduplication & Normalization',
      'Structured Prospect Database Feeds for CRM Ingestion',
    ],
  },
  {
    id: 'logistics-operations',
    number: '04',
    name: 'Logistics & Operations Teams',
    shortName: 'Logistics & Operations',
    summary:
      'Scheduled file processing, shipping document data extraction, inventory data staging, and automated exception reporting.',
    challenges: [
      'Disparate shipment records, invoices, and carrier PDFs',
      'Reconciling partner manifests with internal inventory databases',
      'Late detection of data errors and delivery discrepancies',
    ],
    solutions: [
      'Automated PDF Manifest & Invoice Extraction',
      'ETL / ELT Pipelines for Supply Chain Staging',
      'Automated Exception and Discrepancy Alerts',
    ],
  },
  {
    id: 'tech-services',
    number: '05',
    name: 'Technology & Service Companies',
    shortName: 'Technology & Services',
    summary:
      'Backend data engineering, custom administration portals, REST API development, and specialized workflow automation.',
    challenges: [
      'Scaling backend data transformation and database synchronization',
      'Need for dedicated customer-facing or internal administration panels',
      'Integrating external vendor APIs into consistent data models',
    ],
    solutions: [
      'Robust REST APIs & Modern React/Django Portals',
      'Orchestrated Data Transformation with dbt & Python',
      'AI-assisted Document Routing & Exception Handling',
    ],
  },
]
