// ** React Imports
import React, { useContext, useState, useEffect } from "react";

// ** Icons Imports
import { ArrowLeft, ArrowRight } from "react-feather";
import { FiHelpCircle } from "react-icons/fi";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Input,
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  UncontrolledTooltip,
} from "reactstrap";

import { DataContext } from "../../../../utility/context/LoteProvider";

const Cultivo = ({ stepper }) => {
  const { handleChange, dataForm } = useContext(DataContext);

  // ** State errors
  const [formErrors, setFormErrors] = useState({});

  // ** nextPageWizard
  const [nextPageWizard, setNextPageWizard] = useState(false);

  const validationWizardCultivo = () => {
    setFormErrors(validate(dataForm));
    setNextPageWizard(true);
  };

  // ** useEffect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && nextPageWizard) {
      // alert("SI FUNCAA, PASA DE PAGINA");
      stepper.next();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.crop) {
      errors.crop = "Obligatorio";
    } else if (values.crop === "Seleccione un cultivo") {
      errors.crop = "Obligatorio";
    }

    if (!values.targetPerformance) {
      errors.targetPerformance = "Obligatorio";
    }

    if (!values.date) {
      errors.date = "Obligatorio";
    }

    if (!values.productPrice) {
      errors.productPrice = "Obligatorio";
    }

    if (!values.predecessorCrop) {
      errors.predecessorCrop = "Obligatorio";
    } else if (values.predecessorCrop === "Seleccione un cultivo") {
      errors.predecessorCrop = "Obligatorio";
    }

    if (!values.yieldOfThePredecessorCrop) {
      errors.yieldOfThePredecessorCrop = "Obligatorio";
    }

    if (!values.timeElapsedBetweenHarvestAndSowing) {
      errors.timeElapsedBetweenHarvestAndSowing = "Obligatorio";
    } else if (
      values.timeElapsedBetweenHarvestAndSowing ===
      "Seleccione el tiempo transcurrido"
    ) {
      errors.timeElapsedBetweenHarvestAndSowing = "Obligatorio";
    }

    return errors;
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Cultivo</CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" htmlFor="crop">
                  Cultivo a fertilizar
                </Label>
                <Input
                  type="select"
                  name="crop"
                  id="crop"
                  className={formErrors.crop ? `error_input_register` : null}
                  onChange={handleChange}
                >
                  <option value={"Seleccione un cultivo"}>
                    - Seleccione un cultivo -
                  </option>
                  <option value={"Alfalfa"}>Alfalfa</option>
                  <option value={"Algodón"}>Algodón</option>
                  <option value={"Arroz"}>Arroz</option>
                  <option value={"Avena forrajera"}>Avena forrajera</option>
                  <option value={"Avena grano"}>Avena grano</option>
                  <option value={"Blue grass heno"}>Blue grass heno</option>
                  <option value={"Canola (Colza)"}>Canola (Colza)</option>
                  <option value={"Caña de azúcar"}>Caña de azúcar</option>
                  <option value={"Cártamo"}>Cártamo</option>
                  <option value={"Caupí"}>Caupí</option>
                  <option value={"Cebada"}>Cebada</option>
                  <option value={"Cebada forrajera"}>Cebada forrajera</option>
                  <option value={"Centeno (grano)"}>Centeno (grano)</option>
                  <option value={"Coastal heno"}>Coastal heno</option>
                  <option value={"Falaris + T. subterráneo"}>
                    Falaris + T. subterráneo
                  </option>
                  <option value={"Garbanzo"}>Garbanzo</option>
                  <option value={"Girasol"}>Girasol</option>
                  <option value={"Haba"}>Haba</option>
                  <option value={"Lenteja"}>Lenteja</option>
                  <option value={"Lino"}>Lino</option>
                  <option value={"Maíz grano"}>Maíz grano</option>
                  <option value={"Maíz silo"}>Maíz silo</option>
                  <option value={"Maní"}>Maní</option>
                  <option value={"Papa"}>Papa</option>
                  <option value={"Poroto (frijol)"}>Poroto (frijol)</option>
                  <option value={"Pradera mixta"}>Pradera mixta</option>
                  <option value={"Pradera natural"}>Pradera natural</option>
                  <option value={"Raigráss"}>Raigráss</option>
                  <option value={"Remolacha azucarera"}>
                    Remolacha azucarera
                  </option>
                  <option value={"Soja"}>Soja</option>
                  <option value={"Sorgo forrajero"}>Sorgo forrajero</option>
                  <option value={"Sorgo granífero"}>Sorgo granífero</option>
                  <option value={"T. blanco + Raigráss"}>
                    T. blanco + Raigráss
                  </option>
                  <option value={"Tabaco"}>Tabaco</option>
                  <option value={"Trébol rosado"}>Trébol rosado</option>
                  <option value={"Trébol subterráneo"}>
                    Trébol subterráneo
                  </option>
                  <option value={"Trigo"}>Trigo</option>
                </Input>

                {formErrors.crop && (
                  <em className="error_input_message_register">
                    {formErrors.crop}
                  </em>
                )}
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label d-flex align-items-center justify-content-between"
                  htmlFor="targetPerformance"
                >
                  Rendimiento objetivo (qq/ha){" "}
                  <FiHelpCircle
                    id="rendimientoObjetivo"
                    className="fs-5 me-1"
                  />
                </Label>
                <Input
                  type="number"
                  name="targetPerformance"
                  id="targetPerformance"
                  placeholder="90"
                  className={
                    formErrors.targetPerformance
                      ? `error_input_register margin-bajo`
                      : `margin-bajo`
                  }
                  value={dataForm.targetPerformance}
                  onChange={handleChange}
                />

                {formErrors.targetPerformance && (
                  <em className="error_input_message_register">
                    {formErrors.targetPerformance}
                  </em>
                )}

                <UncontrolledTooltip
                  placement="right"
                  target="rendimientoObjetivo"
                >
                  <span className="fw-bolder">
                    Rendimiento objetivo (qq/ha){" "}
                  </span>{" "}
                  Rendimiento que pretende alcanzar expresado en quintales por
                  hectárea. <br />{" "}
                </UncontrolledTooltip>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" htmlFor="date">
                  Fecha de siembra
                </Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="8/03/2022"
                  className={formErrors.date ? `error_input_register` : null}
                  onChange={handleChange}
                />

                {formErrors.date && (
                  <em className="error_input_message_register">
                    {formErrors.date}
                  </em>
                )}
              </Col>

              <Col md="6" sm="12">
                <Label
                  className="form-label d-flex align-items-center justify-content-between"
                  htmlFor="productPrice"
                >
                  Precio del producto en U$S/tn{" "}
                  <FiHelpCircle id="precioDelProducto" className="fs-5 me-1" />
                </Label>
                <Input
                  type="number"
                  name="productPrice"
                  id="productPrice"
                  placeholder="1"
                  // className="margin-bajoDos"
                  className={
                    formErrors.productPrice
                      ? `error_input_register margin-bajoDos`
                      : `margin-bajoDos`
                  }
                  value={dataForm.productPrice}
                  onChange={handleChange}
                />

                {formErrors.productPrice && (
                  <em className="error_input_message_register">
                    {formErrors.productPrice}
                  </em>
                )}

                <UncontrolledTooltip
                  placement="right"
                  target="precioDelProducto"
                >
                  <span className="fw-bolder">
                    Precio del producto en U$S/tn{" "}
                  </span>{" "}
                  Precio del grano o producto expresado en dólares por tonelada.{" "}
                  <br />{" "}
                </UncontrolledTooltip>
              </Col>

              <span className="mt-5"></span>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" htmlFor="predecessorCrop">
                  Cultivo antecesor
                </Label>
                <Input
                  type="select"
                  name="predecessorCrop"
                  id="predecessorCrop"
                  className={
                    formErrors.predecessorCrop ? `error_input_register` : null
                  }
                  onChange={handleChange}
                >
                  <option value={"Seleccione un cultivo"}>
                    - Seleccione un cultivo -
                  </option>
                  <option value={"Alfalfa"}>Alfalfa</option>
                  <option value={"Arroz"}>Arroz</option>
                  <option
                    value={"Avena/cebada/centeno/trigo/raigráss forrajeros "}
                  >
                    Avena/cebada/centeno/trigo/raigráss forrajeros{" "}
                  </option>
                  <option value={"Avena/cebada/centeno/trigo/raigráss grano"}>
                    Avena/cebada/centeno/trigo/raigráss grano
                  </option>
                  <option value={"Colza"}>Colza</option>
                  <option value={"Garbanzo"}>Garbanzo</option>
                  <option value={"Girasol"}>Girasol</option>
                  <option value={"Maíz grano/sorgo"}>Maíz grano/sorgo</option>
                  <option value={"Maíz silo"}>Maíz silo</option>
                  <option value={"Maní"}>Maní</option>
                  <option value={"Pastura predominante gramínea"}>
                    Pastura predominante gramínea
                  </option>
                  <option value={"Pastura gramínea con leguminosa"}>
                    Pastura gramínea con leguminosa
                  </option>
                  <option value={"Potrero duroPastura gramínea con leguminosa"}>
                    Potrero duro
                  </option>
                  <option value={"Soja"}>Soja</option>
                  <option
                    value={
                      "Trigo con vicia/triticale con vicia/similar forrajero"
                    }
                  >
                    Trigo con vicia/triticale con vicia/similar forrajero
                  </option>
                  <option
                    value={
                      "Trigo con vicia/triticale con vicia/similar cultivo cobertura"
                    }
                  >
                    Trigo con vicia/triticale con vicia/similar cultivo
                    cobertura
                  </option>
                  <option value={"Vicia/caupí/otra leguminosa invernal verde"}>
                    Vicia/caupí/otra leguminosa invernal verde
                  </option>
                  <option value={"Vicia/caupí/otra leguminosa post cosecha"}>
                    Vicia/caupí/otra leguminosa post cosecha
                  </option>
                </Input>

                {formErrors.predecessorCrop && (
                  <em className="error_input_message_register">
                    {formErrors.predecessorCrop}
                  </em>
                )}
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label"
                  htmlFor="yieldOfThePredecessorCrop"
                >
                  Rendimiento del cultivo antecesor (qq/ha)
                </Label>
                <Input
                  type="number"
                  name="yieldOfThePredecessorCrop"
                  id="yieldOfThePredecessorCrop"
                  placeholder="28"
                  className={
                    formErrors.yieldOfThePredecessorCrop
                      ? `error_input_register`
                      : null
                  }
                  value={dataForm.yieldOfThePredecessorCrop}
                  onChange={handleChange}
                />

                {formErrors.yieldOfThePredecessorCrop && (
                  <em className="error_input_message_register">
                    {formErrors.yieldOfThePredecessorCrop}
                  </em>
                )}
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label mt-1 d-flex align-items-center justify-content-between"
                  htmlFor="timeElapsedBetweenHarvestAndSowing"
                >
                  Tiempo transcurrido entre cosecha y siembra{" "}
                  <FiHelpCircle id="tiempoTranscurrido" className="fs-5 me-1" />
                </Label>

                <Input
                  type="select"
                  name="timeElapsedBetweenHarvestAndSowing"
                  id="timeElapsedBetweenHarvestAndSowing"
                  className={
                    formErrors.timeElapsedBetweenHarvestAndSowing
                      ? `error_input_register`
                      : null
                  }
                  onChange={handleChange}
                >
                  <option value={"Seleccione el tiempo transcurrido"}>
                    - Seleccione el tiempo transcurrido -
                  </option>
                  <option value={"Menos de 2 meses"}>Menos de 2 meses</option>
                  <option value={"De 2 a 4 meses"}>De 2 a 4 meses</option>
                  <option value={"Mas de 4 meses"}>Mas de 4 meses</option>
                </Input>

                {formErrors.timeElapsedBetweenHarvestAndSowing && (
                  <em className="error_input_message_register">
                    {formErrors.timeElapsedBetweenHarvestAndSowing}
                  </em>
                )}

                <UncontrolledTooltip
                  placement="right"
                  target="tiempoTranscurrido"
                >
                  <span className="fw-bolder">
                    Tiempo transcurrido entre cosecha y siembra:{" "}
                  </span>{" "}
                  Tiempo transcurrido entre la cosecha del antecesor y la
                  siembra del cultivo a fertilizar <br />{" "}
                </UncontrolledTooltip>
              </Col>

              <Col md="6" sm="12" className="mt-2">
                <div className="form-check form-switch">
                  <Label
                    className="form-label me-2 fs-5"
                    htmlFor="performDirectSowing"
                  >
                    Realiza siembra directa
                  </Label>
                  <Input
                    type="checkbox"
                    role="switch"
                    name="performDirectSowing"
                    id="performDirectSowing"
                    className="form-check-input"
                    checked={dataForm.performDirectSowing}
                    onChange={handleChange}
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>

        <CardFooter>
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
              <span className="align-middle d-sm-inline-block d-none">
                Atras
              </span>
            </Button>

            <Button
              color="primary"
              className="btn-next"
              // onClick={() => stepper.next()}
              onClick={() => validationWizardCultivo()}
            >
              <span className="align-middle d-sm-inline-block d-none">
                Siguiente
              </span>
              <ArrowRight
                size={14}
                className="align-middle ms-sm-25 ms-0"
              ></ArrowRight>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Cultivo;

