import React, { useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import { toCurrencyNoDecimal } from '../../../utils/toCurrency';

const AddMoneyModal = ({ open, onClose, name, total, goalProgress, theme, target} ) => {
  //const { pots } = useMoneyStore((store) => store.balance);
  const [amount, setAmount] = useState('');
  const [updatedAmount, setUpdatedAmount] = useState(0);

  return (
    <div className={`
         fixed inset-0 flex justify-center items-center transition-colors
         ${open ? "visible bg-black/20" : "invisible"}
        `}>
            {/* Modal Header */ }
            <div className="bg-white rounded-lg p-8 shadow-lg w-1/3">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[var(--grey-900)] text-4xl font-bold">Add to '{name}'</h1>
                    <button className="cursor-pointer border-black border-2 w-8 h-8 mt-2 rounded-full"
                      onClick={onClose}
                    >X</button>
                </div>
              {/* Modal Body - Form */ }
              <p className="mt-6 text-[var(--grey-500)] font-semibold text-lg">Lorem ipsum dolor sit amet, consecetetuer adipiscing elit. Phasellus henderit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.</p>   
              {/* Progress Bar} */}
              <div className="mt-6"> 
                {/* Progress Bar Header*/ }
                <div className="flex flex-row justify-between">
                  <p className="text-[var(--grey-500)] font-semibold">New Amount</p>
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
              {/* Modal Form - Input and Submit */}
              <div className="grid gap-6 mt-6 w-full">
                <div>
                  <label htmlFor="new_amount" className="text-[var(--grey-900)] font-semibold block mb-2 text-sm ">Amount to add</label>
                  <div className="relative">
                    <h1 className="absolute inset-y-5 start-0 flex items-center ps-3 pointer-events-none">$</h1>
                  </div>
                  <input type="text" id="new_amount" className="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full" placeholder="0" required />
                  <button className="text-center bg-[var(--grey-900)] text-white rounded-lg w-full mt-6 h-15 hover:bg-[var(--grey-500)] hover:transition ease-in-out duration-800">Confirm Addition</button>
                </div>
              </div>
             </div>
 
    </div>
  )
}

export default AddMoneyModal