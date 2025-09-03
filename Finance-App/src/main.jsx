import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className="flex h-screen">
    <Sidebar />
    <main className="flex-1">
        <App />
    </main>
    </div>
  </BrowserRouter>,
)
