import React from 'react'
import BudgetChart from './BudgetChart'
import SpendingSummary from './SpendingSummary'

const BudgetSummaryCard = ({
    budgets,
    totalSpent,
    totalLimit
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
      <div className="relative w-full max-w-[320px] aspect-square mb-6">
        <BudgetChart budgets={budgets} />

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-4xl font-bold text-gray-900 leading-tight">
            ${totalSpent}
          </p>
          <p className="text-sm text-gray-500">of ${totalLimit} limit</p>
        </div>
      </div>

      {/* Spending Summary */}
      <div className="w-full">
        <SpendingSummary budgets={budgets} />
      </div>
    </div>
  )
}

export default BudgetSummaryCard