// const Cultivo = ({ stepper }) => {
//   return (
//     <>
//       <div className='content-header'>
//         <h3 className='mb-0'>Cultivo</h3>
//       </div>
//       <Form onSubmit={e => e.preventDefault()}>
//         <Row className='match-height mt-1'>
//           <Col md='6' sm='12' >
//             <Label className='mt-1'>Cultivo a fertilizar</Label>
//             <Input placeholder='Cultivo a fertilizar' />
//             <Label className='mt-1'>Rendimiento objetivo</Label>
//             <Input placeholder='Rendimiento objetivo' />
//             <Label className='mt-1'>Fecha de siembra</Label>
//             <Input placeholder='Fecha de siembra' />
//           </Col>
//           <Col md='6' sm='12'>
//             <Label className='mt-1'>Precio del producto en U$S/tn</Label>
//             <Input placeholder='Precio del producto en U$S/tn' />
//             <Label>Contenido de humedad</Label>
//             <Input placeholder='Contenido de humedad' />
//           </Col>
//         </Row>
//         <div className='d-flex justify-content-between mt-1'>
//           <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
//             <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
//             <span className='align-middle d-sm-inline-block d-none'>Atras</span>
//           </Button>
//           <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
//             <span className='align-middle d-sm-inline-block d-none'>Siguiente</span>
//             <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
//           </Button>
//         </div>
//       </Form>
//     </>
//   )
// }

// export default Cultivo
