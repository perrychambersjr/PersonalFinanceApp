import React from 'react'

const SpendingSummary = ({ budgets }) => {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-gray-900 mb-4">Spending Summary</h3>
      <ul className="space-y-3">
        {budgets.map((b) => (
          <li key={b.id} className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <div
                className="w-1.5 h-5 rounded-full"
                style={{ backgroundColor: b.theme }}
              ></div>
              <span className="text-gray-700">{b.category}</span>
            </div>
            <span className="font-semibold text-gray-900">
              ${b.spent.toFixed(2)}
              <span className="text-gray-500 font-normal">
                {" "}
                of ${b.maximum.toFixed(2)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpendingSummary