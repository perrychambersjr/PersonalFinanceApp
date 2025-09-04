import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMoneyStore } from '../stores/moneystore.js'
import data from './data.json'
import BillsPage from './pages/BillsPage.jsx'
import BudgetPage from './pages/BudgetPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PotsPage from './pages/PotsPage.jsx'
import TransactionPage from './pages/TransactionPage.jsx'

export default function App() {
  const setData = useMoneyStore((state) => state.setData);

  useEffect(() => {
    setData(data);
  }, [setData]);

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
