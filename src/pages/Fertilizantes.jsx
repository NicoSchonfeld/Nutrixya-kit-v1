import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import TableFertilizantes from "../components/Fertilizantes/TableFertilizantes";

const Fertilizantes = () => {
  return (
    <Col md="12" lg="12">
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Fertilizantes:{" "}
            <FiHelpCircle id="Fertilizantes" className="fs-5 ms-1" />
            <UncontrolledTooltip placement="right" target="Fertilizantes">
              <span className="fw-bolder">Fertilizantes </span> Seleccionar un
              fertilizante por cada nutriente. <br />{" "}
            </UncontrolledTooltip>
          </CardTitle>

          <TableFertilizantes />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Fertilizantes;
