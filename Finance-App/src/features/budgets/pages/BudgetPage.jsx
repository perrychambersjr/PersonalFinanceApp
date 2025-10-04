import React from 'react';
import AddBudgetButton from '../components/AddBudgetButton.jsx';
import BudgetChart from '../components/BudgetChart.jsx';
import BudgetList from '../components/BudgetList.jsx';
import BudgetSummaryCard from '../components/BudgetSummaryCard.jsx';
import { useBudgets } from '../hooks/useBudgets.jsx';

const BudgetPage = () => {
 const { budgets, totalSpent, totalLimit } = useBudgets();

  return (
    <div className="p-8 space-y-8 bg-[var(--beige-100)] min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Budgets</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          + Add New Budget
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <BudgetSummaryCard
            budgets={budgets}
            totalSpent={totalSpent}
            totalLimit={totalLimit}
          />
        </div>

        <div className="col-span-2 space-y-8">
          <BudgetList budgets={budgets} />
        </div>
      </div>
    </div>
  )
}

export default BudgetPage