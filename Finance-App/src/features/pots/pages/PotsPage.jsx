import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import PotsGrid from '../components/PotsGrid';
import PotsHeader from '../components/PotsHeader';
import PotsModals from '../components/PotsModals';

const PotsPage = () => {
  const pots = useRootStore((state) => state.pots)

  // Localized UI state (Modals & Selection)
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [potToEdit, setPotToEdit] = useState(null);

  return (
    <div className="bg-[var(--beige-100)] h-full p-8">
      <PotsHeader onAdd={() => setShowAddModal(true)} />

      <PotsGrid
        pots={pots}
        onEdit={(pot) => {
          setPotToEdit(pot)
          setShowEditModal(true)
        }}
      />

      <PotsModals
        showAddModal={showAddModal}
        onCloseAdd={() => setShowAddModal(false)}
        showEditModal={showEditModal}
        potToEdit={potToEdit}
        onCloseEdit={() => {
          setShowEditModal(false)
          setPotToEdit(null)
        }}
        usedColors={pots.map((p) => p.color)}
        updatePot={(updatedPot) => useRootStore.getState().updatePot(updatedPot)}
      />
    </div>
  )
}

export default PotsPage