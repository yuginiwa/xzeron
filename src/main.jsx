import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import initPerformanceMonitoring from './lib/performance.js'
import initAccessibility from './lib/accessibility.js'

// Initialize performance monitoring and accessibility features
initPerformanceMonitoring()
initAccessibility()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
