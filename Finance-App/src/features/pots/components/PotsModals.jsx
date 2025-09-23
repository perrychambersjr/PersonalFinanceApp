import React from 'react'
import AddPotModal from './AddPotModal'
import DeletePotModal from './DeletePotModal'
import EditPotModal from './EditPotModal'

const PotsModals = ({
    showAddModal,
    onCloseAdd,
    showEditModal,
    potToEdit,
    onCloseEdit,
    usedColors,
    updatePot,
    showDeleteModal,
    potToDelete,
    onCloseDelete,
    onConfirmDelete
}) => {
  return (
    <> 
        {showAddModal && <AddPotModal 
                            onClose={onCloseAdd} 
                         />}
        {showEditModal && potToEdit && (
            <EditPotModal 
                pot={potToEdit} 
                onClose={onCloseEdit}
                usedColors={usedColors} 
            />
        )}

        {showDeleteModal && potToDelete && (
        <DeletePotModal
          potName={potToDelete.name}
          onClose={onCloseDelete}
          onConfirm={onConfirmDelete}
        />
      )}
    </>
  )
}

export default PotsModals