import React from 'react'

const AddBudgetButton = () => {
  return (
    <button
        className='bg-[var(--grey-900)] text-white rounded-lg cursor-pointer hover:bg-[var(--grey-500)] hover:transition ease-in-out duration-500 font-semibold p-4'
    >
        + Add New Budget
    </button>
  )
}

export default AddBudgetButton