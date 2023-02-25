import React, { StrictMode } from 'react'
import  { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
