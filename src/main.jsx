import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import globalStore from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={globalStore}><App /></Provider>
  </StrictMode>,
)
