import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import { toCurrencyNoDecimal } from '../../../utils/toCurrency';

const AddMoneyModal = ({ open, onClose, potId, name, total, goalProgress, theme, target } ) => {
  const depositToPot = useRootStore((state) => state.depositToPot);

  const [amount, setAmount] = useState('');

  // reset when modal opens/closes
  useEffect(() => {
    if(!open) setAmount('');
  }, [open]);

  const handleConfirm = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return; 

    depositToPot(potId, parsedAmount);
    onClose();
  }

  return (
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? 'visible bg-black/20' : 'invisible'}
      `}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg w-1/3">
        {/* Header */}
        <div className="flex flex-row justify-between">
          <h1 className="text-[var(--grey-900)] text-4xl font-bold">
            Add to '{name}'
          </h1>
          <button
            className="cursor-pointer border-black border-2 w-8 h-8 mt-2 rounded-full"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {/* Body */}
        <p className="mt-6 text-[var(--grey-500)] font-semibold text-lg">
          Add money to your savings pot. Enter the amount you’d like to deposit
          below.
        </p>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[var(--grey-500)] font-semibold">Current Balance</p>
            <h1 className="text-4xl font-bold">{toCurrencyNoDecimal(total)}</h1>
          </div>

          <div className="w-full bg-[var(--grey-100)] rounded-full h-2.5 mt-4">
            <div
              className="h-2.5 rounded-full"
              style={{ width: `${goalProgress}%`, backgroundColor: theme }}
            ></div>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <p className="text-[var(--grey-900)]">{goalProgress.toFixed(2)}%</p>
            <p className="text-[var(--grey-500)]">
              Target of {toCurrencyNoDecimal(target)}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-6 mt-6 w-full">
          <div>
            <label
              htmlFor="new_amount"
              className="text-[var(--grey-900)] font-semibold block mb-2 text-sm"
            >
              Amount to add
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none font-semibold text-lg">
                $
              </span>
              <input
                type="number"
                id="new_amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full"
                placeholder="0"
                required
              />
            </div>
            <button
              onClick={handleConfirm}
              className="text-center bg-[var(--grey-900)] text-white rounded-lg w-full mt-6 py-3 hover:bg-[var(--grey-500)] transition ease-in-out duration-300"
            >
              Confirm Addition
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMoneyModal