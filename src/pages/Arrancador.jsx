import React from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import ModalArrancador from '../components/Arrancador/ModalArrancador'
import TablaArrancodaro from '../components/Arrancador/TablaArrancodaro'

const Arrancador = () => {
  return (
    <Col md='12' lg='12'>
      <Card>
        <CardBody>

          <Row>
            <Col md='12' lg='6'>
              <h3>Abono organico o arrancador:</h3>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                className='mt-2'
              >
                <option>Ninguno</option>
                <option>Arrancador</option>
                <option>Estierco vacuno solido</option>
                <option>Purin de vacuno</option>
                <option>Purin vaca lechera</option>
                <option>Estiercol feedlot vacuno</option>
                <option>Estierco cerdo solido</option>
                <option>Purin de cerdo</option>
              </Input>
              <ModalArrancador />

            </Col>
            <Col md='12' lg='6'>
              <Label className=''>Cantidad [kgMS/ha]</Label>
              <Input placeholder='Cantidad [kgMS/ha]' />
              <Label className='mt-1'> Precio [$/ton]</Label>
              <Input placeholder='Precio [$/ton]' />
            </Col>
          </Row>
          <div className='mt-1'>
            <TablaArrancodaro />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Arrancador