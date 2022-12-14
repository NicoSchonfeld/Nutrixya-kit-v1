// ** React Imports
import React, { useState, useEffect } from "react";

import axios from "axios";

// ** React router dom import
import { Link, useNavigate } from "react-router-dom";

// ** Import logo icon
import Logo from "../assets/images/logo/logoNutrixya.svg";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Icons Imports
// import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const Register = () => {
  // ** Hooks
  const { skin } = useSkin();

  // ** useNavigate
  const navigate = useNavigate();

  // ** Image
  const illustration =
      skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  // ** InitialValues-Form
  const initialValutes = {
    username: "",
    email: "",
    password: "",
    passwordTwo: "",
    options: "",
    terms: "",
  };

  // ** State form
  const [formValues, setFormValues] = useState(initialValutes);

  // ** State errors
  const [formErrors, setFormErrors] = useState({});

  // ** isSubmit
  const [isSubmit, setIsSubmit] = useState(false);

  // ** State modal terms
  const [centeredModal, setCenteredModal] = useState(false);

  // ** HandleChange
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ** handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // ** useEffect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // ** Validate
  const validate = (values) => {
    const errors = {};

    // Regular expression
    const expression = {
      username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      name: /^[a-zA-Z??-??\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // @ejemplo.com
      phone: /^\d{7,14}$/, // 7 a 14 numeros.
    };

    if (!values.username.trim()) {
      errors.username = "Obligatorio";
    } else if (!expression.username.test(values.username)) {
      errors.username = "Letras, numeros, guion y guion_bajo";
    }

    if (!values.email) {
      errors.email = "Obligatorio";
    } else if (!expression.email.test(values.email)) {
      errors.email = "Formato email invalido";
    }

    if (!values.password) {
      errors.password = "Obligatorio";
    } else if (values.password.length < 8) {
      errors.password =
        "Utiliza ocho caracteres como m??nimo con una combinaci??n de letras, n??meros y s??mbolos";
    } else if (values.password.length > 16) {
      errors.password = "Usar solo 16 caracteres";
    }

    if (!values.passwordTwo) {
      errors.passwordTwo = "Obligatorio";
    } else if (values.passwordTwo !== values.password) {
      errors.passwordTwo = "Escriba la misma contrase??a.";
    } else if (values.passwordTwo.length > 16) {
      errors.passwordTwo = "Usar solo 16 caracteres";
    }

    if (!values.options) {
      errors.options = "Obligatorio";
    }

    if (!values.terms) {
      errors.terms = "Obligatorio";
    }

    return errors;
  };

  return (
    <>
      <div className="auth-wrapper auth-cover">
        <Row className="auth-inner m-0">
          <Link className="brand-logo" to="/login">
            <img src={Logo} alt={"Logo"} />

            <h2 className="brand-text txtLogo ms-1">Nutrixya</h2>
          </Link>
          <Col
            className="d-none d-lg-flex align-items-center p-5"
            lg="8"
            sm="12"
          >
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img className="img-fluid" src={source} alt="Login Cover" />
            </div>
          </Col>

          <Col
            className=" d-flex align-items-center auth-bg px-2 p-lg-5 "
            lg="4"
            sm="12"
          >
            <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
              <CardTitle tag="h2" className="fw-bold mb-1">
                Registrate en Nutrixya
              </CardTitle>
              <CardText className="mb-2">
                Registrate y logr?? la m??xima eficiencia en fertilizaci??n.
              </CardText>

              <Form onSubmit={handleSubmit} className="auth-register-form mt-2">
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                  // <pre className="p-1">
                  //   <h3>
                  //     MENSAJE ENVIADO (Ejemplo,
                  //     <br /> posible modal o alert)
                  //   </h3>
                  // </pre>
                  navigate("/verify-email")
                ) : (
                  <>
                    <span className="color-ejemplo">
                      valor obtenido: (Ejemplo)
                    </span>
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                  </>
                )} */}

                {Object.keys(formErrors).length === 0 &&
                  isSubmit &&
                  navigate("/verify-email")}

                <div className="mb-1">
                  <Label className="form-label" for="register-username">
                    <em>Nombre de usuario</em>
                  </Label>
                  <Input
                    type="text"
                    id="register-username"
                    placeholder="Ingrese un nombre de usuario"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    className={
                      formErrors.username ? `error_input_register` : null
                    }
                    autoFocus
                  />
                  {formErrors.username && (
                    <em className="error_input_message_register">
                      {formErrors.username}
                    </em>
                  )}
                </div>

                <div className="mb-1">
                  <Label className="form-label" for="register-email">
                    <em>Email</em>
                  </Label>
                  <Input
                    type="email"
                    id="register-email"
                    placeholder="ejemplo@ejemplo.com"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email ? `error_input_register` : null}
                  />
                  {formErrors.email && (
                    <em className="error_input_message_register">
                      {formErrors.email}
                    </em>
                  )}
                </div>

                <div className="mb-1">
                  <Label className="form-label" for="register-password">
                    <em>Contrase??a</em>
                  </Label>
                  {/* <Input
                    type="password"
                    id="register-password"
                    placeholder="************"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className={
                      formErrors.password ? `error_input_register` : null
                    }
                  /> */}
                  <InputPasswordToggle
                    className={
                      formErrors.passwordTwo
                        ? `error_input_register input-group-merge`
                        : "input-group-merge"
                    }
                    id="register-password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />

                  {formErrors.password && (
                    <em className="error_input_message_register">
                      {formErrors.password}
                    </em>
                  )}
                </div>

                <div className="mb-1">
                  <Label className="form-label" for="register-password">
                    <em>Confirmar contrase??a</em>
                  </Label>
                  {/* <Input
                    type="password"
                    id="register-password"
                    placeholder="************"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className={
                      formErrors.password ? `error_input_register` : null
                    }
                  /> */}
                  <InputPasswordToggle
                    className={
                      formErrors.passwordTwo
                        ? `error_input_register input-group-merge`
                        : "input-group-merge"
                    }
                    id="register-password"
                    name="passwordTwo"
                    value={formValues.passwordTwo}
                    onChange={handleChange}
                  />

                  {formErrors.passwordTwo && (
                    <em className="error_input_message_register">
                      {formErrors.passwordTwo}
                    </em>
                  )}
                </div>

                <div className="mb-1">
                  <Label className="form-label" for="register-select">
                    <em>Como conociste Nutrixya</em>
                  </Label>
                  <Input
                    type="select"
                    name="options"
                    id="register-select"
                    onChange={handleChange}
                    className={
                      formErrors.options ? `error_input_register` : null
                    }
                  >
                    <option value={""}>- Selecciona una -</option>
                    <option value={"Corteva"}>Corteva</option>
                    <option value={"GDM"}>GDM</option>
                    <option value={"A trav??s de Nutrixya"}>
                      A trav??s de Nutrixya
                    </option>
                    <option value={"Otro"}>Otro</option>
                  </Input>
                  {formErrors.options && (
                    <em className="error_input_message_register">
                      {formErrors.options}
                    </em>
                  )}
                </div>

                <div className="form-check mb-1">
                  <Input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    onChange={handleChange}
                  />
                  <Label className="form-check-label" for="terms">
                    <em>Acepto la</em>
                    <Link className="ms-25" to="#">
                      <em onClick={() => setCenteredModal(!centeredModal)}>
                        pol??tica de privacidad y los t??rminos
                      </em>
                    </Link>
                  </Label>
                  <br />
                  {formErrors.terms && (
                    <em className="error_input_message_register">
                      {formErrors.terms}
                    </em>
                  )}
                </div>

                <Button type="submit" color="primary" block>
                  Registrate
                </Button>

                {/* <Button tag={Link} to='/' color='primary' block>
                Registrate
              </Button> */}
              </Form>

              <p className="text-center mt-2">
                <span>??Ya tienes una cuenta?</span>
              </p>

              <Button
                tag={Link}
                to="/login"
                className="mt-1"
                color="primary"
                block
              >
                Iniciar Sesi??n
              </Button>

              {/* <p className='text-center mt-2'>
              <span className='me-25'>??Ya tienes una cuenta?</span>
              <Link to='/login'>
                <span>Si el usuario ya est?? registrado, puede iniciar sesi??n desde este bot??n</span>
              </Link>
            </p> */}

              {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div> */}
            </Col>
          </Col>
        </Row>
      </div>

      <div className="vertically-centered-modal">
        <Modal
          isOpen={centeredModal}
          toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
            T??rminos y condiciones
          </ModalHeader>
          <ModalBody>
            <h4> 1. Aceptaci??n. El acceso a la plataforma</h4>

            <p className="mt-1">
              web (en adelante la ???Plataforma???) de Nutrixya (en adelante
              Nutrixya) y la utilizaci??n de sus servicios est?? sujeto a la
              aceptaci??n de los T??rminos y Condiciones Generales que se
              establecen a continuaci??n (en adelante los ???T??rminos y
              Condiciones???), junto con la Pol??tica de Privacidad. De acceder Ud.
              (en adelante ???Usted??? o el ???Usuario???) a la Plataforma, se entender??
              que presta su conformidad con los T??rminos y Condiciones. Los
              T??rminos y Condiciones podr??n estar sujetos a modificaciones, las
              que entrar??n en vigencia a los 10 (diez) d??as de su publicaci??n en
              la Plataforma, d??ndose aviso al Usuario de tal situaci??n. El
              Usuario tendr?? un plazo de 5 (cinco) d??as contados a partir de la
              fecha de la publicaci??n de las modificaciones introducidas, para
              rechazar los nuevos t??rminos y condiciones y en ese caso quedar??
              disuelto el v??nculo contractual. Vencido este plazo, se
              considerar?? que el Usuario acepta los nuevos t??rminos y
              condiciones.
            </p>
            <h4> 2. Descripci??n de la Plataforma.</h4>
            <p className="mt-1">
              Nutrixya es un procedimiento agron??mico vers??til dise??ado para
              predecir y calcular la demanda nutricional de cultivos y pasturas,
              contemplando variables edafol??gicas, espec??ficas del cultivo, de
              fertilizantes, aportes de rastrojo, temperaturas medias y agua
              ??til. La Plataforma consiste en una herramienta web/app dirigida a
              toda persona humana o jur??dica o consorcio o uni??n transitoria u
              otra forma de asociaci??n que desarrolle y/o explote la actividad
              agr??cola, ganadera y/o agropecuaria y/o actividades afines. A
              trav??s de la misma, se proporciona a los usuarios informaci??n
              sobre an??lisis de datos, herramientas de gesti??n de recursos,
              actualizaciones meteorol??gicas e informes inteligentes que ayudan
              a mejorar las actividades enunciadas.
            </p>
            <h4>
              {" "}
              3. Responsabilidad por la informaci??n contenida en la Plataforma.
            </h4>
            <p className="mt-1">
              Nutrixya no ser?? responsable por cualquier da??o o perjuicio
              derivado directo o indirectamente de la utilizaci??n de la presente
              plataforma ni de los informes generados desde la misma. Si el
              usuario no estuviera de acuerdo con estas condiciones, deber??
              abstenerse de utilizar esta herramienta y/o de la informaci??n aqu??
              publicada, siendo cualquier utilizaci??n a exclusiva
              responsabilidad del usuario. En ning??n caso Nutrixya responder??
              ante el Usuario por el lucro cesante, la p??rdida de chances y/o
              toda consecuencia mediata o da??o indirecto derivado de cualquier
              circunstancia que se vincule con la Plataforma.
            </p>
            <h4> 4. Usuario.</h4>
            <p className="mt-1">
              Para ser Usuario de la Plataforma, la persona deber?? ser mayor de
              edad y contar con la capacidad legal de contratar. Para el caso
              que el Usuario se registre en representaci??n de una sociedad o
              consorcios, uniones transitorias u otras formas de asociaci??n
              deber?? tener facultades para contratar y obligar a la misma en los
              T??rminos y Condiciones del presente acuerdo. A tales fines, el
              Usuario deber?? completar el formulario de registro en todos sus
              campos. Los campos deber??n completarse con su informaci??n personal
              y/o societaria de manera exacta, precisa y verdadera. El Usuario
              declara bajo juramento que la informaci??n proporcionada es
              verdadera y que posee las facultades suficientes para realizar las
              operaciones para las que se registra. El Usuario garantiza y
              responde, en todos los casos, por la veracidad, vigencia y
              autenticidad de los datos personales, societarios e informaci??n
              suministrada. Nutrixya se reserva el derecho de solicitar datos
              adicionales para el caso de Usuarios que realicen transacciones
              que requieran de facultades adicionales exigidas por ley o por las
              pol??ticas actuales o futuras de la Plataforma. Nutrixya se reserva
              el derecho de rechazar cualquier solicitud de registraci??n o de
              cancelar una registraci??n previamente aceptada, sin que est??
              obligado a comunicar o exponer las razones de su decisi??n y sin
              que ello genere alg??n derecho a indemnizaci??n o resarcimiento.
            </p>
            <h4> 5. Uso de la Plataforma.</h4>
            <p className="mt-1">
              Otorgamiento de licencia. El Usuario acceder?? a la Plataforma a
              trav??s de una cuenta personal espec??ficamente creada por Nutrixya,
              la cual contendr?? el nombre de Usuario y/o direcci??n de correo
              electr??nico (e-mail) y contrase??a (en adelante la ???Cuenta???). La
              contrase??a ser?? elegida por el Usuario y es de su exclusivo
              conocimiento y se obliga a no divulgarla. La cuenta es personal,
              ??nica e intransferible, y est?? prohibido que el Usuario tenga m??s
              de una cuenta. Nutrixya se reserva el derecho de cancelar,
              suspender o inhabilitar las cuentas que contengan datos
              coincidentes o relacionados. Se deja expresa constancia que se
              encuentra terminantemente prohibido para el Usuario descargar y/o
              reproducir y/o ceder a terceros cualquier tipo de imagen obtenida
              en la Plataforma, inclusive a trav??s de una imagen fotogr??fica y/o
              captura de pantalla. El Usuario es responsable de todas las
              operaciones realizadas en su Cuenta. El Usuario se compromete a
              notificar a Nutrixya en forma inmediata y fehaciente de cualquier
              uso o ingreso no autorizado de su cuenta. La Cuenta no es una
              propiedad del Usuario, sino una herramienta que Nutrixya pone a
              disposici??n del Usuario para acceder a los servicios de la
              Plataforma. Queda terminantemente prohibida la venta, cesi??n, y
              transferencia de la Cuenta bajo ning??n t??tulo. A tales fines,
              Nutrixya concede al Usuario una licencia de uso intransferible, no
              exclusiva y revocable para utilizar la Plataforma. Nutrixya no
              est?? obligado a proveer ning??n equipo o programa de software para
              acceder a la Plataforma. El Usuario deber?? contar con todos los
              recursos necesarios para ello, incluidos los de
              telecomunicaciones.
            </p>
            <h4> 6. Suspensi??n y/o baja del Usuario.</h4>
            <p className="mt-1">
              Nutrixya se reserva el derecho de suspender o dar de baja al
              Usuario de la Plataforma en los siguientes casos: ??? Cuando el
              Usuario haya suministrado a Nutrixya informaci??n sobre datos
              personales y/o societarios que no hayan podido ser confirmados o
              que resulten falsos o inexactos. ??? Cuando el Usuario hiciera un
              uso indebido de la Plataforma para prop??sitos ilegales, abusivos,
              difamatorios, y/o para facilitar o promover actividades en
              competencia con Nutrixya. ??? Cuando a criterio de Nutrixya se
              encuentre en riesgo la seguridad de la Plataforma u otro riesgo
              percibido contra la seguridad de la informaci??n contenida en la
              misma. ??? Cuando a criterio de Nutrixya se produjera alg??n otro
              evento de gravedad que justifique la decisi??n de suspender
              temporal o definitivamente al Usuario. ??? Cuando la cuenta
              estuviera inactiva por el plazo de doce (12) meses, Nutrixya se
              reserva el derecho de cerrar la misma.
            </p>
            <h4> 7. Menci??n del Usuario como cliente de Nutrixya.</h4>
            <p className="mt-1">
              El Usuario, al registrarse en la Plataforma, autoriza a Nutrixya a
              mencionarlo como cliente, as?? como publicar su nombre, marcas y/o
              logotipo y/o isotipo, y/o cualquier otro signo que lo represente e
              identifique con el fin de dar a conocer su presencia y/o
              actividad.
            </p>
            <h4> 8. Propiedad Intelectual. Enlaces.</h4>
            <p className="mt-1">
              La Plataforma como as?? tambi??n los programas, bases de datos,
              redes, archivos que permiten al Usuario acceder y usar su Cuenta,
              son de propiedad de Nutrixya. El uso indebido y la reproducci??n
              total o parcial de dichos contenidos quedan prohibidos, salvo
              autorizaci??n expresa y por escrito de Nutrixya. La retransmisi??n o
              publicaci??n de cualquier material obtenido desde la Plataforma se
              encuentra prohibida sin el previo consentimiento escrito de
              Nutrixya. La Plataforma puede contener enlaces a otros sitios web,
              lo cual no indica que sean propiedad u operados por Nutrixya. En
              virtud que Nutrixya no tiene control sobre tales sitios, se aclara
              que no ser?? responsable por los contenidos, materiales, acciones
              y/o servicios prestados por los mismos, ni por da??os o p??rdidas
              ocasionadas por la utilizaci??n de los mismos, sean causadas
              directa o indirectamente.
            </p>
            <h4> 9. Responsabilidad por Downloads. </h4>
            <p className="mt-1">
              Corre por cuenta del Usuario verificar la inexistencia de virus en
              los programas y materiales que el Usuario descargue en su equipo
              (???los materiales de download???) para la utilizaci??n de la
              Plataforma. En ning??n caso Nutrixya ser?? responsable por los da??os
              causados por elementos destructivos que pudieran haber introducido
              terceros a los materiales de download provistos por el Usuario, ni
              por los materiales de download suministrados por los proveedores
              de informaci??n o un tercero sin autorizaci??n expresa de Nutrixya.
            </p>
            <h4> 10. Compromiso de Indemnidad ??? Reservas de Nutrixya. </h4>
            <p className="mt-1">
              El Usuario se obliga a mantener indemne a Nutrixya, a sus
              dependientes, licenciantes, proveedores y licenciatarios de los
              da??os resultantes (incluyendo los costos de defensa) de cualquier
              acto o hecho il??cito imputable al Usuario o a un tercero que
              utilice la cuenta del Usuario. Nutrixya podr?? modificar, eliminar
              y/o agregar t??rminos y/o condiciones en cualquiera de las
              cl??usulas de los T??rminos y Condiciones, sin la previa conformidad
              del Cliente. Nutrixya se reserva el derecho de modificar la
              estructura de la Plataforma en la oportunidad y en la condici??n
              que lo considere oportuno y conveniente.
            </p>
            <h4> 11. Jurisdicci??n y Ley Aplicable. </h4>
            <p className="mt-1">
              Toda cuesti??n entre Nutrixya y el Usuario estar?? regida por las
              leyes de la Rep??blica Argentina, con exclusi??n de toda norma que
              remita a la aplicaci??n de una ley extranjera. Cualquier
              controversia ser?? sometida a los Tribunales Ordinarios de la
              Ciudad de Villa Carlos Paz, Provincia de C??rdoba.
            </p>
            <h4> 12. Renuncias. </h4>
            <p className="mt-1">
              La demora u omisi??n de Nutrixya en exigir el estricto cumplimiento
              de estos T??rminos y Condiciones no podr?? interpretarse como
              renuncia a sus derechos.
            </p>
            <h4> 13. Nulidad parcial. </h4>
            <p className="mt-1">
              En caso que alguna disposici??n de estos T??rminos y Condiciones
              fuera declarada nula, ello no afectar?? la validez de las dem??s.
            </p>
            <h4> 14. Marca. </h4>
            <p className="mt-1">
              Toda marca o logotipo que aparezca en la Plataforma pertenece a
              Nutrixya y el Usuario no podr?? utilizarlas sin autorizaci??n,
              quedando prohibido cualquier uso o explotaci??n por cualquier
              medio, sin el consentimiento previo y por escrito de Nutrixya.
            </p>
            <h3>Pol??tica de Privacidad</h3>
            <h4> 1. Objetivo. </h4>
            <p className="mt-1">
              valora a sus Usuarios y est?? comprometida a proteger su
              privacidad. En el desempe??o de dicho compromiso, Nutrixya ha
              desarrollado esta pol??tica de privacidad (en adelante, la
              ???Pol??tica de Privacidad???) que describe las pol??ticas y pr??cticas
              de Nutrixya en lo que se refiere a la recolecci??n, uso y
              divulgaci??n de informaci??n personal recopilada. Al registrarse,
              visitar y/o utilizar la Plataforma, Usted acepta las pr??cticas que
              se detallan a continuaci??n. Esta Pol??tica contiene las pr??cticas
              de privacidad de la Plataforma, en cumplimiento de la Ley de
              Protecci??n de Datos Personales en Argentina N ?? 25.326 y sus
              normas complementarias (en adelante, ???LPDP???). La Pol??tica de
              Privacidad podr?? ser modificada por m??ltiples razones, como ser el
              empleo de nuevas tecnolog??as de procesamiento de informaci??n o
              cambios en la Plataforma, entre otros, las que entrar??n en
              vigencia a los 10 (diez) d??as de su publicaci??n en la Plataforma,
              d??ndose aviso al Usuario de tal situaci??n. El Usuario tendr?? un
              plazo de 5 (cinco) d??as contados a partir de la fecha de la
              publicaci??n de las modificaciones introducidas, para rechazar la
              nueva pol??tica de privacidad y en ese caso quedar?? disuelto el
              v??nculo contractual. Vencido este plazo, se considerar?? que el
              Usuario acepta la nueva Pol??tica de Privacidad.
            </p>
            <h4> 2. Informaci??n recolectada. Consentimiento. </h4>
            <p className="mt-1">
              Al ingresar y utilizar a esta Plataforma, Usted consiente en que
              se obtenga y utilice la informaci??n personal referida a la
              identidad del Usuario, entendi??ndose por ello, sin car??cter
              taxativo, la siguiente: nombre y apellido, direcci??n, tel??fono,
              direcci??n de e-mail, nacionalidad, clave de identificaci??n
              tributaria, informaci??n sobre los campos dedicados a la actividad
              agropecuaria y que sean explotados por el Usuario (en adelante la
              ???Informaci??n Personal???) para los fines propios de la Plataforma,
              y/o cualquier informaci??n necesaria para la prestaci??n de los
              servicios contratados a Nutrixya.
            </p>
            <h4> 3. Finalidad de la Informaci??n Personal. </h4>
            <p className="mt-1">
              Conservaci??n de la Informaci??n Personal. El Usuario presta su
              consentimiento para que la Informaci??n Personal (i) se procese y
              almacene en servidores o medios magn??ticos y/o digitales y/o (ii)
              se haga un uso cient??fico y estad??stico para la mejora del
              servicio y contenido de la Plataforma. Se deja expresa constancia
              que la eliminaci??n de la Cuenta no implica la eliminaci??n de la
              Informaci??n Personal, sin perjuicio de que Nutrixya s??lo podr??
              hacer un uso cient??fico y estad??stico de la misma. Para tal fin,
              se deja expresa constancia que Nutrixya s??lo podr?? conservar la
              informaci??n del Usuario utilizando tecnolog??as para la disociaci??n
              de datos y que las mismas no sean reversibles, imposibilitando de
              esta forma identificar al Usuario respecto de la Informaci??n
              Personal.
            </p>
            <h4> 4. Aplicaci??n de la Pol??tica de Privacidad. </h4>
            <p className="mt-1">
              La Pol??tica de Privacidad ser?? de aplicaci??n obligatoria para el
              Usuario cada vez que ingresa a la Plataforma y/o a todos los
              sitios y servicios de propiedad u operados por Nutrixya o su
              sociedad controlante o vinculadas. Usted consiente en que se
              obtenga y utilice la informaci??n que usted ingrese a la Plataforma
              de acuerdo con lo establecido en esta Pol??tica de Privacidad.
            </p>
            <h4> 5. V??nculos con otros Sitios. </h4>
            <p className="mt-1">
              La Plataforma cuenta con publicidad u otros contenidos que
              establecen un v??nculo con sitios o servicios de terceros. Se
              aclara que resulta imposible para Nutrixya controlar sus
              contenidos o los v??nculos que a su vez ellos ofrecen, ya que
              muchos de ellos son permanentemente modificados y tienen su propia
              pol??tica de privacidad. Por ello, Nutrixya aconseja que antes de
              suministrar cualquier tipo de informaci??n a un sitio vinculado
              verifique la pol??tica de privacidad que ??ste aplica.
            </p>
            <h4> 6. Servicio de ???Google Analytics???. </h4>
            <p className="mt-1">
              El Usuario presta su consentimiento para que Nutrixya pueda
              utilizar sin restricciones el servicio de ???Google Analytics???, una
              herramienta anal??tica web perteneciente a la empresa Google Inc.
              Dicha herramienta le permite a Nutrixya la obtenci??n, recopilaci??n
              y vinculaci??n de informaci??n acerca del Usuario. Se hace saber que
              el Usuario podr?? inhabilitar las implementaciones y las funciones
              que se utilicen a trav??s de ???Google Analytics???, solicitando para
              ello la baja de su Cuenta en la Plataforma a trav??s del env??o de
              un e-mail a la siguiente casilla de correo: info@Nutrixya.com.ar.
              Se informa al Usuario que Google Inc. proh??be a Nutrixya subir
              datos que permitan a Google Inc. identificar personalmente a un
              usuario (como nombres, direcciones de correo electr??nico o datos
              similares), ni datos que identifiquen de forma permanente a un
              determinado dispositivo. De no cumplirse dicha prohibici??n, Google
              Inc. rescindir?? a Nutrixya su cuenta en ???Google Analytics???.
            </p>
            <h4> 7. Pol??tica de seguridad. </h4>
            <p className="mt-1">
              Nutrixya manifiesta adoptar los m??ximos esfuerzos a los fines de
              asegurar la privacidad de la informaci??n propia y de la
              Informaci??n Personal del Usuario. Si bien Nutrixya utiliza
              dispositivos de seguridad, como ser ???firewalls???, contrase??as de
              uso y otras medidas, y afecta todos sus esfuerzos a fin de
              asegurar su privacidad, no puede ofrecer garant??as absolutas
              contra el uso indebido o alteraci??n de la informaci??n que est??
              bajo su control.
            </p>
            <h4>
              {" "}
              8. Custodia y Confidencialidad de la Informaci??n Personal.{" "}
            </h4>
            <p className="mt-1">
              La Informaci??n Personal ser?? tratada por Nutrixya con el grado de
              protecci??n legalmente exigible para garantizar la seguridad de la
              misma y evitar su alteraci??n, p??rdida, tratamiento o acceso no
              autorizado. Nutrixya resguarda su Informaci??n Personal de acuerdo
              a est??ndares y procedimientos de seguridad y confidencialidad
              impuestas en la Rep??blica Argentina por la Disposici??n de la
              Direcci??n Nacional de Protecci??n de Datos Personales N?? 11/2006 y
              por los arts. 9 y 10 de la LPDP; y normas conexas. Nutrixya no
              informar?? la Informaci??n Personal a terceros, salvo que Usted
              hubiese dado su consentimiento expreso y por escrito para hacerlo,
              o de acuerdo a lo indicado anteriormente. Sin perjuicio de ello,
              el Usuario presta su consentimiento en forma expresa para que
              Nutrixya pueda eventualmente transferir total o parcialmente la
              Informaci??n Personal a cualquiera de las sociedades controladas,
              controlantes, vinculadas y/o a sus aliados comerciales, todo ello
              ??nicamente para el cumplimiento de las finalidades directamente
              relacionados con las actividades desarrolladas por Nutrixya.
            </p>
            <h4>
              9. Derecho de acceso, rectificaci??n, actualizaci??n y supresi??n.
            </h4>
            <p className="mt-1">
              De conformidad con la LPDP, Usted tiene la facultad de ejercer el
              derecho de acceso a los mismos en forma gratuita a intervalos no
              inferiores a seis (6) meses, salvo que acredite un inter??s
              leg??timo al efecto, conforme lo establecido en el art??culo 14,
              inciso 3 de dicha ley. Asimismo, podr?? ejercer los derechos de
              rectificaci??n, actualizaci??n y supresi??n a trav??s del env??o del
              formulario que corresponda y que se agregan como Anexo I a la
              siguiente casilla de correo: info@Nutrixya.com.ar. La Direcci??n
              Nacional de Protecci??n de datos personales, ??rgano de control de
              la LPDP, tiene la atribuci??n de atender las denuncias y reclamos
              que se interpongan con relaci??n al incumplimiento de las normas
              sobre protecci??n de datos personales.
            </p>
            <h4>10. Jurisdicci??n competente y ley aplicable.</h4>
            <p className="mt-1">
              Toda cuesti??n entre Nutrixya y el Usuario estar?? regida por las
              leyes de la Rep??blica Argentina, con exclusi??n de toda norma que
              remita a la aplicaci??n de una ley extranjera. Cualquier
              controversia ser?? sometida a los Tribunales Ordinarios de la
              Ciudad de Villa Carlos Paz, provincia de C??rdoba.
            </p>
            <p className="mt-1">
              <strong>
                {" "}
                Formulario para la rectificaci??n, actualizaci??n o supresi??n de
                datos personales (Art. 16 de la Ley 25.326)
              </strong>
            </p>
            <p className="mt-1">Sres. Nutrixya</p>
            <p className="mt-1">De mi consideraci??n:</p>
            <p className="mt-1">
              Por medio del presente escrito y de conformidad con el art??culo 16
              de la Ley N?? 25.326, y el art??culo 16 de su Decreto Reglamentario
              N?? 1558/01 manifiesto el deseo de ejercer el derecho de (indicar
              la opci??n elegida):
            </p>
            <p className="mt-1"> ??? Rectificaci??n: </p>
            <p className="mt-1">??? Actualizaci??n: </p>
            <p className="mt-1"> ??? Supresi??n: </p>
            <p className="mt-1">Datos del solicitante: </p>
            <p className="mt-1"> ??? Nombre: </p>
            <p className="mt-1">??? Apellido: </p>
            <p className="mt-1">
              ??? Nombre de usuario (email de registro) en el sistema:
            </p>
            <p className="mt-1">
              De este modo solicito que en el plazo de cinco (5) d??as h??biles
              desde la recepci??n de esta solicitud se proceda gratuitamente a la
              [rectificaci??n- actualizaci??n-supresi??n] de los datos relativos a
              mi persona que se encuentren en su base de datos. Los datos que
              deber??n Rectificarse/Actualizarse/Suprimirse se enumeran en la
              hoja anexa al presente, se acompa??an los documentos que acreditan
              su veracidad.
            </p>
            <p className="mt-1"> Sin otro particular, saludo a Ustedes atte.</p>
            <p className="mt-1">
              <strong>
                Formulario para el ejercicio del derecho de acceso a los datos
                personales (Art. 14 de la Ley 25.326)
              </strong>
            </p>
            <p className="mt-1">Sres. Nutrixya</p>
            <p className="mt-1">De mi consideraci??n:</p>
            <p className="mt-1">
              Por medio del presente escrito manifiesto el deseo de ejercer el
              derecho de acceso, de conformidad con el art??culo 14 de la Ley N??
              25.326, y los art??culos 14 y 15 de la Reglamentaci??n de la Ley N??
              25.326 aprobada por Decreto N?? 1558/01.{" "}
            </p>
            <p className="mt-1">
              {" "}
              En tal sentido, solicito que se me facilite gratuitamente el
              acceso a los datos existentes sobre mi persona en sus bases o
              registros en el plazo m??ximo de diez (10) d??as corridos a contar
              desde la recepci??n de esta solicitud, con indicaci??n de los datos
              que sobre mi persona est??n incluidos en sus registros, as?? como el
              origen de los datos y la especificaci??n de los concretos usos y
              finalidades para los que se almacenaron.
            </p>
            <p className="mt-1">Datos del solicitante: </p>
            <p className="mt-1">??? Nombre: </p>
            <p className="mt-1">??? Apellido: </p>
            <p className="mt-1">
              ??? Nombre de usuario (email de registro) en el sistema:{" "}
            </p>
            <p className="mt-1">Sin otro particular, saludo a Ustedes atte.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Register;
