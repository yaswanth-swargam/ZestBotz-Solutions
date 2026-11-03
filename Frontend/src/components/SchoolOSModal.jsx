import { API_BASE_URL } from '../config/api'
import React, { useState, useEffect } from 'react'
import {
  X,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Users,
  Server,
  Sparkles,
  School,
  Lock,
  ArrowUpRight,
  Send,
  BellRing,
  Building2,
  CheckCircle2,
} from 'lucide-react'

// Configurable deployed URL for SchoolOS - update here or via prop
export const DEFAULT_SCHOOLOS_DEPLOYED_URL = 'https://schoolos-demo.zestbotz.com'

export function SchoolOSModal({ isOpen, onClose, initialTab = 'overview' }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [copiedKey, setCopiedKey] = useState(null)
  const [deployedUrl, setDeployedUrl] = useState(DEFAULT_SCHOOLOS_DEPLOYED_URL)

  // Enquiry Form State
  const [form, setForm] = useState({
    name: '',
    schoolName: '',
    email: '',
    phone: '',
    studentCount: '500 - 1,500 students',
    modules: ['WhatsApp Parent Alerts', 'Perimeter Gate Pass Safety'],
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, initialTab])

  if (!isOpen) return null

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const toggleModule = (module) => {
    setForm((prev) => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter((m) => m !== module)
        : [...prev.modules, module],
    }))
  }

  const handleEnquirySubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')

    const payload = {
      name: form.name,
      email: form.email,
      company: form.schoolName ? `${form.schoolName} (Est. ${form.studentCount})` : 'Indian School Lead',
      interest: 'SchoolOS (School Operations Platform)',
      message: `Enquiry from ${form.name} (${form.schoolName || 'Institution'}). Phone/WhatsApp: ${form.phone || 'N/A'}. Student strength: ${form.studentCount}. Modules needed: ${form.modules.join(', ')}. Additional note: ${form.message || 'Interested in a live walkthrough & pilot rollout.'}`,
    }

    try {
      const apiUrl = API_BASE_URL
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message || 'Failed to submit enquiry.')
      }
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err.message || 'Unable to submit enquiry. Please try again or reach out on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  const personas = [
    {
      role: 'Principal / Admin',
      name: 'Dr. Rajeshwar Sharma',
      email: 'principal@dpa.edu.in',
      password: 'principal123',
      badge: 'Strategic Oversight',
      mission: 'Broadcast circulars, view constructive analytics & school-wide performance.',
      accent: '#2563EB',
    },
    {
      role: 'Class Teacher (10-A)',
      name: 'Meera Nambiar',
      email: 'teacher.meera@dpa.edu.in',
      password: 'teacher123',
      badge: 'Daily Operations',
      mission: '1-click batch attendance marking, instant gate pass generation.',
      accent: '#059669',
    },
    {
      role: 'Parent',
      name: "Sunil Sharma (Aarav's Dad)",
      email: 'parent.sunil@gmail.com',
      password: 'parent123',
      badge: 'Parent Transparency',
      mission: 'Real-time WhatsApp absent alerts & constructive progress trajectory.',
      accent: '#D97706',
    },
    {
      role: 'Gate Security Guard',
      name: 'Ramesh Kumar (Main Gate)',
      email: 'guard.ramesh@dpa.edu.in',
      password: 'guard123',
      badge: 'Perimeter Safety',
      mission: 'Physical exit verification console: validates pass codes (e.g. GP-4421).',
      accent: '#DC2626',
    },
    {
      role: 'Super Admin',
      name: 'Antigravity Architect',
      email: 'superadmin@zestbotz.com',
      password: 'admin123',
      badge: 'Platform Control',
      mission: 'Cross-tenant inspection, tenant provisioning & message queue logs.',
      accent: '#7C3AED',
    },
  ]

  const modulesList = [
    'WhatsApp Parent Alerts (Absence & Circulars)',
    'Perimeter Gate Pass Safety (Guard Console)',
    'Constructive Academic Analytics (Mastery Bands)',
    'Full Multi-Tenant SaaS Cloud Setup',
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative flex flex-col w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between p-5 sm:p-7 border-b border-gray-100 bg-gradient-to-r from-blue-50/70 via-white to-orange-50/40">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm">
                <School className="w-3.5 h-3.5" />
                ZestBotz SchoolOS™
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                Planned SaaS Roadmap Prototype
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                CBSE / ICSE Ready
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              AI-Ready School Operations Platform Designed for Indian Schools
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-3xl">
              Engineered with strict tenant boundary isolation (<code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-xs">school_id</code>), automated WhatsApp parent communications, physical perimeter safety gate passes, and non-toxic constructive growth analytics.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 ml-3 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Live Deployed Link & Sandbox Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-5 sm:px-7 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>Deployed Sandbox Environment</span>
                <span className="text-slate-400 font-normal">| Delhi Public Academy (CBSE) Demo</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                <span className="truncate max-w-[240px] sm:max-w-md">{deployedUrl}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => copyToClipboard(deployedUrl, 'sandbox_url')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition border border-white/10"
              title="Copy URL"
            >
              {copiedKey === 'sandbox_url' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy URL</span>
                </>
              )}
            </button>

            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition shadow-sm"
            >
              <span>Launch Sandbox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50/80 px-5 sm:px-7 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: '🌟 Core Pillars & Overview', icon: Sparkles },
            { id: 'personas', label: '🔑 Demo Personas & Accounts', icon: Users },
            { id: 'techstack', label: '🏛️ Tech Stack & Architecture', icon: Server },
            { id: 'enquire', label: '📋 Enquire & Request Demo', icon: Send },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  isActive
                    ? 'border-blue-600 text-blue-600 bg-white'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Contents (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* TAB 1: CORE PILLARS & OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Value Proposition Callout */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Why SchoolOS? Built from the ground up for the Indian Educational Context
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Legacy school ERPs in India suffer from outdated interfaces, expensive SMS costs that parents ignore, lack of gate security, and zero real multi-tenant data safety. ZestBotz SchoolOS solves this with modern React 19 UI, automated WhatsApp parent communication, perimeter student safety gate passes, and constructive, non-harmful academic growth tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Core Pillars Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Pillar 1 */}
                <div className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-blue-300 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Real-Time WhatsApp Automation
                      </h4>
                      <p className="text-xs text-emerald-600 font-medium">High Parent Engagement Channel</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span><strong>Instant Absence Alerts:</strong> Immediate WhatsApp alert when teacher marks a student absent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span><strong>Automated Circular Broadcasts:</strong> Deliver official school notices straight to parent phones.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span><strong>Audit Ledger:</strong> Complete message delivery receipts (<code className="text-xs bg-gray-100 px-1 rounded">wamid.xxxxx</code>) in live queue.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-blue-300 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center font-bold">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Perimeter Safety & Gate Passes
                      </h4>
                      <p className="text-xs text-red-600 font-medium">Physical Gate Verification Workflow</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span><strong>Digital Pass Generation:</strong> Teachers generate secure one-time pass codes (e.g. <code className="bg-gray-100 px-1 rounded">GP-4421</code>).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span><strong>Guard Verification Console:</strong> Dedicated guard screen verifies student photo & pass code at physical gate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span><strong>Instant Parent Exit Ping:</strong> Automated high-priority WhatsApp ping dispatched upon physical gate clearance.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-blue-300 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Constructive Academic Analytics
                      </h4>
                      <p className="text-xs text-blue-600 font-medium">Non-Toxic Pedagogy</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span><strong>Mastery Bands:</strong> Replaces toxic competitive rank lists with <em>Mastery</em>, <em>Proficient</em>, and <em>Developing</em> bands.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span><strong>Benchmark Against Class Average:</strong> Transparent Recharts comparison without public student shaming.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span><strong>Growth Trajectories:</strong> Tracks historical student progress across exam terms.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 4 */}
                <div className="p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-blue-300 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Strict Multi-Tenant Isolation
                      </h4>
                      <p className="text-xs text-purple-600 font-medium">Enterprise Security & Compliance</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span><strong>Row & Document Isolation:</strong> Every record (<code className="bg-gray-100 px-1 rounded">students</code>, <code className="bg-gray-100 px-1 rounded">attendance</code>, etc.) indexed by <code className="bg-gray-100 px-1 rounded">school_id</code>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span><strong>JWT Tenant Verification:</strong> FastAPI dependency verifies tenant boundary on every HTTP request.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span><strong>Strict Multi-Tenant Isolation Design:</strong> Designed for chain schools and education groups with multiple branches.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to action within Overview */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-900 to-blue-950 text-white">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Ready to test SchoolOS in action?</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Switch between Principal, Teacher, Parent, and Security Guard in the live sandbox.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveTab('personas')}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold transition"
                  >
                    View Demo Personas
                  </button>
                  <button
                    onClick={() => setActiveTab('enquire')}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm font-semibold transition shadow-sm"
                  >
                    Enquire for School
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DEMO PERSONAS & ACCOUNTS */}
          {activeTab === 'personas' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Pre-Seeded Demo Institution: Delhi Public Academy - Bangalore South (CBSE)</h4>
                    <p className="text-xs sm:text-sm text-amber-800 mt-1">
                      In the live web app, use the <strong>Persona Switcher Bar</strong> at the top of the screen to switch between any role with zero login friction. Or use the credentials below to test individual auth flows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {personas.map((p) => (
                  <div
                    key={p.role}
                    className="flex flex-col justify-between p-5 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
                        >
                          {p.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-gray-900">{p.role}</h4>
                      <p className="text-xs font-medium text-gray-500">{p.name}</p>

                      <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                        {p.mission}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                      <div className="flex items-center justify-between text-xs bg-gray-50 p-2 rounded-lg">
                        <span className="text-gray-500 truncate mr-1">{p.email}</span>
                        <button
                          onClick={() => copyToClipboard(p.email, `${p.role}-email`)}
                          className="text-gray-400 hover:text-blue-600 shrink-0"
                          title="Copy email"
                        >
                          {copiedKey === `${p.role}-email` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-xs bg-gray-50 p-2 rounded-lg">
                        <span className="text-gray-500">Password: <span className="text-gray-900 font-bold">{p.password}</span></span>
                        <button
                          onClick={() => copyToClipboard(p.password, `${p.role}-pass`)}
                          className="text-gray-400 hover:text-blue-600 shrink-0"
                          title="Copy password"
                        >
                          {copiedKey === `${p.role}-pass` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <a
                  href={deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition shadow-md"
                >
                  <span>Open Live Demo & Try Persona Switcher</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK & ARCHITECTURE */}
          {activeTab === 'techstack' && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-blue-600" />
                    Backend & Micro-Workers
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• <strong>Framework:</strong> Python FastAPI + Pydantic v2 domain schemas</li>
                    <li>• <strong>Authentication:</strong> PBKDF2 SHA-256 passlib + PyJWT with strict <code className="bg-white px-1 rounded">school_id</code> claim validation</li>
                    <li>• <strong>Workers:</strong> Celery + Redis with exponential backoff retries for WhatsApp queues</li>
                    <li>• <strong>API Docs:</strong> Interactive Swagger UI & ReDoc endpoints</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-indigo-600" />
                    Frontend & Client Delivery
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• <strong>Modern Stack:</strong> React 19 + TypeScript + Vite for ultra-fast load times</li>
                    <li>• <strong>Styling & Design:</strong> Tailwind CSS + Lucide Icons + Responsive mobile consoles</li>
                    <li>• <strong>Visual Analytics:</strong> Recharts for non-toxic comparative bar charts and progress trajectory curves</li>
                    <li>• <strong>Multi-Persona Bar:</strong> Instant client evaluation without repeated manual logins</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    Dual Database Strategy
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• <strong>Primary:</strong> MongoDB Atlas (Motor async client) with resilient async in-memory failover fallback</li>
                    <li>• <strong>Relational ORM:</strong> PostgreSQL SQLAlchemy 2.0 ORM deliverables with tenant foreign keys and indices</li>
                    <li>• <strong>Strict Multi-Tenant Isolation Design:</strong> All queries automatically scoped to tenant ID</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    DevOps & Containerization
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• <strong>Production Ready:</strong> Multi-stage Dockerfile for FastAPI backend and Vite Nginx frontend</li>
                    <li>• <strong>Orchestration:</strong> Full <code className="bg-white px-1 rounded">docker-compose.yml</code> (FastAPI, React, Postgres, Redis, Celery)</li>
                    <li>• <strong>One-Click Seeder:</strong> Instant seed router to populate test CBSE/ICSE institutions and data</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ENQUIRE & REQUEST DEMO */}
          {activeTab === 'enquire' && (
            <div className="max-w-2xl mx-auto space-y-6">
              {submitted ? (
                <div className="text-center py-10 px-6 rounded-3xl bg-emerald-50 border border-emerald-200">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Enquiry Received!</h3>
                  <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                    Thank you for your interest in ZestBotz SchoolOS. Our education technology specialist will reach out within 24 hours to schedule your personalized institutional walkthrough.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-sm inline-flex items-center gap-1.5"
                    >
                      <span>Explore Sandbox Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-5">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Request a SchoolOS Demo & Walkthrough
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Designed for Principals, School Trustees, Academic Directors, and IT Coordinators.
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {submitError}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dr. Ramesh Gupta"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        School / Institution Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Cambridge International Academy"
                        value={form.schoolName}
                        onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Work / Official Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. principal@school.edu.in"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Approximate Student Strength
                    </label>
                    <select
                      value={form.studentCount}
                      onChange={(e) => setForm({ ...form, studentCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                    >
                      <option value="Under 500 students">Under 500 students</option>
                      <option value="500 - 1,500 students">500 - 1,500 students</option>
                      <option value="1,500 - 3,000 students">1,500 - 3,000 students</option>
                      <option value="3,000+ students (Chain / Multi-campus)">3,000+ students (Chain / Multi-campus)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Priority Capabilities Needed
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {modulesList.map((mod) => (
                        <label
                          key={mod}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition ${
                            form.modules.includes(mod)
                              ? 'border-blue-600 bg-blue-50/60 text-blue-900 font-medium'
                              : 'border-gray-200 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.modules.includes(mod)}
                            onChange={() => toggleModule(mod)}
                            className="rounded text-blue-600 focus:ring-blue-500"
                          />
                          <span>{mod}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Additional Requirements or Current Challenges
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Currently facing high SMS costs, or need reliable gate pass verification and CBSE grading analytics..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit SchoolOS Enquiry & Schedule Walkthrough</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">ZestBotz Solutions</span>
            <span>•</span>
            <span>Multi-Tenant Enterprise Architecture</span>
            <span>•</span>
            <span className="text-emerald-600 font-medium">WhatsApp Cloud API & Gupshup Verified</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/contact?interest=SchoolOS"
              className="font-medium text-blue-600 hover:underline"
            >
              Open Full Contact Page →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
