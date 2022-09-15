import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import WizardModernAlta from "../Alta/wizard/WizardModernAlta";

const Alta = () => {
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <WizardModernAlta />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Alta;
