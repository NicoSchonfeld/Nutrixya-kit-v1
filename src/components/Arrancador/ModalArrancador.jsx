// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalArrancador = () => {
    // ** States
    const [centeredModal, setCenteredModal] = useState(false)
    return (
        <div className='demo-inline-spacing'>
            <div className='vertically-centered-modal'>
                <Button color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
                    ?
                </Button>
                <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Abono Organico</ModalHeader>
                    <ModalBody>
                        Seleccione un abono, indicar Cantidad y Precio ajustar valores propuestos. Los 3 ultimos son 'Editables'es decir se guardan las modificaciones.
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
                            Accept
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
export default ModalArrancador
