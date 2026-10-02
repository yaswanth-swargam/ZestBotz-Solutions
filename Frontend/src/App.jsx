import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { About } from './pages/About'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Industries } from './pages/Industries'
import { Services } from './pages/Services'
import { Work } from './pages/Work'

import { AgenticAIPage } from './pages/services-page/AgenticAIPage'
import { ChatBotPage } from './pages/services-page/ChatBotPage'
import { DataAnalyticsPage } from './pages/services-page/DataAnalyticsPage'
import { ERPPage } from './pages/services-page/ERPPage'
import { HealthCarePage } from './pages/services-page/HealthCarePage'
import { ProcessWorkflowAutomationPage } from './pages/services-page/ProcessWorkflowAutomationPage'
import { WebScrapingPage } from './pages/services-page/WebScrapingPage'
import { WebSoftwarePage } from './pages/services-page/WebSoftwarePage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/ZestBotz-services" element={<Services />} />

        <Route path="/services/process-workflow-page" element={<ProcessWorkflowAutomationPage />} />
        <Route path="/services/agentic-ai-page" element={<AgenticAIPage />} />
        <Route path="/services/web-scraping-page" element={<WebScrapingPage />} />
        <Route path="/services/web-software-page" element={<WebSoftwarePage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/services/chatbot-page" element={<ChatBotPage />} />
        <Route path="/services/erp-page" element={<ERPPage />} />
        <Route path="/services/healthcare-page" element={<HealthCarePage />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/work" element={<Work />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App