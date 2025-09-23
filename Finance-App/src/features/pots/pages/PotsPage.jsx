import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import EditPotModal from '../components/EditPotModal';
import PotsCard from '../components/PotsCard';

const PotsPage = () => {
  const [pots, setPots] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [potToEdit, setPotToEdit] = useState(null);

  return (
      <div className="bg-[var(--beige-100)] h-full p-8 ">
        <div className="flex flex-row flex-end justify-between p-4 h-1/10">
          <h1 className="text-5xl font-semibold">Pots</h1>
          <button className="bg-[var(--grey-900)] text-white rounded-lg cursor-pointer hover:bg-[var(--grey-500)] hover:transition ease-in-out duration-500 font-semibold p-4">+ Add New Pot</button>
        </div>

        {showAddModal && (
          <AddPotModal
            userId={userId}
            onClose={() => setAddShowModal(false)}
            onPotCreated={fetchPots}
            usedColors={usedColors}
          />
        )}

        {showEditModal && potToEdit && (
          <EditPotModal
            pot={potToEdit}
            onClose={() => {
              setShowEditModal(false);
              setPotToEdit(null);
            }}
            onPotUpdated={fetchPots}
            usedColors={usedColors}
          />
        )}

        {/* Render pots here */}
        <div className="p-8 grid grid-cols-2 gap-4">
          {pots.map((pot, index) => (
            <PotsCard 
              key={index} 
              pot={pot}
              onPotUpdated={fetchPots}
              onEdit={() => {
                setPotToEdit(pot);
                setShowEditModal(true);
              }}
            />
          ))}
        </div>

    </div>

  )
}

export default PotsPage