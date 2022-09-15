// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Icons Imports
import { ChevronLeft } from "react-feather";

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
} from "reactstrap";

// ** import logoIcon
import Logo from "../assets/images/logo/logoNutrixya.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const ForgotPassword = () => {
  // ** Hooks
  const { skin } = useSkin();

  const illustration =
      skin === "dark"
        ? "forgot-password-v2-dark.svg"
        : "forgot-password-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/login">
          <img src={Logo} alt={"logo icon"} />
          <h2 className="brand-text txtLogo ms-1">Nutrixya</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              ¿Olvidaste tu contraseña? 🔒
            </CardTitle>
            <CardText className="mb-2">
              Ingresa tu correo electrónico y te enviaremos instrucciones para
              restablecer tu contraseña.
            </CardText>
            <Form
              className="auth-forgot-password-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Correo electrónico
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="ejemplo@ejemplo.com"
                  autoFocus
                />
              </div>
              <Button color="primary" block>
                Enviar enlace de restablecimiento
              </Button>
            </Form>
            <p className="text-center mt-2">
              <Link to="/login">
                <ChevronLeft className="rotate-rtl me-25" size={14} />
                <span className="align-middle">Volver al inicio de sesión</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;
