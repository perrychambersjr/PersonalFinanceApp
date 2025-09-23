import React from 'react'

const DeletePot = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
        <div className="flex flex-row justify-between items-start gap-6">
            <h1 className="text-4xl font-bold text-[var(--grey-900)]">Delete 'Savings'?</h1>
            <button className="cursor-pointer border-black border-2 w-8 h-8 mt-2 rounded-full"
            >X</button>
        </div>
        <p className="mt-6 text-[var(--grey-500)] font-semibold text-lg">Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever.</p>
        <button className="cursor-pointer bg-[var(--red)] text-white rounded-xl w-full mt-6 h-1/5 text-lg">Yes, Confirm Deletion</button>
        <button className="cursor-pointer w-full mt-4 h-1/5 text-lg text-[var(--grey-500)]">
            No, Go Back
        </button>
    </div>
  )
}

export default DeletePot