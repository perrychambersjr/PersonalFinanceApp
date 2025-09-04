import React from 'react';
import { toCurrencyNoDecimal } from '../../utils/toCurrency';

const PotsCard = ({name, target, total, theme}) => {
  const goalProgress = (total / target) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      {/* Pot Header */}
      <div className="flex flex-row justify-between items-start gap6">
         <div className="flex flex-row space-x-2">
          <span className="w-3 h-3 mt-2 rounded-full" style={{backgroundColor: `${theme}`}}></span>
          <span className="font-semibold text-xl">{name}</span>
         </div>
        <button className="cursor-pointer text-[var(--grey-500)] text-xl">...</button>
      </div>
      {/* Pot Body - Progress bar */}
      <div className="mt-6"> 
        {/* Progress Bar Header*/ }
        <div className="flex flex-row justify-between">
          <p className="text-[var(--grey-500)] font-semibold">Total Saved</p>
          <h1 className="text-4xl font-bold">${total.toFixed(2)}</h1>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-[var(--grey-100)] rounded-full h-2.5 mt-4">
          <div className="h-2.5 rounded-full" style={{ width: `${goalProgress}%`, backgroundColor: `${theme}`}}></div>
        </div>
        {/* Progress Bar Details */}
        <div className="flex flex-row justify-between mt-4">
          <p className="text-[var(--grey-900)]">{goalProgress.toFixed(2)}%</p>
          <p className='text-[var(--grey-500)]'>Target of {toCurrencyNoDecimal(target)}</p>
        </div>
      </div>
      {/* Pot Footer - Actions */}
      <div className="flex flex-row justify-between mt-10 gap-4">
        <button className="bg-[var(--beige-100)] rounded-xl h-15 w-1/2 font-semibold
        hover:bg-white hover:shadow-md hover:transition ease-in-out duration-300 hover:border-1 border-black
        ">+ Add Money</button>
        <button className="bg-[var(--beige-100)] rounded-xl h-15 w-1/2 font-semibold
        hover:bg-white hover:shadow-md hover:transition ease-in-out duration-300 hover:border-1 border-black
        ">Withdraw</button>
      </div>
    </div>
  )
}

export default PotsCard