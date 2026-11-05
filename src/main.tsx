import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// Fonts are self-hosted (no requests to Google Fonts, see the privacy notice).
import '@fontsource-variable/inter/wght.css'
import '@fontsource/jetbrains-mono/500.css'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
