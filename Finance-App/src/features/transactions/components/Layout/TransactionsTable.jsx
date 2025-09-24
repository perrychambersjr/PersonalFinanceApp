import React from 'react';
import IconSearch from '../../../../assets/images/icon-search.svg';

const TransactionsTable = ({ transactions }) => {

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
  }

  return (
    <div className="relative overflow-x-auto rounded-xl bg-white">
      <div className="flex flex-row justify-between items-center">
        <div className="p-6 bg-white">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={IconSearch} alt="search" />
            </div>
            <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="Search transactions"/>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4'>
          <button>sort by</button>
          <button>category</button>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
          {transactions.map((tx) => (
            <tr key={tx.id} className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{tx.name}</th>
              <td className="px-6 py-4">{tx.category}</td>
              <td className="px-6 py-4">{formatDate(tx.date)}</td>
              <td className="px-6 py-4">{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default TransactionsTable