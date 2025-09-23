import React, { useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import { toCurrencyNoDecimal } from '../../../utils/toCurrency';

const WithdrawModal = ({ open, onClose, potId, name, total, goalProgress, theme, target}) => {
  const withdrawFromPot = useRootStore((state) => state.withdrawFromPot);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = parseFloat(amount);
    if(isNaN(numericAmount) || numericAmount <= 0) {
      console.log(numericAmount);
      alert("Please enter a valid amount");
      return;
    }

    if(numericAmount > total) {
      alert("You cannot withdraw more than the total saved.");
      return;
    }

    withdrawFromPot(potId, numericAmount);
    onClose();
    setAmount("");
  }

  return (
  <div 
    onClick={onClose} 
    className={`
      fixed inset-0 flex items-center justify-center transition-colors
      ${open ? "visible bg-black/20" : "invisible"}
    `}
  >
    <div 
      onClick={(e) => e.stopPropagation()} 
      className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 z-50"
    >
      {/* Header */}
      <div className="flex justify-between items-center z-50">
        <h1 className="text-[var(--grey-900)] text-2xl font-bold">
          Withdraw from '{name}'
        </h1>
        <button 
          className="cursor-pointer border-2 border-black w-8 h-8 rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          X
        </button>
      </div>

      {/* Body */}
      <p className="mt-6 text-[var(--grey-500)] font-semibold text-lg">
        Lorem ipsum dolor sit amet, consecetetuer adipiscing elit. Phasellus
        henderit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </p>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="text-[var(--grey-500)] font-semibold">
            Amount to Withdraw
          </p>
          <h1 className="text-3xl font-bold">${total.toFixed(2)}</h1>
        </div>

        <div className="w-full bg-[var(--grey-100)] rounded-full h-2.5 mt-4">
          <div
            className="h-2.5 rounded-full"
            style={{ width: `${goalProgress}%`, backgroundColor: `${theme}` }}
          />
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-[var(--grey-900)]">{goalProgress.toFixed(2)}%</p>
          <p className="text-[var(--grey-500)]">
            Target of {toCurrencyNoDecimal(target)}
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label 
            htmlFor="new_amount" 
            className="text-[var(--grey-900)] font-semibold block mb-2 text-sm"
          >
            Amount to Withdraw
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-bold">$</span>
            <input
              type="number"
              step="0.01"
              id="withdraw_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-8 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full"
              placeholder="0"
              required
            />
          </div>
        </div>

        <button className="w-full py-3 text-center bg-[var(--grey-900)] text-white rounded-lg hover:bg-[var(--grey-500)] transition ease-in-out duration-300">
          Confirm Withdrawal
        </button>
      </form>
    </div>
  </div>
  )
}

export default WithdrawModal