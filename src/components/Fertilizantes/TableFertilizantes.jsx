import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import {
  FormGroup,
  Input,
  Label,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import ModalFertilizanteAsuffre from "./Modal/ModalFertilizanteAsuffre";
import ModalFertilizanteFosforo from "./Modal/ModalFertilizanteFosforo";
import ModalFertilizanteNitrgeno from "./Modal/ModalFertilizanteNitrgeno";
import ModalFertilizantePotasio from "./Modal/ModalFertilizantePotasio";

const TableFertilizantes = () => {
  // bordered
  return (
    <Table responsive size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Nitrógeno</th>
          <th>Fósforo</th>
          <th>Potasio</th>
          <th>Azufre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Input id="exampleSelect" name="select" type="select">
              <option>- Seleccione fertilizante Nitrógeno -</option>
              <option>Amoníaco anhidro</option>
              <option>Cianamida cálcica</option>
              <option>Fosfato diamónico DAP</option>
              <option>Fosfato monoamónico MAP</option>
              <option>Fosfourea</option>
              <option>Nitrato de amonio</option>
              <option>Nitrato de amonio calcáreo CAN</option>
              <option>Nitrato de potasio</option>
              <option>Nitrato de sodio</option>
              <option>Solmix (no esta en la base de datos)</option>
              <option>Solmix boro</option>
              <option>Solfos</option>
              <option>SolUAN</option>
              <option>SolUAN Plus</option>
              <option>Sulfato de amonio</option>
              <option>Urea</option>
              <option>Otro</option>
            </Input>
          </td>
          <td>
            <Input id="exampleSelect" name="select" type="select">
              <option>- Seleccione fertilizante Fósforo -</option>
              <option>Fosfato diamónico DAP</option>
              <option>Fosfato monoamónico MAP</option>
              <option>Fosfato natural</option>
              <option>Fosfourea</option>
              <option>Solfos</option>
              <option>Superfosfato simple de calcio SPS</option>
              <option>Superfosfato triple de calcio SPT</option>
              <option>Otro</option>
            </Input>
          </td>
          <td>
            <Input id="exampleSelect" name="select" type="select">
              <option>- Seleccione fertilizante Potasio -</option>
              <option>Cloruro de potasio</option>
              <option>Nitrato de potasio</option>
              <option>Sulfato de potasio</option>
              <option>Otro</option>
            </Input>
          </td>
          <td>
            <Input id="exampleSelect" name="select" type="select">
              <option>- Seleccione fertilizante Azufre -</option>
              <option>Kieserita</option>
              <option>Solmix boro</option>
              <option>Solplus</option>
              <option>Sulfato de amonio</option>
              <option>Sulfato de potasio</option>
              <option>Sulfer 95</option>
              <option>Sulfonitrato de amonio</option>
              <option>Superfosfato simple de calcio SPS</option>
              <option>Yeso</option>
              <option>Otro</option>
            </Input>
          </td>
        </tr>
        <tr>
          <td>
            Cantidad Kg/kg: <FiHelpCircle id="Cantidad" className="fs-5 ms-1" />
          </td>
          <UncontrolledTooltip placement="right" target="Cantidad">
            <span className="fw-bolder">Cantidad Kg/kg</span> Composición del
            fertilizante expresada en en kg/kg de cada elemento. <br />{" "}
            <span className="fw-bolder">Ejemplo:</span> Fosfato monoamónico:
            Composición (% ) : N 11- P 48- K 0<br />
            Composición (kg/kg): N 0.11- P 0.21- K 0
          </UncontrolledTooltip>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
        </tr>

        {/* <tr>
          <td>Eficiencia %</td>
          <td>
            <ModalFertilizanteNitrgeno />
          </td>
          <td>
            <ModalFertilizanteFosforo />
          </td>
          <td>
            <ModalFertilizantePotasio />
          </td>
          <td>
            <ModalFertilizanteAsuffre />
          </td>
        </tr> */}

        <tr>
          <td>
            Eficiencia %: <FiHelpCircle id="Eficiencia" className="fs-5 ms-1" />
          </td>
          <UncontrolledTooltip placement="right" target="Eficiencia">
            <span className="fw-bolder">Eficiencia %</span> Eficiencia de cada
            elemento, en función del tipo de fertilizante, método de aplicación,
            condiciones ambientales, tipo de suelo. <br />
          </UncontrolledTooltip>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
        </tr>

        <tr>
          <td>
            Precio u$s/tn: <FiHelpCircle id="Precio" className="fs-5 ms-1" />
          </td>
          <UncontrolledTooltip placement="right" target="Precio">
            <span className="fw-bolder">Precio u$s/tn</span> Precio del
            fertilizante expresado en dólares por tonelada. <br />
          </UncontrolledTooltip>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
          <td>
            <Input id="text" name="text" placeholder="..." type="text" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableFertilizantes;
