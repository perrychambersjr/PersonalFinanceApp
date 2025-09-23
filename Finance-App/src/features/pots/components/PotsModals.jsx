import React from 'react'
import AddPotModal from './AddPotModal'
import EditPotModal from './EditPotModal'

const PotsModals = ({
    showAddModal,
    onCloseAdd,
    showEditModal,
    potToEdit,
    onCloseEdit,
    usedColors,
    updatePot
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
    </>
  )
}

export default PotsModals