import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import LightRays from './blocks/Backgrounds/LightRays/LightRays.tsx'
import NodeSocialCaseStudy from './components/CaseStudy/CaseStudies/NodeSocialCaseStudy.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="particles-background">
      <LightRays />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/node-social" element={<NodeSocialCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
