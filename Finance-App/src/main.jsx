import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../src/components/ui/Sidebar.jsx'
import './App.css'
import App from './App.jsx'

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
