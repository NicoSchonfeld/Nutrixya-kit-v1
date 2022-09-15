import React from 'react'
import { Input, Table } from 'reactstrap'

const TablaFertilizanteNitrgeno = () => {
  return (
      <Table responsive bordered size="sm">
          <thead>
              <tr>
                  <th ROWSPAN="2">Abono</th>
                  <th ROWSPAN="2">Forma de aplicacion</th>
                  <th COLSPAN="3">Condicion climatica</th>
              </tr>
              <tr>
                  <th>mas de 12mm de lluvia en 2 dias</th>
                  <th>mas de 6mm de lluvia en 7 dias</th>
                  <th>sin lluvia en 7 dias </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td className="text-nowrap" ROWSPAN="3">
                      Urea
                  </td>
                  <td className="text-nowrap">al voleo sin incorporar</td>
                  <td className="text-nowrap">hasta 20%</td>
                  <td className="text-nowrap">hasta 30%</td>
                  <td className="text-nowrap">hasta 40%</td>
              </tr>
              <tr>
                  <td>superficial en banda</td>
                  <td className="text-nowrap">hasta 12%</td>
                  <td className="text-nowrap">hasta 20%</td>
                  <td className="text-nowrap">hasta 30%</td>
              </tr>
              <tr>
                  <td>Incorporado</td>
                  <td className="text-nowrap">hasta 10%</td>
                  <td className="text-nowrap">hasta 10%</td>
                  <td className="text-nowrap">hasta 10%</td>
              </tr>
              <tr>
                  <td className="text-nowrap" ROWSPAN="2">
                      sulfato de amonio
                  </td>
                  <td> al voleo sin incorporar</td>
                  <td className="text-nowrap">hasta 40%</td>
                  <td className="text-nowrap">hasta 50%</td>
                  <td className="text-nowrap">hasta 60%</td>
              </tr>
              <tr>
                  <td>Incorporado</td>
                  <td className="text-nowrap">hasta 10%</td>
                  <td className="text-nowrap">hasta 20%</td>
                  <td className="text-nowrap">hasta 30%</td>
              </tr>
              <tr>
                  <td className="text-nowrap" ROWSPAN="2">
                      Nitrato de amonio
                  </td>
                  <td> al voleo sin incorporar</td>
                  <td className="text-nowrap">hasta 20%</td>
                  <td className="text-nowrap">hasta 25%</td>
                  <td className="text-nowrap">hasta 30%</td>
              </tr>
              <tr>
                  <td>Incorporado</td>
                  <td className="text-nowrap">hasta 10%</td>
                  <td className="text-nowrap">hasta 15%</td>
                  <td className="text-nowrap">hasta 20%</td>
              </tr>
              <tr>
                  <td className="text-nowrap">Amoniaco anhidro</td>
                  <td>inyectado</td>
                  <td className="text-nowrap">hasta 5%</td>
                  <td className="text-nowrap">hasta 5%</td>
                  <td className="text-nowrap">hasta 5%</td>
              </tr>
          </tbody>
      </Table>
  )
}

export default TablaFertilizanteNitrgeno