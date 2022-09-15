import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const BalanceCero = () => {
  return (
    <Col md='12' lg='12'>
      <Card>
        <CardBody>
          <h3>Dosis de mantenimiento (abonos seleccionados):</h3>
          <p>
            Dosis minima para evitar empobrecimiento del suelo
            (balance cero):
          </p>
          <ul>
            <li>N 0 kg/ha de</li>
            <li>P 0 kg/ha de</li>
            <li>K 0 kg/ha de</li>
            <li>S 0 kg/ha de</li>
            <li>Ca y Mg 0 kg/ha de Dolomita</li>
          </ul>
          <p>Costo para lograr balance cero: 0 qq/ha de Alfalfa</p>
          <h3>Dosis de correccion de P (abono seleccionado):</h3>
          <p>
            Para enriquecer 20 cm de suelos se debe aplicar ademas 0
            kg/ha por cada ppm de P que se desee incrementar.
          </p>
          <h3>Consumo de P</h3>
          <p>
            Del P exportado por las cosechas un 0% es de origen
            organico y el resto proviene de los minerales.
          </p>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BalanceCero      