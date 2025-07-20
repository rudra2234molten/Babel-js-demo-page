import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Theme from './Theme.jsx'

createRoot(document.getElementById('root')).render(
  <Theme>
    <App />
  </Theme>
)
