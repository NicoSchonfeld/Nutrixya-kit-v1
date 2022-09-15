import React, { useState } from 'react'

import { Input, InputGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText } from 'reactstrap'

const ModalFertilizanteFosforo = () => {
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
        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Eficiencia P</ModalHeader>
        <ModalBody>
          <p>Suelos moderados, ácidos y alcalinos: 13 a 20% </p>
          <p>Suelos muy ácidos: 10 a 15% </p>
          <p>Suelos neutros: 15 a 25% </p>
          <p>
            En los suelos con material de origen de loess, se ha encontrado
            que esas eficiencias son 2,5 veces mayores. Se sugiere corregir
            por este factor.
          </p>
          <p>Los valores más bajos pueden adoptarse si se prevén: </p>
          <p>(a) dificultades en la localización precisa; </p>
          <p>(b) deficiencias hídricas importantes; </p>
          <p>(c) si el déficit del elemento es sólo moderado;</p>
          <p>
            (d) si la distribución del abono es defectuosa, dispareja o
            irregular
          </p>
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

export default ModalFertilizanteFosforo