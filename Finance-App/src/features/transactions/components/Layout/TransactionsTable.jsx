import React, { useMemo, useState } from 'react';
import CategoryFilter from '../Controls/CategoryFilter';
import SearchBar from '../Controls/SearchBar';
import SortDropdown from '../Controls/SortDropdown';
import TransactionAmount from './TransactionAmount';
import TransactionAvatar from './TransactionAvatar';

const TransactionsTable = ({ transactions, onSearchChange, formatDate, sortDir, setSortDir, categoryFilter, setCategoryFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(transactions.length / pageSize);

  // Slice transactions for current page
  const paginatedTransactions = useMemo(() => {
    // Skip transactions that belong to pages before current. E.g., Page 2 - (2-1) * 10 = 10. start at index 10
    const startIndex = (currentPage - 1) * pageSize;
    // Return transactions in range. E.g., Page 2 - slice(10, 20) -> transactions 10-19
    return transactions.slice(startIndex, startIndex + pageSize);
  }, [transactions, currentPage, pageSize]);

  return (
    <div className="relative overflow-x-auto rounded-xl bg-white p-6 divide-y divide-gray-200">
      <div className="flex flex-row justify-between items-center">
        <SearchBar onSearchChange={onSearchChange} />
        <div className="flex flex-row justify-between items-center gap-4">
          <SortDropdown setSortDir={setSortDir} sortDir={sortDir}/>
          <CategoryFilter setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}/>
        </div>

      </div>
      <table className="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Recipient / Sender
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedTransactions.map((tx) => (
            <tr key={tx.id} className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"><TransactionAvatar name={tx.name} imageURI={tx.avatar}></TransactionAvatar></th>
              <td className="px-6 py-4">{tx.category}</td>
              <td className="px-6 py-4">{formatDate(tx.date)}</td>
              <td className="px-6 py-4"><TransactionAmount amount={tx.amount}></TransactionAmount></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between items-center p-4">
        {/* Prev button */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-white border-1 border-gray-300 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page numbers */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-gray-900 text-white"
                  : "bg-white border-1 border-gray-300 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-white border-1 border-gray-300 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TransactionsTable