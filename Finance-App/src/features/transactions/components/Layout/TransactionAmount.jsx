import React from 'react'


// Math.sign() returns 1 if positive, -1 if negative, 0 if positive zero -0 if negative 0, NaN if not a number
const TransactionAmount = ({ amount }) => {
  return (
    <div>
      <p className={`font-bold text-lg ${
        Math.sign(amount) === -1 ? "text-red-500" : "text-green-700"
      }`}>
        {Math.sign(amount) === -1 ? `$${amount.toFixed(2)}` : `+$${amount.toFixed(2)}`}
      </p>
    </div>
  )
}

export default TransactionAmount