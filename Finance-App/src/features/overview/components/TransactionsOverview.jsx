import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useTransactions } from '../../transactions/hooks/useTransactions';

const TransactionsOverview = () => {
  const navigate = useNavigate();
  const { transactions, isLoading, error } = useTransactions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading transactions.</p>;

  // Sort by latest and only take 5 most recent
  const latestTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
 <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Transactions</h2>
          <Link to="/pots" className="text-[var(--grey-500)] text-sm font-semibold hover:text-[var(--grey-900)] transition">
            View All →
          </Link>
      </div>

      <ul>
        {latestTransactions.map((tx) => (
          <li
            key={tx.id}
            className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none"
          >
            {/* Left side: avatar + name + date */}
            <div className="flex items-center gap-3">
              {tx.avatar && (
                <img
                  src={tx.avatar}
                  alt={tx.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-medium text-gray-900">{tx.name}</p>
                <p className="text-xs text-gray-500">{formatDate(tx.date)}</p>
              </div>
            </div>

            {/* Right side: amount */}
            <p
              className={`font-bold ${
                tx.amount < 0 ? "text-red-500" : "text-green-600"
              }`}
            >
              {tx.amount < 0
                ? `-$${Math.abs(tx.amount).toFixed(2)}`
                : `+$${tx.amount.toFixed(2)}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionsOverview