
import React from 'react'
import { Input, Table } from "reactstrap"

const TablaArrancodaro = () => {
    return (
        <Table bordered responsive size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Nitrogeno</th>
                    <th>Fosforo</th>
                    <th>Potasio</th>
                    <th>Asufre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Contenido kg/kg</td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                </tr>
                <tr>
                    <td>Eficiencia %</td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                    <td>
                        <Input
                            type="number"
                            className="form-control"
                            id="basicInput"
                            placeholder="ej: 30"
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TablaArrancodaro
