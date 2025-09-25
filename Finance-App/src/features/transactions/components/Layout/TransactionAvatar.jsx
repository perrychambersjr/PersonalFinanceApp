import React from 'react'

const TransactionAvatar = ({ name, imageURI }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-4">
      <img src={imageURI} alt="avatar" className="rounded-full h-10 w-10"/>
      <p className="text-gray-900 text-lg font-semibold">{name}</p>
    </div>
  )
}

export default TransactionAvatar