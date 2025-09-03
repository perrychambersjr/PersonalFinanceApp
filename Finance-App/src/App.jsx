import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BillsPage from './pages/BillsPage.jsx'
import BudgetPage from './pages/BudgetPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PotsPage from './pages/PotsPage.jsx'
import TransactionPage from './pages/TransactionPage.jsx'

export default function App() {

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
