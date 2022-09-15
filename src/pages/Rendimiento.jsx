import React, { useState, useContext } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip,
} from "reactstrap";

import { DataContext } from "../utility/context/LoteProvider";

// ** import wizard
import WizardRendimiento from "./WizardRendimiento";

import Fertilizantes from "./Fertilizantes";

// ** page of results
import ApexCharts from "../components/Graficos/charts/apex";
import { FiHelpCircle } from "react-icons/fi";

const Rendimiento = () => {
  const { verRecomendacion } = useContext(DataContext);

  const [modalFertilizantes, setModalFertilizantes] = useState(false);
  const [modalDisponibilidadDeAgua, setModalDisponibilidadDeAgua] =
    useState(false);
  const toggleFertilizantes = () => setModalFertilizantes(!modalFertilizantes);
  const toggleDisponibilidadDeAgua = () =>
    setModalDisponibilidadDeAgua(!modalDisponibilidadDeAgua);

  return (
    <>
      {/* <Col>
      <ApexCharts />
    </Col> */}

      <Card>
        <CardHeader>
          <CardTitle className="fs-2 fw-bolder mb-1">
            Recomendación nutricional:
            {/* {JSON.stringify(verRecomendacion, null, 2)} */}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-items-center justify-content-between flex-column flex-sm-column flex-md-row p-sm-2 p-md-5">
            <div>
              <Row>
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">N</span>{" "}
                  <CardText className="fs-4">
                    {/* Urea: Unidad  */}
                    Urea: <span className="fw-bolder">120 kg/ha</span>
                  </CardText>
                </div>
              </Row>

              <Row className="my-1">
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">P</span>{" "}
                  <CardText className="fs-4">
                    {/* Superfosfato triple de calcio SPS: Unidad{" "} */}
                    Superfosfato triple de calcio SPT:{" "}
                    <span className="fw-bolder">80 kg/ha</span>
                  </CardText>
                </div>
              </Row>

              <Row className="my-1">
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">K</span>{" "}
                  <CardText className="fs-4">
                    {/* Cloruro de potasio: Unidad{" "} */}
                    Cloruro de potasio:{" "}
                    <span className="fw-bolder">0 kg/ha</span>
                  </CardText>
                </div>
              </Row>

              <Row>
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">S</span>{" "}
                  <CardText className="fs-4">
                    {/* Yeso: Unidad  */}
                    Yeso: <span className="fw-bolder">0 kg/ha</span>
                  </CardText>
                </div>
              </Row>
            </div>

            <div className="d-flex flex-column flex-sm-row flex-md-column align-items-center justify-content-center gap-2 gap-sm-1 gap-md-3 mt-2 mt-sm-3">
              <Button color="primary" block onClick={toggleFertilizantes}>
                Fertilizantes
              </Button>

              <Modal
                isOpen={modalFertilizantes}
                toggle={toggleFertilizantes}
                size="xl"
                centered={true}
              >
                {/* <ModalHeader toggle={toggleFertilizantes}>
                  Modal title
                </ModalHeader> */}
                <ModalBody>
                  <Fertilizantes />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={toggleFertilizantes}>
                    Cancelar
                  </Button>{" "}
                  <Button color="primary" onClick={toggleFertilizantes}>
                    Aceptar
                  </Button>
                </ModalFooter>
              </Modal>

              <Button
                color="primary"
                block
                onClick={toggleDisponibilidadDeAgua}
              >
                Disponibilidad de agua
              </Button>

              <Modal
                isOpen={modalDisponibilidadDeAgua}
                toggle={toggleDisponibilidadDeAgua}
                centered={true}
              >
                <ModalHeader>Seleccione su disponibilidad de agua</ModalHeader>
                <ModalBody>
                  <Label htmlFor="disponibilidadDeAgua">
                    Disponibilidad de agua
                  </Label>
                  <Input
                    type="select"
                    name="disponibilidadDeAgua"
                    id="disponibilidadDeAgua"
                  >
                    <option value="seleccioneSuDisponibilidad">
                      Seleccione su disponibilidad
                    </option>
                    <option value="Año húmedo">Año húmedo</option>
                    <option value="Año neutro">Año neutro</option>
                    <option value="Año seco">Año seco</option>
                    <option value="Riego">Riego</option>
                  </Input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={toggleDisponibilidadDeAgua}>
                    Cancelar
                  </Button>{" "}
                  <Button color="primary" onClick={toggleDisponibilidadDeAgua}>
                    Aceptar
                  </Button>
                </ModalFooter>
              </Modal>

              {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="primary" caret size="md">
                  Disponibilidad de agua
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="w-100">Año húmedo</DropdownItem>
                  <DropdownItem className="w-100">Año neutro</DropdownItem>
                  <DropdownItem className="w-100">Año seco</DropdownItem>
                  <DropdownItem className="w-100">Riego</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}

              {/* <div className="w-100">
                <Label htmlFor="disponibilidadDeAgua">
                  Disponibilidad de agua
                </Label>
                <Input
                  type="select"
                  name="disponibilidadDeAgua"
                  id="disponibilidadDeAgua"
                >
                  <option value="seleccioneSuDisponibilidad">
                    Seleccione su disponibilidad
                  </option>
                  <option value="Año húmedo">Año húmedo</option>
                  <option value="Año neutro">Año neutro</option>
                  <option value="Año seco">Año seco</option>
                  <option value="Riego">Riego</option>
                </Input>
              </div> */}

              <div className="w-100">
                <Label>Fecha de siembra</Label>
                <Input type="date" value={verRecomendacion.date} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Row>
        <Col sm="12">
          <WizardRendimiento />
        </Col>
      </Row>
    </>
  );
};

export default Rendimiento;
