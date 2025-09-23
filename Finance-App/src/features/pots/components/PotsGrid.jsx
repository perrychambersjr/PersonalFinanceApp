import React from 'react';
import PotsCard from './PotsCard';
import PotsModals from './PotsModals';

const PotsGrid = ({ pots, onEdit, onDelete }) => {
  return (
    <div className="p-8 grid grid-cols-2 gap-4">
        {pots.map((pot) => (
        <PotsCard
            key={pot.id}
            pot={pot}
            onEdit={(pot) => {onEdit(pot)}}
            onDelete={(pot) => onDelete(pot)}
            />
        ))}
    </div>
  )
}

export default PotsGrid
