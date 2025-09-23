import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PotsPage from '../src/features/pots/pages/PotsPage.jsx'
import HomePage from './features/overview/pages/HomePage.jsx'
import BillsPage from './pages/BillsPage.jsx'
import BudgetPage from './pages/BudgetPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TransactionPage from './pages/TransactionPage.jsx'
import { useRootStore } from './stores/rootStore.js'

export default function App() {

  const hydrate = useRootStore((state) => state.hydrate)

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      hydrate(data) // ✅ this actually triggers your console.log
    }
    loadData()
  }, [hydrate])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transactions" element={<TransactionPage />} />
      <Route path="/budgets" element={<BudgetPage />} />
      <Route path="/pots" element={<PotsPage />} />
      <Route path="/bills" element={<BillsPage />} />\
      {/* 404 Not Found route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
