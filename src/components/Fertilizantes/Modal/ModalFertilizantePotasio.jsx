// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input, InputGroupText } from 'reactstrap'

const ModalFertilizantePotasio = () => {
    // ** States
    const [centeredModal, setCenteredModal] = useState(false)
    return (

        <div className='vertically-centered-modal'>
            <InputGroup className='input-group-merge ' >
                <Input placeholder='ej 30' />
                <InputGroupText color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
                    ?
                </InputGroupText>
            </InputGroup>
            <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Eficiencia de K</ModalHeader>
                <ModalBody>
                    Intervalo probable: 40 a 65%
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
                        Accept
                        
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}
export default ModalFertilizantePotasio