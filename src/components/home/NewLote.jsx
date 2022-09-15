import React from 'react'
import { Card, CardBody } from 'reactstrap'
import LoteManjeo from '../Alta/wizard/steps/LoteManjeo'

const NewLote = () => {
  return (
    <Card>
        <CardBody>
            <LoteManjeo />
        </CardBody>
    </Card>
  )
}

export default NewLote