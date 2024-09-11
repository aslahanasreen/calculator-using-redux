import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import glStore from './redux/calStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={glStore}><App /></Provider>
  </StrictMode>,
)
