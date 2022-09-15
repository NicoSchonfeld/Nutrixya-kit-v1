// ** React Imports
import { useContext, useState, useEffect } from "react";

import { ArrowLeft, ArrowRight } from "react-feather";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
  UncontrolledTooltip,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  List,
  UncontrolledAlert,
  Alert,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";

// ** import ions from react-icons
import { FiHelpCircle } from "react-icons/fi";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const Suelo = ({ stepper }) => {
  const { backModal, setBackModal, handleChange, dataForm } =
    useContext(DataContext);

  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [estratoDos, setEstratoDos] = useState(false);
  const [estratoTres, setEstratoTres] = useState(false);

  const [profundidadEstratoDos, setProfundidadEstratoDos] = useState("20 a 40");

  const [modalEstratoDos, setModalEstratoDos] = useState(false);
  const [modalEstratoTres, setModalEstratoTres] = useState(false);

  // ** State errors
  const [formErrors, setFormErrors] = useState({});

  // ** nextPageWizard
  const [nextPageWizard, setNextPageWizard] = useState(false);

  const validationWizardSuelo = () => {
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

    if (!values.compactionLevel) {
      errors.compactionLevel = "Obligatorio";
    } else if (values.compactionLevel === "Seleccione un nivel") {
      errors.compactionLevel = "Obligatorio";
    }

    if (!values.limitationForWaterlogging) {
      errors.limitationForWaterlogging = "Obligatorio";
    } else if (
      values.limitationForWaterlogging === "Seleccione una Limitación"
    ) {
      errors.limitationForWaterlogging = "Obligatorio";
    }

    if (!values.rootableProfunity) {
      errors.rootableProfunity = "Obligatorio";
    } else if (values.rootableProfunity > 35 || values.rootableProfunity < 0) {
      errors.rootableProfunity = "Se permite una profundidad de 0 a 35cm";
    }

    // Estrato 1

    if (!values.depth) {
      errors.depth = "Obligatorio";
    } else if (values.depth === "Seleccione una profundidad") {
      errors.depth = "Seleccione la profundidad de 0 a 20cm";
    }

    if (!values.sso4) {
      errors.sso4 = "Obligatorio";
    }

    if (!values.phosphate) {
      errors.phosphate = "Obligatorio";
    }

    // ** No es obligatorio
    // if (!values.cic) {
    //   errors.cic = "Obligatorio";
    // }

    // ** No es obligatorio
    // if (!values.nai) {
    //   errors.nai = "Obligatorio";
    // }

    if (!values.soilDensity) {
      errors.soilDensity = "Obligatorio";
    }

    if (!values.totalN) {
      errors.totalN = "Obligatorio";
    }

    // ** No es obligatorio
    // if (!values.ce) {
    //   errors.ce = "Obligatorio";
    // }

    // ** No es obligatorio
    // if (!values.cai) {
    //   errors.cai = "Obligatorio";
    // }

    // ** No es obligatorio
    // if (!values.ki) {
    //   errors.ki = "Obligatorio";
    // }

    if (!values.nno3) {
      errors.nno3 = "Obligatorio";
    }

    // ** No es obligatorio
    // if (!values.fmin) {
    //   errors.fmin = "Obligatorio";
    // }

    if (!values.ph) {
      errors.ph = "Obligatorio";
    }

    // ** No es obligatorio
    // if (!values.mgi) {
    //   errors.mgi = "Obligatorio";
    // }

    // Estrato 2

    if (estratoDos) {
      if (!values.depthStratumTwo) {
        errors.depthStratumTwo = "Obligatorio";
      } else if (values.depthStratumTwo === "Seleccione una profundidad") {
        errors.depthStratumTwo =
          "Seleccione una profundidad de 20 a 40 o 20 a 60cm";
      }
    }

    if (estratoDos) {
      if (!values.sso4StratumTwo) {
        errors.sso4StratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.phosphateStratumTwo) {
        errors.phosphateStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.cicStratumTwo) {
        errors.cicStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.naiStratumTwo) {
        errors.naiStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.soilDensityStratumTwo) {
        errors.soilDensityStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.totalNStratumTwo) {
        errors.totalNStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.ceStratumTwo) {
        errors.ceStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.caiStratumTwo) {
        errors.caiStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.kiStratumTwo) {
        errors.kiStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.nno3StratumTwo) {
        errors.nno3StratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.fminStratumTwo) {
        errors.fminStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.phStratumTwo) {
        errors.phStratumTwo = "Obligatorio";
      }
    }

    if (estratoDos) {
      if (!values.mgiStratumTwo) {
        errors.mgiStratumTwo = "Obligatorio";
      }
    }

    // Estrato 3

    if (estratoTres) {
      if (!values.depthStratumThree) {
        errors.depthStratumThree = "Obligatorio";
      } else if (values.depthStratumThree === "Seleccione una profundidad") {
        errors.depthStratumThree = "Seleccione la profundidad de 40 a 60cm";
      }
    }
    if (estratoTres) {
      if (!values.sso4StratumThree) {
        errors.sso4StratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.phosphateStratumThree) {
        errors.phosphateStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.cicStratumThree) {
        errors.cicStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.naiStratumThree) {
        errors.naiStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.soilDensityStratumThree) {
        errors.soilDensityStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.totalNStratumThree) {
        errors.totalNStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.ceStratumThree) {
        errors.ceStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.caiStratumThree) {
        errors.caiStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.kiStratumThree) {
        errors.kiStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.nno3StratumThree) {
        errors.nno3StratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.fminStratumThree) {
        errors.fminStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.phStratumThree) {
        errors.phStratumThree = "Obligatorio";
      }
    }

    if (estratoTres) {
      if (!values.mgiStratumThree) {
        errors.mgiStratumThree = "Obligatorio";
      }
    }

    return errors;
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Suelo</CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label d-flex align-items-center justify-content-between"
                  for="compactionLevel"
                >
                  Nivel de compactación{" "}
                  <FiHelpCircle
                    id="compactionLevelToolTip"
                    className="fs-5 me-1"
                  />
                </Label>
                <Input
                  type="select"
                  name="compactionLevel"
                  id="compactionLevel"
                  className={
                    formErrors.compactionLevel ? `error_input_register` : null
                  }
                  onChange={handleChange}
                >
                  <option value={"Seleccione un nivel"}>
                    - Seleccione un nivel -
                  </option>
                  <option value={"Mullido"}>Mullido</option>
                  <option value={"Normal"}>Normal</option>
                  <option value={"Compacto"}>Compacto</option>
                  <option value={"Muy compacto"}>Muy compacto</option>
                </Input>
                {formErrors.compactionLevel && (
                  <em className="error_input_message_register">
                    {formErrors.compactionLevel}
                  </em>
                )}

                <UncontrolledTooltip
                  placement="right"
                  target="compactionLevelToolTip"
                >
                  <span className="fw-bolder">Nivel de compactación </span> Por
                  defecto el sistema seleccionará “compacto” ya que es la
                  situación mas común en lotes agrícolas.
                  <br />
                  <span className="fw-bolder">Mullido</span>: {`<`} 0.5 Mpa (Ej:
                  suelo movido por una rastra)
                  <br />
                  <span className="fw-bolder">Normal</span>: 0.5 - 1.5 Mpa (Ej:
                  suelo inalterado, virgen)
                  <br />
                  <span className="fw-bolder">Compacto</span>: 1.5-2.5 Mpa (Ej:
                  lotes agrícolas)
                  <br />
                  <span className="fw-bolder">Muy Compacto</span>: {`>`} 2.5 Mpa
                  Ej: lotes agrícolas)
                </UncontrolledTooltip>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label d-flex align-items-center justify-content-between"
                  for="limitationForWaterlogging"
                >
                  Limitación por anegamiento{" "}
                  <FiHelpCircle
                    id="limitationForWaterloggingToolTip"
                    className="fs-5 me-1"
                  />
                </Label>
                <Input
                  type="select"
                  name="limitationForWaterlogging"
                  id="limitationForWaterlogging"
                  className={
                    formErrors.limitationForWaterlogging
                      ? `error_input_register`
                      : null
                  }
                  onChange={handleChange}
                >
                  <option value={"Seleccione una Limitación"}>
                    - Seleccione una Limitación -
                  </option>
                  <option value={"Suelo imperfectamente drenado o peor"}>
                    Suelo imperfectamente drenado o peor
                  </option>
                  <option value={"Suelo moderadamente bien drenado"}>
                    Suelo moderadamente bien drenado
                  </option>
                  <option value={"Suelo bien drenado o mejor"}>
                    Suelo bien drenado o mejor
                  </option>
                </Input>
                {formErrors.limitationForWaterlogging && (
                  <em className="error_input_message_register">
                    {formErrors.limitationForWaterlogging}
                  </em>
                )}

                <UncontrolledTooltip
                  placement="right"
                  target="limitationForWaterloggingToolTip"
                >
                  <span className="fw-bolder">Limitación por anegamiento </span>{" "}
                  Es la profundidad donde se concentra el mayor % de raíces que
                  absorbe los nutrientes del suelo, puede oscilar entre 10-35 cm
                  de espesor o profundidad
                </UncontrolledTooltip>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="rootableProfunity">
                  Profunidad enraizable (cm)
                </Label>
                <Input
                  type="number"
                  max={"35"}
                  min={"0"}
                  name="rootableProfunity"
                  id="rootableProfunity"
                  placeholder="35"
                  className={
                    formErrors.rootableProfunity ? `error_input_register` : null
                  }
                  value={dataForm.rootableProfunity}
                  onChange={handleChange}
                />
                {formErrors.rootableProfunity && (
                  <em className="error_input_message_register">
                    {formErrors.rootableProfunity}
                  </em>
                )}
              </Col>
            </Row>

            <CardSubtitle className="fs-4 fw-bold my-2">
              Análisis de suelo{" "}
              <FiHelpCircle id="analisisDeSueloToolTip" className="fs-5 ms-1" />
              <UncontrolledTooltip
                placement="right"
                target="analisisDeSueloToolTip"
              >
                Si no posee un análisis de suelo completo, el sistema brinda por
                defecto valores NO limitantes.
              </UncontrolledTooltip>
            </CardSubtitle>

            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1" className="fs-3">
                  {/* 1 */}
                  Estrato
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <Row>
                    {/* <CardSubtitle className="fs-4 mb-2 mt-2">
                      Estrato 1
                    </CardSubtitle> */}

                    <Col md="4" sm="12">
                      {/* Profundidad (cm) */}
                      <Label className="mt-1" htmlFor="depth">
                        Profundidad (cm)
                      </Label>
                      <Input
                        type="select"
                        name="depth"
                        id="depth"
                        className={
                          formErrors.depth ? `error_input_register` : null
                        }
                        onChange={handleChange}
                      >
                        <option selected value={"Seleccione una profundidad"}>
                          - Seleccione una profundidad -
                        </option>
                        <option value="0 a 20">0 a 20</option>
                      </Input>
                      {formErrors.depth && (
                        <em className="error_input_message_register">
                          {formErrors.depth}
                        </em>
                      )}

                      {/* S-SO4  */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="s-so4"
                      >
                        S-SO4 <FiHelpCircle id="sso4" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="sso4"
                        id="s-so4"
                        placeholder="12"
                        className={
                          formErrors.sso4 ? `error_input_register` : null
                        }
                        value={dataForm.sso4}
                        onChange={handleChange}
                      />
                      {formErrors.sso4 && (
                        <em className="error_input_message_register">
                          {formErrors.sso4}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="sso4">
                        <span className="fw-bolder">S-SO4 </span> Azufre de
                        sulfatos expresado en ppm <br />{" "}
                        <span className="fw-bolder">Unidad</span>: ppm
                      </UncontrolledTooltip>

                      {/* P */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="p-hosphate"
                      >
                        P <FiHelpCircle id="phosphate" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="phosphate"
                        id="p-hosphate"
                        placeholder="14"
                        className={
                          formErrors.phosphate ? `error_input_register` : null
                        }
                        value={dataForm.phosphate}
                        onChange={handleChange}
                      />

                      {formErrors.phosphate && (
                        <em className="error_input_message_register">
                          {formErrors.phosphate}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="phosphate">
                        <span className="fw-bolder">P</span> Fosforo extraíble.
                        Técnica Bray y Kurtz Nº1 <br />{" "}
                        <span className="fw-bolder">Unidades</span>: ppm o mg/kg
                      </UncontrolledTooltip>

                      {/* CIC */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="cic"
                      >
                        CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="cic"
                        id="cic"
                        placeholder="14"
                        // className={
                        //   formErrors.cic ? `error_input_register` : null
                        // }
                        value={dataForm.cic}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="CIC">
                        <span className="fw-bolder">CIC</span> Capacidad de
                        intercambio catiónico <br />{" "}
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* {formErrors.cic && (
                        <em className="error_input_message_register">
                          {formErrors.cic}
                        </em>
                      )} */}

                      {/* Nai */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="nai"
                      >
                        Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="nai"
                        id="nai"
                        placeholder="0.3"
                        // className={
                        //   formErrors.nai ? `error_input_register` : null
                        // }
                        value={dataForm.nai}
                        onChange={handleChange}
                      />

                      {/* {formErrors.nai && (
                        <em className="error_input_message_register">
                          {formErrors.nai}
                        </em>
                      )} */}

                      <UncontrolledTooltip placement="right" target="Nai">
                        <span className="fw-bolder">Nai</span> Sodio
                        intercambiable <br />{" "}
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                    </Col>

                    <Col md="4" sm="12">
                      {/* Densidad del suelo */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="soilDensity"
                      >
                        Densidad del suelo{" "}
                        <FiHelpCircle
                          id="densidadDelSuelo"
                          className="fs-5 me-1"
                        />
                      </Label>
                      <Input
                        type="number"
                        name="soilDensity"
                        id="soilDensity"
                        placeholder="1.35"
                        className={
                          formErrors.soilDensity ? `error_input_register` : null
                        }
                        value={dataForm.soilDensity}
                        onChange={handleChange}
                      />

                      {formErrors.soilDensity && (
                        <em className="error_input_message_register">
                          {formErrors.soilDensity}
                        </em>
                      )}

                      <UncontrolledTooltip
                        placement="right"
                        target="densidadDelSuelo"
                      >
                        <span className="fw-bolder">Densidad del suelo</span>{" "}
                        Densidad del estrato <br />{" "}
                        <span className="fw-bolder">Unidad</span>: gr/cm3
                      </UncontrolledTooltip>

                      {/* N total */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="totalN"
                      >
                        N total{" "}
                        <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="totalN"
                        id="totalN"
                        placeholder="0.12"
                        className={
                          formErrors.totalN ? `error_input_register` : null
                        }
                        value={dataForm.totalN}
                        onChange={handleChange}
                      />

                      {formErrors.totalN && (
                        <em className="error_input_message_register">
                          {formErrors.totalN}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="nTotal">
                        <span className="fw-bolder">Nitrógeno total</span>{" "}
                        Nitrógeno total, Método de Kjeldahl. Unidades: %, mg/kg
                        o ppm
                        <br />
                        <span className="fw-bolder">
                          Cálculo del N total a partir de la M.O
                        </span>
                        : En general la relación C/N en superficie varía entre
                        10 y 14.
                        <br />
                        <List>
                          <li>10 en suelos agotados</li>
                          <li>14 en suelos vírgenes</li>
                        </List>
                        <br />
                        Tomar 12 para suelos con MO orgánica alta (+ de 2.8%) y
                        10
                        <br />
                        para suelos con M.O menor a 2.3%.
                        <br />
                        Cálculo: MO= 1.724 * C
                        <br />
                        <span className="fw-bolder">C= MO (dato) / 1.724</span>:
                        <br />
                        A ese valor de C lo divido por 12 o 10 y nos da el Nt.
                        <br />
                        Ntotal varía entre 0.1 y 0.2% (usualmente 0.13 a 0.17)
                      </UncontrolledTooltip>

                      {/* CE */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="ce"
                      >
                        CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="ce"
                        id="ce"
                        placeholder="0.5"
                        className={
                          formErrors.ce ? `error_input_register` : null
                        }
                        value={dataForm.ce}
                        onChange={handleChange}
                      />

                      {formErrors.ce && (
                        <em className="error_input_message_register">
                          {formErrors.ce}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="CE">
                        <span className="fw-bolder">CE</span> Conductividad
                        eléctrica del extracto de saturación <br />
                        <span className="fw-bolder">Unidad</span>: dS/m
                      </UncontrolledTooltip>

                      {/* Cai */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="cai"
                      >
                        Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="cai"
                        id="cai"
                        placeholder="9"
                        // className={
                        //   formErrors.cai ? `error_input_register` : null
                        // }
                        value={dataForm.cai}
                        onChange={handleChange}
                      />

                      {/* {formErrors.cai && (
                        <em className="error_input_message_register">
                          {formErrors.cai}
                        </em>
                      )} */}

                      <UncontrolledTooltip placement="right" target="Cai">
                        <span className="fw-bolder">Cai</span> Calcio
                        intercambiable <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* Ki */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="ki"
                      >
                        Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="ki"
                        id="ki"
                        placeholder="2"
                        // className={
                        //   formErrors.ki ? `error_input_register` : null
                        // }
                        value={dataForm.ki}
                        onChange={handleChange}
                      />

                      {/* {formErrors.ki && (
                        <em className="error_input_message_register">
                          {formErrors.ki}
                        </em>
                      )} */}

                      <UncontrolledTooltip placement="right" target="Ki">
                        <span className="fw-bolder">Ki</span> Potasio
                        intercambiable <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                    </Col>

                    <Col md="4" sm="12">
                      {/* N-NO3 */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="nno3"
                      >
                        N-NO3 <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="nno3"
                        id="nno3"
                        placeholder="15"
                        className={
                          formErrors.nno3 ? `error_input_register` : null
                        }
                        value={dataForm.nno3}
                        onChange={handleChange}
                      />

                      {formErrors.nno3 && (
                        <em className="error_input_message_register">
                          {formErrors.nno3}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="N-NO3">
                        <span className="fw-bolder">N-NO3</span> N de Nitratos a
                        la siembra expresado en ppm
                      </UncontrolledTooltip>

                      {/* Fmin */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="fmin"
                      >
                        Fmin <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="fmin"
                        id="fmin"
                        placeholder="0.11"
                        // className={
                        //   formErrors.fmin ? `error_input_register` : null
                        // }
                        value={dataForm.fmin}
                        onChange={handleChange}
                      />

                      {/* {formErrors.fmin && (
                        <em className="error_input_message_register">
                          {formErrors.fmin}
                        </em>
                      )} */}

                      <UncontrolledTooltip placement="right" target="Fmin">
                        <span className="fw-bolder">Fmin</span> Factor de
                        mineralización. Fracción del N total que es
                        potencialmente mineralizable. Los valores frecuentes van
                        de 0.07 a 0.12 y varían según el manejo del lote. Suelos
                        agotados o imperfectamente drenados corresponden a
                        valores mas bajos de Fmin.
                      </UncontrolledTooltip>

                      {/* PH */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="ph"
                      >
                        PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="ph"
                        id="ph"
                        placeholder="6.7"
                        className={
                          formErrors.ph ? `error_input_register` : null
                        }
                        value={dataForm.ph}
                        onChange={handleChange}
                      />

                      {formErrors.ph && (
                        <em className="error_input_message_register">
                          {formErrors.ph}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="PH">
                        <span className="fw-bolder">PH</span> Reacción del
                        suelo. Relación suelo agua 1:2.5
                      </UncontrolledTooltip>

                      {/* Mgi */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="mgi"
                      >
                        Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="mgi"
                        id="mgi"
                        placeholder="1.2"
                        className={
                          formErrors.mgi ? `error_input_register` : null
                        }
                        value={dataForm.mgi}
                        onChange={handleChange}
                      />

                      {formErrors.mgi && (
                        <em className="error_input_message_register">
                          {formErrors.mgi}
                        </em>
                      )}

                      <UncontrolledTooltip placement="right" target="Mgi">
                        <span className="fw-bolder">Mgi</span> Magnesio
                        intercambiable. <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* <Label className="mt-1">
                        ¿Desea añadir otro estrato?
                      </Label>
                      <Button color="primary" outline block>
                        Agregar estrato +
                      </Button> */}
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>

              {/* {!estratoDos ? (
                <Button
                  color="primary"
                  outline
                  block
                  onClick={(e) => {
                    e.preventDefault(), setEstratoDos(true);
                  }}
                >
                  Agregar estrato +
                </Button>
              ) : null} */}

              {estratoDos ? (
                <>
                  <AccordionItem>
                    <AccordionHeader targetId="2" className="fs-3">
                      Estrato 2
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <Row>
                        {/* <CardSubtitle className="fs-4 mb-2 mt-4">
                      Estrato 2
                    </CardSubtitle> */}

                        <Col md="4" sm="12">
                          {/* Profundidad (cm) */}
                          <Label className="mt-1" htmlFor="depthStratumTwo">
                            Profundidad (cm)
                          </Label>
                          <Input
                            type="select"
                            name="depthStratumTwo"
                            id="depthStratumTwo"
                            // onChange={(e) => {
                            //   e.preventDefault();
                            //   let selectedValue = e.target.value;
                            //   setProfundidadEstratoDos(selectedValue);
                            // }}
                            className={
                              formErrors.depthStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            onChange={handleChange}
                          >
                            <option
                              selected
                              value={"Seleccione una profundidad"}
                            >
                              - Seleccione una profundidad -
                            </option>
                            <option value={"20 a 40"}>20 a 40</option>
                            {estratoTres !== false ? null : (
                              <option value={"20 a 60"}>20 a 60</option>
                            )}
                          </Input>

                          {formErrors.depthStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.depthStratumTwo}
                            </em>
                          )}

                          {/* S-SO4  */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="sso4StratumTwo"
                          >
                            S-SO4{" "}
                            <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="sso4StratumTwo"
                            id="sso4StratumTwo"
                            placeholder="8"
                            className={
                              formErrors.sso4StratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.sso4StratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.sso4StratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.sso4StratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="S-SO4">
                            <span className="fw-bolder">S-SO4 </span> Azufre de
                            sulfatos expresado en ppm <br />{" "}
                            <span className="fw-bolder">Unidad</span>: ppm
                          </UncontrolledTooltip>

                          {/* P */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="phosphateStratumTwo"
                          >
                            P{" "}
                            <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="phosphateStratumTwo"
                            id="phosphateStratumTwo"
                            placeholder="14"
                            className={
                              formErrors.phosphateStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.phosphateStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.phosphateStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.phosphateStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip
                            placement="right"
                            target="Fosforo"
                          >
                            <span className="fw-bolder">P</span> Fosforo
                            extraíble. Técnica Bray y Kurtz Nº1 <br />{" "}
                            <span className="fw-bolder">Unidades</span>: ppm o
                            mg/kg
                          </UncontrolledTooltip>

                          {/* CIC */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="cicStratumTwo"
                          >
                            CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="cicStratumTwo"
                            id="cicStratumTwo"
                            placeholder="14"
                            className={
                              formErrors.cicStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.cicStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.cicStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.cicStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="CIC">
                            <span className="fw-bolder">CIC</span> Capacidad de
                            intercambio catiónico <br />{" "}
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* Nai */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="naiStratumTwo"
                          >
                            Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="naiStratumTwo"
                            id="naiStratumTwo"
                            placeholder="0.3"
                            className={
                              formErrors.naiStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.naiStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.naiStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.naiStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="Nai">
                            <span className="fw-bolder">Nai</span> Sodio
                            intercambiable <br />{" "}
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                        </Col>

                        <Col md="4" sm="12">
                          {/* Densidad del suelo */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="soilDensityStratumTwo"
                          >
                            Densidad del suelo{" "}
                            <FiHelpCircle
                              id="densidadDelSuelo"
                              className="fs-5 me-1"
                            />
                          </Label>
                          <Input
                            type="number"
                            name="soilDensityStratumTwo"
                            id="soilDensityStratumTwo"
                            placeholder="1.35"
                            className={
                              formErrors.soilDensityStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.soilDensityStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.soilDensityStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.soilDensityStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip
                            placement="right"
                            target="densidadDelSuelo"
                          >
                            <span className="fw-bolder">
                              Densidad del suelo
                            </span>{" "}
                            Densidad del estrato <br />{" "}
                            <span className="fw-bolder">Unidad</span>: gr/cm3
                          </UncontrolledTooltip>

                          {/* N total */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="totalNStratumTwo"
                          >
                            N total{" "}
                            <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="totalNStratumTwo"
                            id="totalNStratumTwo"
                            placeholder="0.12"
                            className={
                              formErrors.totalNStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.totalNStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.totalNStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.totalNStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip
                            placement="right"
                            target="nTotal"
                          >
                            <span className="fw-bolder">Nitrógeno total</span>{" "}
                            Método de Kjeldahl. Ingresar gr, % o ppm <br />
                            <span className="fw-bolder">Unidades</span>: %,
                            mg/kg o ppm (tengo que corroborar con Miguel)
                          </UncontrolledTooltip>

                          {/* CE */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="ceStratumTwo"
                          >
                            CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="ceStratumTwo"
                            id="ceStratumTwo"
                            placeholder="0.5"
                            className={
                              formErrors.ceStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.ceStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.ceStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.ceStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="CE">
                            <span className="fw-bolder">CE</span> Conductividad
                            eléctrica del extracto de saturación <br />
                            <span className="fw-bolder">Unidad</span>: dS/m
                          </UncontrolledTooltip>

                          {/* Cai */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="caiStratumTwo"
                          >
                            Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="caiStratumTwo"
                            id="caiStratumTwo"
                            placeholder="9"
                            className={
                              formErrors.caiStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.caiStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.caiStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.caiStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="Cai">
                            <span className="fw-bolder">Cai</span> Calcio
                            intercambiable <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* Ki */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="kiStratumTwo"
                          >
                            Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="kiStratumTwo"
                            id="kiStratumTwo"
                            placeholder="2"
                            className={
                              formErrors.kiStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.kiStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.kiStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.kiStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="Ki">
                            <span className="fw-bolder">Ki</span> Potasio
                            intercambiable <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                        </Col>

                        <Col md="4" sm="12">
                          {/* N-NO3 */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="nno3StratumTwo"
                          >
                            N-NO3{" "}
                            <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="nno3StratumTwo"
                            id="nno3StratumTwo"
                            placeholder="15"
                            className={
                              formErrors.nno3StratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.nno3StratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.nno3StratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.nno3StratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="N-NO3">
                            <span className="fw-bolder">N-NO3</span> N de
                            Nitratos a la siembra expresado en ppm <br />
                            <span className="fw-bolder">Unidades</span>: mg/kg o
                            ppm
                          </UncontrolledTooltip>

                          {/* Fmin */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="fminStratumTwo"
                          >
                            Fmin{" "}
                            <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="fminStratumTwo"
                            id="fminStratumTwo"
                            placeholder="0.11"
                            className={
                              formErrors.fminStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.fminStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.fminStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.fminStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="Fmin">
                            <span className="fw-bolder">Fmin</span> Factor de
                            mineralización. Fracción del N total que es
                            potencialmente mineralizable. Los valores frecuentes
                            van de 0.07 a 0.12 y varían según el manejo del
                            lote. Suelos agotados o imperfectamente drenados
                            corresponden a valores mas bajos de Fmin.
                          </UncontrolledTooltip>

                          {/* PH */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="phStratumTwo"
                          >
                            PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="phStratumTwo"
                            id="phStratumTwo"
                            placeholder="6.7"
                            className={
                              formErrors.phStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.phStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.phStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.phStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="PH">
                            <span className="fw-bolder">PH</span> Reacción del
                            suelo. Relación suelo agua 1:2.5
                          </UncontrolledTooltip>

                          {/* Mgi */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="mgiStratumTwo"
                          >
                            Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="mgiStratumTwo"
                            id="mgiStratumTwo"
                            placeholder="1.2"
                            className={
                              formErrors.mgiStratumTwo
                                ? `error_input_register`
                                : null
                            }
                            value={dataForm.mgiStratumTwo}
                            onChange={handleChange}
                          />

                          {formErrors.mgiStratumTwo && (
                            <em className="error_input_message_register">
                              {formErrors.mgiStratumTwo}
                            </em>
                          )}

                          <UncontrolledTooltip placement="right" target="Mgi">
                            <span className="fw-bolder">Mgi</span> Magnesio
                            intercambiable. <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* <Label className="mt-1">
                        ¿Desea añadir otro estrato?
                      </Label>
                      <Button color="primary" outline block>
                        Agregar estrato +
                      </Button> */}

                          <Label className="mt-1">Eliminar estrato</Label>
                          <Button
                            color="danger"
                            outline
                            block
                            onClick={(e) => {
                              e.preventDefault(),
                                setModalEstratoDos(!modalEstratoDos);
                            }}
                          >
                            Eliminar
                          </Button>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>

                  {/* {profundidadEstratoDos === "20 a 40" ? ( */}
                  {dataForm.depthStratumTwo === "20 a 40" ? (
                    <>
                      {!estratoTres ? (
                        <Button
                          color="primary"
                          outline
                          block
                          onClick={(e) => {
                            e.preventDefault(), setEstratoTres(true);
                          }}
                        >
                          Agregar estrato +
                        </Button>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}

              {estratoTres ? (
                <AccordionItem>
                  <AccordionHeader targetId="3" className="fs-3">
                    Estrato 3
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <Row>
                      {/* <CardSubtitle className="fs-4 mb-2 mt-4">
                      Estrato 3
                    </CardSubtitle> */}

                      <Col md="4" sm="12">
                        {/* Profundidad (cm) */}
                        <Label className="mt-1" htmlFor="depthStratumThree">
                          Profundidad (cm)
                        </Label>
                        <Input
                          type="select"
                          name="depthStratumThree"
                          id="depthStratumThree"
                          className={
                            formErrors.depthStratumThree
                              ? `error_input_register`
                              : null
                          }
                          onChange={handleChange}
                        >
                          <option selected value={"Seleccione una profundidad"}>
                            - Seleccione una profundidad -
                          </option>
                          <option value={"40 a 60"}>40 a 60</option>
                        </Input>

                        {formErrors.depthStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.depthStratumThree}
                          </em>
                        )}

                        {/* S-SO4  */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="sso4StratumThree"
                        >
                          S-SO4{" "}
                          <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="sso4StratumThree"
                          id="sso4StratumThree"
                          placeholder="8"
                          className={
                            formErrors.sso4StratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.sso4StratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.sso4StratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.sso4StratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="S-SO4">
                          <span className="fw-bolder">S-SO4 </span> Azufre de
                          sulfatos expresado en ppm <br />{" "}
                          <span className="fw-bolder">Unidad</span>: ppm
                        </UncontrolledTooltip>

                        {/* P */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="phosphateStratumThree"
                        >
                          P <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="phosphateStratumThree"
                          id="phosphateStratumThree"
                          placeholder="14"
                          className={
                            formErrors.phosphateStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.phosphateStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.phosphateStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.phosphateStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="Fosforo">
                          <span className="fw-bolder">P</span> Fosforo
                          extraíble. Técnica Bray y Kurtz Nº1 <br />{" "}
                          <span className="fw-bolder">Unidades</span>: ppm o
                          mg/kg
                        </UncontrolledTooltip>

                        {/* CIC */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="cicStratumThree"
                        >
                          CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="cicStratumThree"
                          id="cicStratumThree"
                          placeholder="14"
                          className={
                            formErrors.cicStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.cicStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.cicStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.cicStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="CIC">
                          <span className="fw-bolder">CIC</span> Capacidad de
                          intercambio catiónico <br />{" "}
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* Nai */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="naiStratumThree"
                        >
                          Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="naiStratumThree"
                          id="naiStratumThree"
                          placeholder="0.3"
                          className={
                            formErrors.naiStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.naiStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.naiStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.naiStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="Nai">
                          <span className="fw-bolder">Nai</span> Sodio
                          intercambiable <br />{" "}
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                      </Col>

                      <Col md="4" sm="12">
                        {/* Densidad del suelo */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="soilDensityStratumThree"
                        >
                          Densidad del suelo{" "}
                          <FiHelpCircle
                            id="densidadDelSuelo"
                            className="fs-5 me-1"
                          />
                        </Label>
                        <Input
                          type="number"
                          name="soilDensityStratumThree"
                          id="soilDensityStratumThree"
                          placeholder="1.35"
                          className={
                            formErrors.soilDensityStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.soilDensityStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.soilDensityStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.soilDensityStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip
                          placement="right"
                          target="densidadDelSuelo"
                        >
                          <span className="fw-bolder">Densidad del suelo</span>{" "}
                          Densidad del estrato <br />{" "}
                          <span className="fw-bolder">Unidad</span>: gr/cm3
                        </UncontrolledTooltip>

                        {/* N total */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="totalNStratumThree"
                        >
                          N total{" "}
                          <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="totalNStratumThree"
                          id="totalNStratumThree"
                          placeholder="0.12"
                          className={
                            formErrors.totalNStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.totalNStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.totalNStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.totalNStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="nTotal">
                          <span className="fw-bolder">Nitrógeno total</span>{" "}
                          Método de Kjeldahl. Ingresar gr, % o ppm <br />
                          <span className="fw-bolder">Unidades</span>: %, mg/kg
                          o ppm (tengo que corroborar con Miguel)
                        </UncontrolledTooltip>

                        {/* CE */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="ceStratumThree"
                        >
                          CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="ceStratumThree"
                          id="ceStratumThree"
                          placeholder="0.5"
                          className={
                            formErrors.ceStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.ceStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.ceStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.ceStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="CE">
                          <span className="fw-bolder">CE</span> Conductividad
                          eléctrica del extracto de saturación <br />
                          <span className="fw-bolder">Unidad</span>: dS/m
                        </UncontrolledTooltip>

                        {/* Cai */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="caiStratumThree"
                        >
                          Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="caiStratumThree"
                          id="caiStratumThree"
                          placeholder="9"
                          className={
                            formErrors.caiStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.caiStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.caiStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.caiStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="Cai">
                          <span className="fw-bolder">Cai</span> Calcio
                          intercambiable <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* Ki */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="kiStratumThree"
                        >
                          Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="kiStratumThree"
                          id="kiStratumThree"
                          placeholder="2"
                          className={
                            formErrors.kiStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.kiStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.kiStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.kiStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="Ki">
                          <span className="fw-bolder">Ki</span> Potasio
                          intercambiable <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                      </Col>

                      <Col md="4" sm="12">
                        {/* N-NO3 */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="nno3StratumThree"
                        >
                          N-NO3{" "}
                          <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="nno3StratumThree"
                          id="nno3StratumThree"
                          placeholder="15"
                          className={
                            formErrors.nno3StratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.nno3StratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.nno3StratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.nno3StratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="N-NO3">
                          <span className="fw-bolder">N-NO3</span> N de Nitratos
                          a la siembra expresado en ppm <br />
                          <span className="fw-bolder">Unidades</span>: mg/kg o
                          ppm
                        </UncontrolledTooltip>

                        {/* Fmin */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="fminStratumThree"
                        >
                          Fmin <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="fminStratumThree"
                          id="fminStratumThree"
                          placeholder="0.11"
                          className={
                            formErrors.fminStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.fminStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.fminStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.fminStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="Fmin">
                          <span className="fw-bolder">Fmin</span> Factor de
                          mineralización. Fracción del N total que es
                          potencialmente mineralizable. Los valores frecuentes
                          van de 0.07 a 0.12 y varían según el manejo del lote.
                          Suelos agotados o imperfectamente drenados
                          corresponden a valores mas bajos de Fmin.
                        </UncontrolledTooltip>

                        {/* PH */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="phStratumThree"
                        >
                          PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="phStratumThree"
                          id="phStratumThree"
                          placeholder="6.7"
                          className={
                            formErrors.phStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.phStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.phStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.phStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="PH">
                          <span className="fw-bolder">PH</span> Reacción del
                          suelo. Relación suelo agua 1:2.5
                        </UncontrolledTooltip>

                        {/* Mgi */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="mgiStratumThree"
                        >
                          Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="mgiStratumThree"
                          id="mgiStratumThree"
                          placeholder="1.2"
                          className={
                            formErrors.mgiStratumThree
                              ? `error_input_register`
                              : null
                          }
                          value={dataForm.mgiStratumThree}
                          onChange={handleChange}
                        />

                        {formErrors.mgiStratumThree && (
                          <em className="error_input_message_register">
                            {formErrors.mgiStratumThree}
                          </em>
                        )}

                        <UncontrolledTooltip placement="right" target="Mgi">
                          <span className="fw-bolder">Mgi</span> Magnesio
                          intercambiable. <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* <Label className="mt-1">
                        Ya no puede añadir más Estratos
                      </Label>
                      <Button color="primary" outline block disabled>
                        Agregar estrato +
                      </Button> */}

                        <Label className="mt-1">Eliminar estrato</Label>
                        <Button
                          color="danger"
                          outline
                          block
                          onClick={(e) => {
                            e.preventDefault(),
                              setModalEstratoTres(!modalEstratoTres);
                          }}
                        >
                          Eliminar
                        </Button>
                      </Col>
                    </Row>
                  </AccordionBody>
                </AccordionItem>
              ) : null}
            </Accordion>
          </Form>
        </CardBody>

        <CardFooter>
          <div className="d-flex justify-content-end">
            <Button
              outline
              color="danger"
              className="me-1"
              onClick={() => setBackModal(!backModal)}
            >
              Volver
            </Button>

            <Button
              color="primary"
              className="btn-next"
              // onClick={() => stepper.next()}
              onClick={() => validationWizardSuelo()}
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

      {modalEstratoDos ? (
        <Modal
          isOpen={modalEstratoDos}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¡ATENCIÓN!</ModalHeader>
          <ModalBody>
            <h4>¿Está seguro que desea eliminar el estrato?</h4>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                setModalEstratoDos(!modalEstratoDos);
              }}
            >
              Cancelar
            </Button>

            <Button
              color="danger"
              onClick={() => {
                setEstratoDos(false),
                  setEstratoTres(false),
                  setModalEstratoDos(!modalEstratoDos);
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}

      {modalEstratoTres ? (
        <Modal
          isOpen={modalEstratoTres}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¡ATENCIÓN!</ModalHeader>
          <ModalBody>
            <h4>¿Está seguro que desea eliminar el estrato?</h4>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                setModalEstratoTres(!modalEstratoTres);
              }}
            >
              Cancelar
            </Button>

            <Button
              color="danger"
              onClick={() => {
                setEstratoTres(false), setModalEstratoTres(!modalEstratoTres);
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  );
};

export default Suelo;
