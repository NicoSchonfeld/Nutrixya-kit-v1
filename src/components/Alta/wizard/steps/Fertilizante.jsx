// ** React Imports
import React, { Fragment, useContext, useState, useEffect } from "react";

// ** Icons Imports
import { ArrowLeft } from "react-feather";

import { FiHelpCircle } from "react-icons/fi";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
  UncontrolledTooltip,
  Table,
} from "reactstrap";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const Fertilizante = ({ stepper }) => {
  const {
    handleWizard,
    dataForm,
    handleChange,
    // ** state Arrancador
    contenidoNitrogeno,
    setContenidoNitrogeno,
    contenidoFosforo,
    setContenidoFosforo,
    contenidoPotasio,
    setContenidoPotasio,
    contenidoAzufre,
    setContenidoAzufre,
    eficienciasNitrogeno,
    setEficienciasNitrogeno,
    eficienciasFosforo,
    setEficienciasFosforo,
    eficienciasPotasio,
    setEficienciasPotasio,
    eficienciasAzufre,
    setEficienciasAzufre,
  } = useContext(DataContext);

  const [arrancadorAbonoOrganico, setArrancadorAbonoOrganico] = useState(
    "Seleccione un arrancador o abono orgánico"
  );

  const [selectedDefaultArrancador, setSelectedDefaultArrancador] =
    useState(null);

  // ** State errors
  const [formErrors, setFormErrors] = useState({});

  // ** nextPageWizard
  const [nextPageWizard, setNextPageWizard] = useState(false);

  // event to handle
  const [eventClickHandle, setEventClickHandle] = useState(null);

  const validationWizardFertilizante = (e) => {
    setFormErrors(validate(dataForm));
    setNextPageWizard(true);
    setEventClickHandle(e);
  };

  // ** useEffect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && nextPageWizard) {
      // alert("SI FUNCAA, PASA DE PAGINA");
      handleWizard(eventClickHandle);
      // stepper.next();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.starterOrOrganicFertilizer) {
      errors.starterOrOrganicFertilizer = "Obligatorio";
    } else if (
      values.starterOrOrganicFertilizer ===
      "Seleccione un arrancador o abono orgánico"
    ) {
      errors.starterOrOrganicFertilizer = "Obligatorio";
    }

    if (arrancadorAbonoOrganico !== "Ninguno") {
      if (!values.quantity) {
        errors.quantity = "Obligatorio";
      }
    }

    if (arrancadorAbonoOrganico !== "Ninguno") {
      if (!values.price) {
        errors.price = "Obligatorio";
      }
    }

    if (arrancadorAbonoOrganico === "Arrancador") {
      if (!values.starter) {
        errors.starter = "Obligatorio";
      } else if (values.starter === "Seleccione un arrancador") {
        errors.starter = "Obligatorio";
      }
    }

    if (arrancadorAbonoOrganico === "Abono orgánico") {
      if (!values.organicFertilizer) {
        errors.organicFertilizer = "Obligatorio";
      } else if (values.organicFertilizer === "Seleccione un abono orgánico") {
        errors.organicFertilizer = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.nitrogenContent) {
        errors.nitrogenContent = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.phosphorusContent) {
        errors.phosphorusContent = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.potassiumContent) {
        errors.potassiumContent = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.sulphurContent) {
        errors.sulphurContent = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.nitrogenEfficiencies) {
        errors.nitrogenEfficiencies = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.phosphorusEfficiencies) {
        errors.phosphorusEfficiencies = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.potassiumEfficiencies) {
        errors.potassiumEfficiencies = "Obligatorio";
      }
    }

    if (selectedDefaultArrancador === "Otro") {
      if (!values.sulfurEfficiencies) {
        errors.sulfurEfficiencies = "Obligatorio";
      }
    }

    if (!values.costOfFertilizerApplicationAndSoilAnalysis) {
      errors.costOfFertilizerApplicationAndSoilAnalysis = "Obligatorio";
    }

    return errors;
  };

  return (
    <Fragment>
      <div className="content-header">
        <h3 className="mb-0">Fertilizantes</h3>
      </div>
      <Form>
        <Row className="match-height mt-1">
          <Col md="6" sm="12" className="mb-1">
            <Label
              className="form-label mt-1 d-flex align-items-center justify-content-between"
              htmlFor="starterOrOrganicFertilizer"
            >
              Arrancador o abono orgánico
              <FiHelpCircle id="Arrancador" className="fs-5 me-1" />
            </Label>
            <Input
              type="select"
              name="starterOrOrganicFertilizer"
              id="starterOrOrganicFertilizer"
              className={
                formErrors.starterOrOrganicFertilizer
                  ? `error_input_register`
                  : null
              }
              // onChange={handleChange}
              onChange={(e) => {
                // e.preventDefault();
                handleChange(e);
                let selectedValue = e.target.value;
                setArrancadorAbonoOrganico(selectedValue);
              }}
            >
              <option value={"Seleccione un arrancador o abono orgánico"}>
                - Seleccione arrancador o abono orgánico -
              </option>
              <option value={"Ninguno"}>Ninguno</option>
              <option value={"Arrancador"}>Arrancador</option>
              <option value={"Abono orgánico"}>Abono orgánico</option>
            </Input>

            {formErrors.starterOrOrganicFertilizer && (
              <em className="error_input_message_register">
                {formErrors.starterOrOrganicFertilizer}
              </em>
            )}

            <UncontrolledTooltip placement="right" target="Arrancador">
              <span className="fw-bolder">Arrancador o abono orgánico: </span>{" "}
              Si utiliza alguno de estos seleccione, de lo contrario seleccione
              “ninguno”. <br />{" "}
            </UncontrolledTooltip>
          </Col>

          {arrancadorAbonoOrganico !== "Ninguno" &&
          arrancadorAbonoOrganico !==
            "Seleccione un arrancador o abono orgánico" ? (
            <>
              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label mt-1 d-flex align-items-center justify-content-between"
                  htmlFor="quantity"
                >
                  Cantidad (kg/ha)
                  <FiHelpCircle id="Cantidad" className="fs-5 me-1" />
                </Label>
                <Input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="50"
                  className={
                    formErrors.quantity ? `error_input_register` : null
                  }
                  value={dataForm.quantity}
                  onChange={handleChange}
                />

                {formErrors.quantity && (
                  <em className="error_input_message_register">
                    {formErrors.quantity}
                  </em>
                )}

                <UncontrolledTooltip placement="right" target="Cantidad">
                  <span className="fw-bolder">Cantidad (kg/ha): </span> Cantidad
                  en kg/ha del arrancador o abono orgánico que utiliza a la
                  siembra. <br />{" "}
                </UncontrolledTooltip>
              </Col>

              {arrancadorAbonoOrganico === "Arrancador" ? (
                <>
                  <Col md="6" sm="12" className="mb-3">
                    <Label
                      className="form-label d-flex align-items-center justify-content-between"
                      htmlFor="starter"
                    >
                      Arrancador{" "}
                      <FiHelpCircle
                        id="arrancadorOAbonoOrganico"
                        className="fs-5 me-1"
                      />
                    </Label>
                    <Input
                      type="select"
                      name="starter"
                      id="starter"
                      className={
                        formErrors.starter ? `error_input_register` : null
                      }
                      onChange={(e) => {
                        // e.preventDefault();
                        handleChange(e);
                        let selectedValue = e.target.value;
                        setSelectedDefaultArrancador(selectedValue);
                      }}
                    >
                      <option value={"Seleccione un arrancador"}>
                        - Seleccione un arrancador -
                      </option>

                      <option value={"Fosfato monoamónico MAP"}>
                        Fosfato monoamónico MAP
                      </option>

                      <option value={"Fosfato diamónico DAP"}>
                        Fosfato diamónico DAP
                      </option>

                      <option value={"Súper fosfato simple SPS"}>
                        Súper fosfato simple SPS
                      </option>

                      <option value={"Súper fosfato triple SPT"}>
                        Súper fosfato triple SPT
                      </option>

                      <option value={"Urea"}>Urea</option>

                      <option value={"Otro"}>Otro</option>
                    </Input>

                    {formErrors.starter && (
                      <em className="error_input_message_register">
                        {formErrors.starter}
                      </em>
                    )}

                    <UncontrolledTooltip
                      placement="right"
                      target="arrancadorOAbonoOrganico"
                    >
                      <span className="fw-bolder">Arrancador: </span> Seleccione
                      un arrancador o agregue datos en “otro”. <br />{" "}
                    </UncontrolledTooltip>
                  </Col>
                </>
              ) : null}

              {arrancadorAbonoOrganico === "Abono orgánico" ? (
                <>
                  <Col md="6" sm="12" className="mb-3">
                    <Label
                      className="form-label d-flex align-items-center justify-content-between"
                      htmlFor="organicFertilizer"
                    >
                      Abono orgánico{" "}
                      {/* <FiHelpCircle
                        id="arrancadorOAbonoOrganico"
                        className="fs-5 me-1"
                      /> */}
                    </Label>
                    <Input
                      type="select"
                      name="organicFertilizer"
                      id="organicFertilizer"
                      className={
                        formErrors.organicFertilizer
                          ? `error_input_register`
                          : null
                      }
                      onChange={(e) => {
                        // e.preventDefault();
                        handleChange(e);
                        let selectedValue = e.target.value;
                        setSelectedDefaultArrancador(selectedValue);
                      }}
                    >
                      <option value={"Seleccione un abono orgánico"}>
                        - Seleccione un abono orgánico -
                      </option>
                      <option value={"Estiércol vacuno sólido"}>
                        Estiércol vacuno sólido
                      </option>
                      <option value={"Purín de vacuno"}>Purín de vacuno</option>
                      <option value={"Purín vaca lechera"}>
                        Purín vaca lechera
                      </option>
                      <option value={"Estiércol feedlot vacuno"}>
                        Estiércol feedlot vacuno
                      </option>
                      <option value={"Estiércol cerdo solido"}>
                        Estiércol cerdo solido
                      </option>
                      <option value={"Purín de cerdo"}>Purín de cerdo</option>
                      <option value={"Estiércol solido de aves"}>
                        Estiércol solido de aves
                      </option>
                      <option value={"Purín de aves"}>Purín de aves</option>
                      <option value={"Estiércol equino"}>
                        Estiércol equino
                      </option>
                      <option value={"Estiércol ovino"}>Estiércol ovino</option>
                    </Input>

                    {formErrors.organicFertilizer && (
                      <em className="error_input_message_register">
                        {formErrors.organicFertilizer}
                      </em>
                    )}

                    {/* <UncontrolledTooltip
                      placement="right"
                      target="arrancadorOAbonoOrganico"
                    >
                      <span className="fw-bolder">Arrancador: </span> Seleccione
                      un arrancador o agregue datos en “otro”. <br />{" "}
                    </UncontrolledTooltip> */}
                  </Col>
                </>
              ) : null}

              <Col md="6" sm="12" className="mb-3">
                <Label
                  className="form-label d-flex align-items-center justify-content-between"
                  htmlFor="price"
                >
                  Precio (u$s/tn){" "}
                  <FiHelpCircle id="Precio" className="fs-5 me-1" />
                </Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="1100"
                  className={formErrors.price ? `error_input_register` : null}
                  value={dataForm.price}
                  onChange={handleChange}
                />

                {formErrors.price && (
                  <em className="error_input_message_register">
                    {formErrors.price}
                  </em>
                )}
                <UncontrolledTooltip placement="right" target="Precio">
                  <span className="fw-bolder">Precio (u$s/tn): </span> Precio en
                  u$s/tn de dicho arrancador o abono orgánico. <br />{" "}
                </UncontrolledTooltip>
              </Col>
            </>
          ) : null}
        </Row>

        {arrancadorAbonoOrganico === "Arrancador" ? (
          <>
            <Row>
              <Table borderless responsive>
                <thead>
                  <tr>
                    <th> </th>
                    <th>Nitrógeno</th>
                    <th>Fosforo</th>
                    <th>Potasio</th>
                    <th>Azufre</th>
                  </tr>
                </thead>

                {selectedDefaultArrancador === "Fosfato monoamónico MAP" && (
                  <tbody>
                    <tr>
                      <th scope="row">
                        Contenido Kg/Kg{" "}
                        <FiHelpCircle id="ContenidoKg" className="fs-5 ms-1" />
                      </th>
                      <td>0.11kg/kg</td>
                      <td>0.21kg/kg</td>
                      <td>0kg/kg</td>
                      <td>0kg/kg</td>
                    </tr>

                    <UncontrolledTooltip placement="right" target="ContenidoKg">
                      <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                      Composición del fertilizante expresada en kg/kg de cada
                      elemento. Ejemplo: Fosfato monoamónico: <br />
                      <br />
                      Composición (%) : N 11- P2O5 48- K2O 0<br />
                      Composición (kg/kg): N 0.11- P 0.21- K 0
                    </UncontrolledTooltip>

                    <tr>
                      <th scope="row">
                        Eficiencias %{" "}
                        <FiHelpCircle id="Eficiencias" className="fs-5 ms-1" />
                      </th>
                      <td>65%</td>
                      <td>50%</td>
                      <td>0%</td>
                      <td>0%</td>
                    </tr>

                    <UncontrolledTooltip placement="right" target="Eficiencias">
                      <span className="fw-bolder">Eficiencias %: </span>{" "}
                      Eficiencia de cada elemento, en función del tipo de
                      fertilizante, método de aplicación, condiciones
                      ambientales, tipo de suelo.
                    </UncontrolledTooltip>
                  </tbody>
                )}

                {selectedDefaultArrancador === "Fosfato diamónico DAP" && (
                  <>
                    {/* Fosfato diamónico DAP */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0.18kg/kg</td>
                        <td>0.19kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en kg/kg de cada
                        elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>65%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Súper fosfato simple SPS" && (
                  <>
                    {/* Súper fosfato simple SPS */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0kg/kg</td>
                        <td>0.09kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0.12 kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en kg/kg de cada
                        elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>50%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Súper fosfato triple SPT" && (
                  <>
                    {/* Súper fosfato triple SPT */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0kg/kg</td>
                        <td>0.2kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en kg/kg de cada
                        elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Urea" && (
                  <>
                    {/* Urea */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0.46kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en kg/kg de cada
                        elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>65%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Otro" && (
                  <>
                    {/* Otro */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>
                          <Input
                            type="text"
                            name="nitrogenContent"
                            id="nitrogenContent"
                            className={
                              formErrors.nitrogenContent
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.nitrogenContent}
                            onChange={(e) =>
                              // setContenidoNitrogeno(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="phosphorusContent"
                            id="phosphorusContent"
                            className={
                              formErrors.phosphorusContent
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.phosphorusContent}
                            onChange={(e) =>
                              // setContenidoFosforo(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="potassiumContent"
                            id="potassiumContent"
                            className={
                              formErrors.potassiumContent
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.potassiumContent}
                            onChange={(e) =>
                              // setContenidoPotasio(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="sulphurContent"
                            id="sulphurContent"
                            className={
                              formErrors.sulphurContent
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.sulphurContent}
                            onChange={(e) =>
                              // setContenidoAzufre(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en kg/kg de cada
                        elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>
                          <Input
                            type="text"
                            name="nitrogenEfficiencies"
                            id="nitrogenEfficiencies"
                            className={
                              formErrors.nitrogenEfficiencies
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.nitrogenEfficiencies}
                            onChange={(e) =>
                              // setEficienciasNitrogeno(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="phosphorusEfficiencies"
                            id="phosphorusEfficiencies"
                            className={
                              formErrors.phosphorusEfficiencies
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.phosphorusEfficiencies}
                            onChange={(e) =>
                              // setEficienciasFosforo(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="potassiumEfficiencies"
                            id="potassiumEfficiencies"
                            className={
                              formErrors.potassiumEfficiencies
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.potassiumEfficiencies}
                            onChange={(e) =>
                              // setEficienciasPotasio(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="sulfurEfficiencies"
                            id="sulfurEfficiencies"
                            className={
                              formErrors.sulfurEfficiencies
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.sulfurEfficiencies}
                            onChange={(e) =>
                              // setEficienciasAzufre(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}
              </Table>
            </Row>
            <hr />
          </>
        ) : null}

        <Row>
          <Col md="6" sm="12" className="mt-2 mb-2">
            <Label
              className="form-label d-flex align-items-center justify-content-between"
              htmlFor="costOfFertilizerApplicationAndSoilAnalysis"
            >
              Costo de aplicación del fertilizante y del análisis de suelo
              (u$s/ha){" "}
              <FiHelpCircle id="costoDeAplicación" className="fs-5 me-1" />
            </Label>
            <Input
              type="number"
              name="costOfFertilizerApplicationAndSoilAnalysis"
              id="costOfFertilizerApplicationAndSoilAnalysis"
              placeholder="11"
              className={
                formErrors.costOfFertilizerApplicationAndSoilAnalysis
                  ? `error_input_register`
                  : null
              }
              value={dataForm.costOfFertilizerApplicationAndSoilAnalysis}
              onChange={handleChange}
            />
            <UncontrolledTooltip placement="right" target="costoDeAplicación">
              <span className="fw-bolder">
                Costo de aplicación del fertilizante y del análisis de suelo
                (u$s/ha):{" "}
              </span>{" "}
              Costo de la técnica que se verá reflejado en el análisis de
              sensibilidad de los resultados. <br />{" "}
            </UncontrolledTooltip>

            {formErrors.costOfFertilizerApplicationAndSoilAnalysis && (
              <em className="error_input_message_register">
                {formErrors.costOfFertilizerApplicationAndSoilAnalysis}
              </em>
            )}
          </Col>
        </Row>

        <div className="d-flex justify-content-between mt-1">
          <Button
            color="primary"
            className="btn-prev"
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle me-sm-25 me-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">Atras</span>
          </Button>
          <Button
            // type="submit"
            color="success"
            className="btn-submit"
            onClick={(e) => {
              e.preventDefault();
              validationWizardFertilizante(e);
            }}
          >
            Guardar
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Fertilizante;
