import React from 'react'
import { Card, CardBody, CardTitle, Col, Input, Label, Row } from 'reactstrap'

const BalanceN = () => {
  return (
    <Col md='12' lg='7'>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Arrancador
          </CardTitle>
          <Row>
            <Col md='12' lg='4'>
              <h3>Oferta:450Kg N/ha</h3>
            </Col>
            <Col md='12' lg='8'>
              <Label className=''>Cantidad [kgMS/ha]</Label>
              <Input placeholder='Cantidad [kgMS/ha]' />
              <Label className='mt-1'> Precio [$/ton]</Label>
              <Input placeholder='Precio [$/ton]' />
            </Col>
          </Row>

        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Expense Ratio
          </CardTitle>
          <p>
            Spending on various categories
          </p>
        </CardBody>
      </Card>

    </Col>
  )
}

export default BalanceN