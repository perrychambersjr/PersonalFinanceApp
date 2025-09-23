import React, { useMemo, useState } from 'react';
import OptionsDropdown from '../../../components/ui/OptionsDropdown';
import { toCurrencyNoDecimal } from '../../../utils/toCurrency';
import AddMoneyModal from './AddMoneyModal';
import WithdrawModal from './WithdrawModal';

const PotsCard = ({ pot, onEdit }) => {
  const goalProgress = (pot.total / pot.target) * 100;

  console.log(pot)

  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [showWithdrawMoneyModal, setShowWithdrawMoneyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => onEdit(pot);
  const handleDelete = () => setShowDeleteModal(true);

  const handleAddClick = () => {
    setShowAddMoneyModal(true);
  }

  const handleWithdrawClick = () => {
    setShowWithdrawMoneyModal(true);
  }

  const options = useMemo(() => [
    { label: 'Edit Pot', action: handleEdit },
    { label: 'Delete Pot', action: handleDelete, danger: true }
  ], [handleEdit, handleDelete]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      {/* Pot Header */}
      <div className="flex flex-row justify-between items-start gap-6">
        <div className="flex flex-row space-x-2">
          <span
            className="w-3 h-3 mt-2 rounded-full"
            style={{ backgroundColor: pot.color }}
          ></span>
          <span className="font-semibold text-xl">{pot.name}</span>
        </div>
        <OptionsDropdown
          options={options}
          className="cursor-pointer text-[var(--grey-500)] text-xl"
        />
      </div>

      {/* Pot Body */}
      <div className="mt-6">
        {/* Progress Bar Header */}
        <div className="flex flex-row justify-between">
          <p className="text-[var(--grey-500)] font-semibold">Total Saved</p>
          <h1 className="text-4xl font-bold">${pot.total.toFixed(2)}</h1>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[var(--grey-100)] rounded-full h-2.5 mt-4">
          <div
            className="h-2.5 rounded-full"
            style={{
              width: `${goalProgress}%`,
              backgroundColor: pot.color,
            }}
          ></div>
        </div>

        {/* Progress Bar Details */}
        <div className="flex flex-row justify-between mt-4">
          <p className="text-[var(--grey-900)]">{goalProgress.toFixed(2)}%</p>
          <p className="text-[var(--grey-500)]">
            Target of {toCurrencyNoDecimal(pot.target)}
          </p>
        </div>
      </div>

      {/* Pot Footer - Actions */}
      <div className="flex flex-row justify-between mt-10 gap-4">
        <button
          className="bg-[var(--beige-100)] rounded-xl h-15 w-1/2 font-semibold
          hover:bg-white hover:shadow-md transition ease-in-out duration-300 border border-transparent hover:border-black"
          onClick={() => setShowAddMoneyModal(true)}
        >
          + Add Money
        </button>
        <button
          className="bg-[var(--beige-100)] rounded-xl h-15 w-1/2 font-semibold
          hover:bg-white hover:shadow-md transition ease-in-out duration-300 border border-transparent hover:border-black"
          onClick={() => setShowWithdrawMoneyModal(true)}
        >
          Withdraw
        </button>
      </div>

      {/* Modals */}
      <AddMoneyModal
        open={showAddMoneyModal}
        onClose={() => setShowAddMoneyModal(false)}
        potId={pot.id}
        name={pot.name}
        total={pot.total}
        goalProgress={goalProgress}
        theme={pot.color}
        target={pot.target}
      />

      <WithdrawModal
        open={showWithdrawMoneyModal}
        onClose={() => setShowWithdrawMoneyModal(false)}
        potId={pot.id}       // 🔑 so withdrawFromPot will work later
        name={pot.name}
        total={pot.total}
        goalProgress={goalProgress}
        theme={pot.color}
        target={pot.target}
      />
    </div>
  )
}

export default PotsCard