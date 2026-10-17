import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Industries from './pages/Industries'
import Work from './pages/Work'
import Products from './pages/Products'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import { AgenticAIPage } from './pages/services-page/AgenticAIPage'
import { ChatBotPage } from './pages/services-page/ChatBotPage'
import { DataAnalyticsPage } from './pages/services-page/DataAnalyticsPage'
import { ERPPage } from './pages/services-page/ERPPage'
import HealthCarePage from './pages/services-page/HealthCarePage'
import { ProcessWorkflowAutomationPage } from './pages/services-page/ProcessWorkflowAutomationPage'
import WebScrapingPage from './pages/services-page/WebScrapingPage'
import WebSoftwarePage from './pages/services-page/WebSoftwarePage'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Service subpages */}
          <Route
            path="/services/process-workflow-page"
            element={<ProcessWorkflowAutomationPage />}
          />
          <Route
            path="/services/agentic-ai-page"
            element={<AgenticAIPage />}
          />
          <Route
            path="/services/web-scraping-page"
            element={<WebScrapingPage />}
          />
          <Route
            path="/services/web-software-page"
            element={<WebSoftwarePage />}
          />
          <Route
            path="/services/data-analytics"
            element={<DataAnalyticsPage />}
          />
          <Route
            path="/services/chatbot-page"
            element={<ChatBotPage />}
          />
          <Route path="/services/erp-page" element={<ERPPage />} />
          <Route
            path="/services/healthcare-page"
            element={<HealthCarePage />}
          />

          {/* Backward compatibility redirects for mismatched legacy links */}
          <Route
            path="/services/web-software-development"
            element={<Navigate to="/services/web-software-page" replace />}
          />
          <Route
            path="/services/healthcare-rcm-page"
            element={<Navigate to="/services/healthcare-page" replace />}
          />
          <Route
            path="/services/chatbot-integration"
            element={<Navigate to="/services/chatbot-page" replace />}
          />
          <Route
            path="/zestbotz-services"
            element={<Navigate to="/services" replace />}
          />

          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/work" element={<Work />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Custom 404 Page instead of silent redirection */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App