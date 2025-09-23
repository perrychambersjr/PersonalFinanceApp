import React from 'react'

const DeletePotModal = ({ potName, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-opacity-50"
        onClick={onClose} // click outside to close
      />

      {/* Modal content */}
      <div className="relative bg-white p-6 rounded-xl shadow-lg w-full max-w-md z-10">
        <div className="flex justify-between items-start gap-6">
          <h1 className="text-2xl font-bold text-[var(--grey-900)]">
            Delete '{potName}'?
          </h1>
          <button
            className="cursor-pointer border-black border-2 w-8 h-8 rounded-full"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <p className="mt-6 text-[var(--grey-500)] font-medium text-base">
          Are you sure you want to delete this pot? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>

        <button
          className="cursor-pointer bg-[var(--red)] text-white rounded-xl w-full mt-6 py-2 text-lg"
          onClick={onConfirm}
        >
          Yes, Confirm Deletion
        </button>
        <button
          className="cursor-pointer w-full mt-4 py-2 text-lg text-[var(--grey-500)]"
          onClick={onClose}
        >
          No, Go Back
        </button>
      </div>
    </div>
  )
}

export default DeletePotModal