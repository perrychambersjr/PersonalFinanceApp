import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import PotsGrid from '../components/PotsGrid';
import PotsHeader from '../components/PotsHeader';
import PotsModals from '../components/PotsModals';

const PotsPage = () => {
  const pots = useRootStore((state) => state.pots)
  const removePot = useRootStore((state) => state.removePot)
  const fetchPots = useRootStore((state) => state.fetchPots)

  // Localized UI state (Modals & Selection)
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [potToEdit, setPotToEdit] = useState(null);
  
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [potToDelete, setPotToDelete] = useState(null)

  useEffect(() => {
    fetchPots();
  }, [fetchPots]);
  
  const handleDeleteRequest = (pot) => {
    setPotToDelete(pot)
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    if (potToDelete) {
      removePot(potToDelete.id)
    } else {
      return;
    }

    removePot(potToDelete.id);
    setShowDeleteModal(false)
    setPotToDelete(null)
  }

  return (
    <div className="bg-[var(--beige-100)] h-full p-8">
      <PotsHeader onAdd={() => setShowAddModal(true)} />

      <PotsGrid
        pots={pots}
        onEdit={(pot) => {
          setPotToEdit(pot)
          setShowEditModal(true)
        }}
        onDelete={handleDeleteRequest}
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

        showDeleteModal={showDeleteModal}
        potToDelete={potToDelete}
        onCloseDelete={() => setShowDeleteModal(false)}
        onConfirmDelete={handleConfirmDelete}
      />
    </div>
  )
}

export default PotsPage

/**
 * TODO: Progress bars on the modals that reflect progress of the inputted amount in real time
 */