import React, { useState } from 'react'

import { Input, InputGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText } from 'reactstrap'
import TablaFertilizanteNitrgeno from '../TablaFertilizanteNitrgeno'

const ModalFertilizanteNitrgeno = () => {
    const [centeredModal, setCenteredModal] = useState(false)
    return (
        <div className='vertically-centered-modal'>
            <InputGroup className='input-group-merge ' >
                <Input placeholder='ej 30' />
                <InputGroupText color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
                    ?
                </InputGroupText>
            </InputGroup>
            <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered modal-xl'>
                <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Abono Organico</ModalHeader>
                <ModalBody>
                    <p>1- Si el abono es nitrico la eficiencia esta entre 80% y 90%</p>
                    <p>
                        2- Si el abono es amoniacal los factores que reducen la eficiencia
                        son :
                    </p>
                    <p>
                        <strong>a)</strong> Un 20 % se fija como amoniaco al complejo de
                        intercambio , pero si anualmente se alican dosis mayores a 120 kg/ha
                        de abono amoniacl,debe considerarse que hay 0% de perdida.
                    </p>
                    <p>
                        <strong>B)</strong> Porcentaje de perdida por volatilizacion de
                        amoniaco, segun la siguiente tabla :
                    </p>
                    <TablaFertilizanteNitrgeno/>
                    <p className="mt-1">
                        Si pH mayor 7 la perdida por volatilizacion puede aumentar un 10%
                    </p>
                    <p>
                        Para obtener eficiencia del abono amoniacal restarle a 100% los
                        valores estimados en los puntos <strong>a </strong>y <strong>b</strong>
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

export default ModalFertilizanteNitrgeno