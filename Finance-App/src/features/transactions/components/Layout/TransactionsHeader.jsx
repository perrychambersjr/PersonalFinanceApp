import React from 'react'

const TransactionsHeader = () => {
  return (
        <div className="flex flex-row justify-between p-4">
        <h1 className="text-5xl font-semibold">Transactions</h1>
        <button
            
            className='bg-[var(--grey-900)] text-white rounded-lg cursor-pointer hover:bg-[var(--grey-500)] hover:transition ease-in-out duration-500 font-semibold p-4'
        >
         + Add New Transaction
        </button>
    </div>
  )
}

export default TransactionsHeader