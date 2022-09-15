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
      name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
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
        "Utiliza ocho caracteres como mínimo con una combinación de letras, números y símbolos";
    } else if (values.password.length > 16) {
      errors.password = "Usar solo 16 caracteres";
    }

    if (!values.passwordTwo) {
      errors.passwordTwo = "Obligatorio";
    } else if (values.passwordTwo !== values.password) {
      errors.passwordTwo = "Escriba la misma contraseña.";
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
                Registrate y lográ la máxima eficiencia en fertilización.
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
                    <em>Contraseña</em>
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
                    <em>Confirmar contraseña</em>
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
                    <option value={"A través de Nutrixya"}>
                      A través de Nutrixya
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
                        política de privacidad y los términos
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
                <span>¿Ya tienes una cuenta?</span>
              </p>

              <Button
                tag={Link}
                to="/login"
                className="mt-1"
                color="primary"
                block
              >
                Iniciar Sesión
              </Button>

              {/* <p className='text-center mt-2'>
              <span className='me-25'>¿Ya tienes una cuenta?</span>
              <Link to='/login'>
                <span>Si el usuario ya está registrado, puede iniciar sesión desde este botón</span>
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
            Términos y condiciones
          </ModalHeader>
          <ModalBody>
            <h4> 1. Aceptación. El acceso a la plataforma</h4>

            <p className="mt-1">
              web (en adelante la “Plataforma”) de Nutrixya (en adelante
              Nutrixya) y la utilización de sus servicios está sujeto a la
              aceptación de los Términos y Condiciones Generales que se
              establecen a continuación (en adelante los “Términos y
              Condiciones”), junto con la Política de Privacidad. De acceder Ud.
              (en adelante “Usted” o el “Usuario”) a la Plataforma, se entenderá
              que presta su conformidad con los Términos y Condiciones. Los
              Términos y Condiciones podrán estar sujetos a modificaciones, las
              que entrarán en vigencia a los 10 (diez) días de su publicación en
              la Plataforma, dándose aviso al Usuario de tal situación. El
              Usuario tendrá un plazo de 5 (cinco) días contados a partir de la
              fecha de la publicación de las modificaciones introducidas, para
              rechazar los nuevos términos y condiciones y en ese caso quedará
              disuelto el vínculo contractual. Vencido este plazo, se
              considerará que el Usuario acepta los nuevos términos y
              condiciones.
            </p>
            <h4> 2. Descripción de la Plataforma.</h4>
            <p className="mt-1">
              Nutrixya es un procedimiento agronómico versátil diseñado para
              predecir y calcular la demanda nutricional de cultivos y pasturas,
              contemplando variables edafológicas, específicas del cultivo, de
              fertilizantes, aportes de rastrojo, temperaturas medias y agua
              útil. La Plataforma consiste en una herramienta web/app dirigida a
              toda persona humana o jurídica o consorcio o unión transitoria u
              otra forma de asociación que desarrolle y/o explote la actividad
              agrícola, ganadera y/o agropecuaria y/o actividades afines. A
              través de la misma, se proporciona a los usuarios información
              sobre análisis de datos, herramientas de gestión de recursos,
              actualizaciones meteorológicas e informes inteligentes que ayudan
              a mejorar las actividades enunciadas.
            </p>
            <h4>
              {" "}
              3. Responsabilidad por la información contenida en la Plataforma.
            </h4>
            <p className="mt-1">
              Nutrixya no será responsable por cualquier daño o perjuicio
              derivado directo o indirectamente de la utilización de la presente
              plataforma ni de los informes generados desde la misma. Si el
              usuario no estuviera de acuerdo con estas condiciones, deberá
              abstenerse de utilizar esta herramienta y/o de la información aquí
              publicada, siendo cualquier utilización a exclusiva
              responsabilidad del usuario. En ningún caso Nutrixya responderá
              ante el Usuario por el lucro cesante, la pérdida de chances y/o
              toda consecuencia mediata o daño indirecto derivado de cualquier
              circunstancia que se vincule con la Plataforma.
            </p>
            <h4> 4. Usuario.</h4>
            <p className="mt-1">
              Para ser Usuario de la Plataforma, la persona deberá ser mayor de
              edad y contar con la capacidad legal de contratar. Para el caso
              que el Usuario se registre en representación de una sociedad o
              consorcios, uniones transitorias u otras formas de asociación
              deberá tener facultades para contratar y obligar a la misma en los
              Términos y Condiciones del presente acuerdo. A tales fines, el
              Usuario deberá completar el formulario de registro en todos sus
              campos. Los campos deberán completarse con su información personal
              y/o societaria de manera exacta, precisa y verdadera. El Usuario
              declara bajo juramento que la información proporcionada es
              verdadera y que posee las facultades suficientes para realizar las
              operaciones para las que se registra. El Usuario garantiza y
              responde, en todos los casos, por la veracidad, vigencia y
              autenticidad de los datos personales, societarios e información
              suministrada. Nutrixya se reserva el derecho de solicitar datos
              adicionales para el caso de Usuarios que realicen transacciones
              que requieran de facultades adicionales exigidas por ley o por las
              políticas actuales o futuras de la Plataforma. Nutrixya se reserva
              el derecho de rechazar cualquier solicitud de registración o de
              cancelar una registración previamente aceptada, sin que esté
              obligado a comunicar o exponer las razones de su decisión y sin
              que ello genere algún derecho a indemnización o resarcimiento.
            </p>
            <h4> 5. Uso de la Plataforma.</h4>
            <p className="mt-1">
              Otorgamiento de licencia. El Usuario accederá a la Plataforma a
              través de una cuenta personal específicamente creada por Nutrixya,
              la cual contendrá el nombre de Usuario y/o dirección de correo
              electrónico (e-mail) y contraseña (en adelante la “Cuenta”). La
              contraseña será elegida por el Usuario y es de su exclusivo
              conocimiento y se obliga a no divulgarla. La cuenta es personal,
              única e intransferible, y está prohibido que el Usuario tenga más
              de una cuenta. Nutrixya se reserva el derecho de cancelar,
              suspender o inhabilitar las cuentas que contengan datos
              coincidentes o relacionados. Se deja expresa constancia que se
              encuentra terminantemente prohibido para el Usuario descargar y/o
              reproducir y/o ceder a terceros cualquier tipo de imagen obtenida
              en la Plataforma, inclusive a través de una imagen fotográfica y/o
              captura de pantalla. El Usuario es responsable de todas las
              operaciones realizadas en su Cuenta. El Usuario se compromete a
              notificar a Nutrixya en forma inmediata y fehaciente de cualquier
              uso o ingreso no autorizado de su cuenta. La Cuenta no es una
              propiedad del Usuario, sino una herramienta que Nutrixya pone a
              disposición del Usuario para acceder a los servicios de la
              Plataforma. Queda terminantemente prohibida la venta, cesión, y
              transferencia de la Cuenta bajo ningún título. A tales fines,
              Nutrixya concede al Usuario una licencia de uso intransferible, no
              exclusiva y revocable para utilizar la Plataforma. Nutrixya no
              está obligado a proveer ningún equipo o programa de software para
              acceder a la Plataforma. El Usuario deberá contar con todos los
              recursos necesarios para ello, incluidos los de
              telecomunicaciones.
            </p>
            <h4> 6. Suspensión y/o baja del Usuario.</h4>
            <p className="mt-1">
              Nutrixya se reserva el derecho de suspender o dar de baja al
              Usuario de la Plataforma en los siguientes casos: ● Cuando el
              Usuario haya suministrado a Nutrixya información sobre datos
              personales y/o societarios que no hayan podido ser confirmados o
              que resulten falsos o inexactos. ● Cuando el Usuario hiciera un
              uso indebido de la Plataforma para propósitos ilegales, abusivos,
              difamatorios, y/o para facilitar o promover actividades en
              competencia con Nutrixya. ● Cuando a criterio de Nutrixya se
              encuentre en riesgo la seguridad de la Plataforma u otro riesgo
              percibido contra la seguridad de la información contenida en la
              misma. ● Cuando a criterio de Nutrixya se produjera algún otro
              evento de gravedad que justifique la decisión de suspender
              temporal o definitivamente al Usuario. ● Cuando la cuenta
              estuviera inactiva por el plazo de doce (12) meses, Nutrixya se
              reserva el derecho de cerrar la misma.
            </p>
            <h4> 7. Mención del Usuario como cliente de Nutrixya.</h4>
            <p className="mt-1">
              El Usuario, al registrarse en la Plataforma, autoriza a Nutrixya a
              mencionarlo como cliente, así como publicar su nombre, marcas y/o
              logotipo y/o isotipo, y/o cualquier otro signo que lo represente e
              identifique con el fin de dar a conocer su presencia y/o
              actividad.
            </p>
            <h4> 8. Propiedad Intelectual. Enlaces.</h4>
            <p className="mt-1">
              La Plataforma como así también los programas, bases de datos,
              redes, archivos que permiten al Usuario acceder y usar su Cuenta,
              son de propiedad de Nutrixya. El uso indebido y la reproducción
              total o parcial de dichos contenidos quedan prohibidos, salvo
              autorización expresa y por escrito de Nutrixya. La retransmisión o
              publicación de cualquier material obtenido desde la Plataforma se
              encuentra prohibida sin el previo consentimiento escrito de
              Nutrixya. La Plataforma puede contener enlaces a otros sitios web,
              lo cual no indica que sean propiedad u operados por Nutrixya. En
              virtud que Nutrixya no tiene control sobre tales sitios, se aclara
              que no será responsable por los contenidos, materiales, acciones
              y/o servicios prestados por los mismos, ni por daños o pérdidas
              ocasionadas por la utilización de los mismos, sean causadas
              directa o indirectamente.
            </p>
            <h4> 9. Responsabilidad por Downloads. </h4>
            <p className="mt-1">
              Corre por cuenta del Usuario verificar la inexistencia de virus en
              los programas y materiales que el Usuario descargue en su equipo
              (“los materiales de download”) para la utilización de la
              Plataforma. En ningún caso Nutrixya será responsable por los daños
              causados por elementos destructivos que pudieran haber introducido
              terceros a los materiales de download provistos por el Usuario, ni
              por los materiales de download suministrados por los proveedores
              de información o un tercero sin autorización expresa de Nutrixya.
            </p>
            <h4> 10. Compromiso de Indemnidad – Reservas de Nutrixya. </h4>
            <p className="mt-1">
              El Usuario se obliga a mantener indemne a Nutrixya, a sus
              dependientes, licenciantes, proveedores y licenciatarios de los
              daños resultantes (incluyendo los costos de defensa) de cualquier
              acto o hecho ilícito imputable al Usuario o a un tercero que
              utilice la cuenta del Usuario. Nutrixya podrá modificar, eliminar
              y/o agregar términos y/o condiciones en cualquiera de las
              cláusulas de los Términos y Condiciones, sin la previa conformidad
              del Cliente. Nutrixya se reserva el derecho de modificar la
              estructura de la Plataforma en la oportunidad y en la condición
              que lo considere oportuno y conveniente.
            </p>
            <h4> 11. Jurisdicción y Ley Aplicable. </h4>
            <p className="mt-1">
              Toda cuestión entre Nutrixya y el Usuario estará regida por las
              leyes de la República Argentina, con exclusión de toda norma que
              remita a la aplicación de una ley extranjera. Cualquier
              controversia será sometida a los Tribunales Ordinarios de la
              Ciudad de Villa Carlos Paz, Provincia de Córdoba.
            </p>
            <h4> 12. Renuncias. </h4>
            <p className="mt-1">
              La demora u omisión de Nutrixya en exigir el estricto cumplimiento
              de estos Términos y Condiciones no podrá interpretarse como
              renuncia a sus derechos.
            </p>
            <h4> 13. Nulidad parcial. </h4>
            <p className="mt-1">
              En caso que alguna disposición de estos Términos y Condiciones
              fuera declarada nula, ello no afectará la validez de las demás.
            </p>
            <h4> 14. Marca. </h4>
            <p className="mt-1">
              Toda marca o logotipo que aparezca en la Plataforma pertenece a
              Nutrixya y el Usuario no podrá utilizarlas sin autorización,
              quedando prohibido cualquier uso o explotación por cualquier
              medio, sin el consentimiento previo y por escrito de Nutrixya.
            </p>
            <h3>Política de Privacidad</h3>
            <h4> 1. Objetivo. </h4>
            <p className="mt-1">
              valora a sus Usuarios y está comprometida a proteger su
              privacidad. En el desempeño de dicho compromiso, Nutrixya ha
              desarrollado esta política de privacidad (en adelante, la
              “Política de Privacidad”) que describe las políticas y prácticas
              de Nutrixya en lo que se refiere a la recolección, uso y
              divulgación de información personal recopilada. Al registrarse,
              visitar y/o utilizar la Plataforma, Usted acepta las prácticas que
              se detallan a continuación. Esta Política contiene las prácticas
              de privacidad de la Plataforma, en cumplimiento de la Ley de
              Protección de Datos Personales en Argentina N º 25.326 y sus
              normas complementarias (en adelante, “LPDP”). La Política de
              Privacidad podrá ser modificada por múltiples razones, como ser el
              empleo de nuevas tecnologías de procesamiento de información o
              cambios en la Plataforma, entre otros, las que entrarán en
              vigencia a los 10 (diez) días de su publicación en la Plataforma,
              dándose aviso al Usuario de tal situación. El Usuario tendrá un
              plazo de 5 (cinco) días contados a partir de la fecha de la
              publicación de las modificaciones introducidas, para rechazar la
              nueva política de privacidad y en ese caso quedará disuelto el
              vínculo contractual. Vencido este plazo, se considerará que el
              Usuario acepta la nueva Política de Privacidad.
            </p>
            <h4> 2. Información recolectada. Consentimiento. </h4>
            <p className="mt-1">
              Al ingresar y utilizar a esta Plataforma, Usted consiente en que
              se obtenga y utilice la información personal referida a la
              identidad del Usuario, entendiéndose por ello, sin carácter
              taxativo, la siguiente: nombre y apellido, dirección, teléfono,
              dirección de e-mail, nacionalidad, clave de identificación
              tributaria, información sobre los campos dedicados a la actividad
              agropecuaria y que sean explotados por el Usuario (en adelante la
              “Información Personal”) para los fines propios de la Plataforma,
              y/o cualquier información necesaria para la prestación de los
              servicios contratados a Nutrixya.
            </p>
            <h4> 3. Finalidad de la Información Personal. </h4>
            <p className="mt-1">
              Conservación de la Información Personal. El Usuario presta su
              consentimiento para que la Información Personal (i) se procese y
              almacene en servidores o medios magnéticos y/o digitales y/o (ii)
              se haga un uso científico y estadístico para la mejora del
              servicio y contenido de la Plataforma. Se deja expresa constancia
              que la eliminación de la Cuenta no implica la eliminación de la
              Información Personal, sin perjuicio de que Nutrixya sólo podrá
              hacer un uso científico y estadístico de la misma. Para tal fin,
              se deja expresa constancia que Nutrixya sólo podrá conservar la
              información del Usuario utilizando tecnologías para la disociación
              de datos y que las mismas no sean reversibles, imposibilitando de
              esta forma identificar al Usuario respecto de la Información
              Personal.
            </p>
            <h4> 4. Aplicación de la Política de Privacidad. </h4>
            <p className="mt-1">
              La Política de Privacidad será de aplicación obligatoria para el
              Usuario cada vez que ingresa a la Plataforma y/o a todos los
              sitios y servicios de propiedad u operados por Nutrixya o su
              sociedad controlante o vinculadas. Usted consiente en que se
              obtenga y utilice la información que usted ingrese a la Plataforma
              de acuerdo con lo establecido en esta Política de Privacidad.
            </p>
            <h4> 5. Vínculos con otros Sitios. </h4>
            <p className="mt-1">
              La Plataforma cuenta con publicidad u otros contenidos que
              establecen un vínculo con sitios o servicios de terceros. Se
              aclara que resulta imposible para Nutrixya controlar sus
              contenidos o los vínculos que a su vez ellos ofrecen, ya que
              muchos de ellos son permanentemente modificados y tienen su propia
              política de privacidad. Por ello, Nutrixya aconseja que antes de
              suministrar cualquier tipo de información a un sitio vinculado
              verifique la política de privacidad que éste aplica.
            </p>
            <h4> 6. Servicio de “Google Analytics”. </h4>
            <p className="mt-1">
              El Usuario presta su consentimiento para que Nutrixya pueda
              utilizar sin restricciones el servicio de “Google Analytics”, una
              herramienta analítica web perteneciente a la empresa Google Inc.
              Dicha herramienta le permite a Nutrixya la obtención, recopilación
              y vinculación de información acerca del Usuario. Se hace saber que
              el Usuario podrá inhabilitar las implementaciones y las funciones
              que se utilicen a través de “Google Analytics”, solicitando para
              ello la baja de su Cuenta en la Plataforma a través del envío de
              un e-mail a la siguiente casilla de correo: info@Nutrixya.com.ar.
              Se informa al Usuario que Google Inc. prohíbe a Nutrixya subir
              datos que permitan a Google Inc. identificar personalmente a un
              usuario (como nombres, direcciones de correo electrónico o datos
              similares), ni datos que identifiquen de forma permanente a un
              determinado dispositivo. De no cumplirse dicha prohibición, Google
              Inc. rescindirá a Nutrixya su cuenta en “Google Analytics”.
            </p>
            <h4> 7. Política de seguridad. </h4>
            <p className="mt-1">
              Nutrixya manifiesta adoptar los máximos esfuerzos a los fines de
              asegurar la privacidad de la información propia y de la
              Información Personal del Usuario. Si bien Nutrixya utiliza
              dispositivos de seguridad, como ser “firewalls”, contraseñas de
              uso y otras medidas, y afecta todos sus esfuerzos a fin de
              asegurar su privacidad, no puede ofrecer garantías absolutas
              contra el uso indebido o alteración de la información que está
              bajo su control.
            </p>
            <h4>
              {" "}
              8. Custodia y Confidencialidad de la Información Personal.{" "}
            </h4>
            <p className="mt-1">
              La Información Personal será tratada por Nutrixya con el grado de
              protección legalmente exigible para garantizar la seguridad de la
              misma y evitar su alteración, pérdida, tratamiento o acceso no
              autorizado. Nutrixya resguarda su Información Personal de acuerdo
              a estándares y procedimientos de seguridad y confidencialidad
              impuestas en la República Argentina por la Disposición de la
              Dirección Nacional de Protección de Datos Personales Nº 11/2006 y
              por los arts. 9 y 10 de la LPDP; y normas conexas. Nutrixya no
              informará la Información Personal a terceros, salvo que Usted
              hubiese dado su consentimiento expreso y por escrito para hacerlo,
              o de acuerdo a lo indicado anteriormente. Sin perjuicio de ello,
              el Usuario presta su consentimiento en forma expresa para que
              Nutrixya pueda eventualmente transferir total o parcialmente la
              Información Personal a cualquiera de las sociedades controladas,
              controlantes, vinculadas y/o a sus aliados comerciales, todo ello
              únicamente para el cumplimiento de las finalidades directamente
              relacionados con las actividades desarrolladas por Nutrixya.
            </p>
            <h4>
              9. Derecho de acceso, rectificación, actualización y supresión.
            </h4>
            <p className="mt-1">
              De conformidad con la LPDP, Usted tiene la facultad de ejercer el
              derecho de acceso a los mismos en forma gratuita a intervalos no
              inferiores a seis (6) meses, salvo que acredite un interés
              legítimo al efecto, conforme lo establecido en el artículo 14,
              inciso 3 de dicha ley. Asimismo, podrá ejercer los derechos de
              rectificación, actualización y supresión a través del envío del
              formulario que corresponda y que se agregan como Anexo I a la
              siguiente casilla de correo: info@Nutrixya.com.ar. La Dirección
              Nacional de Protección de datos personales, órgano de control de
              la LPDP, tiene la atribución de atender las denuncias y reclamos
              que se interpongan con relación al incumplimiento de las normas
              sobre protección de datos personales.
            </p>
            <h4>10. Jurisdicción competente y ley aplicable.</h4>
            <p className="mt-1">
              Toda cuestión entre Nutrixya y el Usuario estará regida por las
              leyes de la República Argentina, con exclusión de toda norma que
              remita a la aplicación de una ley extranjera. Cualquier
              controversia será sometida a los Tribunales Ordinarios de la
              Ciudad de Villa Carlos Paz, provincia de Córdoba.
            </p>
            <p className="mt-1">
              <strong>
                {" "}
                Formulario para la rectificación, actualización o supresión de
                datos personales (Art. 16 de la Ley 25.326)
              </strong>
            </p>
            <p className="mt-1">Sres. Nutrixya</p>
            <p className="mt-1">De mi consideración:</p>
            <p className="mt-1">
              Por medio del presente escrito y de conformidad con el artículo 16
              de la Ley Nº 25.326, y el artículo 16 de su Decreto Reglamentario
              Nº 1558/01 manifiesto el deseo de ejercer el derecho de (indicar
              la opción elegida):
            </p>
            <p className="mt-1"> ● Rectificación: </p>
            <p className="mt-1">● Actualización: </p>
            <p className="mt-1"> ● Supresión: </p>
            <p className="mt-1">Datos del solicitante: </p>
            <p className="mt-1"> ● Nombre: </p>
            <p className="mt-1">● Apellido: </p>
            <p className="mt-1">
              ● Nombre de usuario (email de registro) en el sistema:
            </p>
            <p className="mt-1">
              De este modo solicito que en el plazo de cinco (5) días hábiles
              desde la recepción de esta solicitud se proceda gratuitamente a la
              [rectificación- actualización-supresión] de los datos relativos a
              mi persona que se encuentren en su base de datos. Los datos que
              deberán Rectificarse/Actualizarse/Suprimirse se enumeran en la
              hoja anexa al presente, se acompañan los documentos que acreditan
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
            <p className="mt-1">De mi consideración:</p>
            <p className="mt-1">
              Por medio del presente escrito manifiesto el deseo de ejercer el
              derecho de acceso, de conformidad con el artículo 14 de la Ley Nº
              25.326, y los artículos 14 y 15 de la Reglamentación de la Ley Nº
              25.326 aprobada por Decreto Nº 1558/01.{" "}
            </p>
            <p className="mt-1">
              {" "}
              En tal sentido, solicito que se me facilite gratuitamente el
              acceso a los datos existentes sobre mi persona en sus bases o
              registros en el plazo máximo de diez (10) días corridos a contar
              desde la recepción de esta solicitud, con indicación de los datos
              que sobre mi persona están incluidos en sus registros, así como el
              origen de los datos y la especificación de los concretos usos y
              finalidades para los que se almacenaron.
            </p>
            <p className="mt-1">Datos del solicitante: </p>
            <p className="mt-1">● Nombre: </p>
            <p className="mt-1">● Apellido: </p>
            <p className="mt-1">
              ● Nombre de usuario (email de registro) en el sistema:{" "}
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
