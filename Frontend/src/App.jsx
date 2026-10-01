import './App.css'
import {Navigate,Route,Routes} from 'react-router-dom'
import {MainLayout} from './layout/MainLayout'
import { About } from './pages/About'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Industries } from './pages/Industries'
import { Services } from './pages/Services'
import { Work } from './pages/Work'
function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/industries" element={<Industries/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
