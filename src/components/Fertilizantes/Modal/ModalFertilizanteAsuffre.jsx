import React, { useState } from 'react'

import { Input, InputGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText } from 'reactstrap'

const ModalFertilizanteAsuffre = () => {
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
        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Eficiencia de S</ModalHeader>
        <ModalBody>
          Intervalo probable: 50 a 90%
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

export default ModalFertilizanteAsuffre