// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

// ** logo icon
import Logo from "../assets/images/logo/logo.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const VerifyEmailBasic = () => {
  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/login"
              onClick={(e) => e.preventDefault()}
            >
              <img src={Logo} alt={"logo icon"} />

              <h2 className="brand-text text-primary ms-1">Nutrixya</h2>
            </Link>
            <CardTitle tag="h2" className="fw-bolder mb-1">
              Verifica tu correo electrónico ✉️
            </CardTitle>
            <CardText className="mb-2">
              Enviamos un enlace a tu{" "}
              <span className="fw-bolder">
                dirección de correo electrónico.
              </span>{" "}
              Seguí el enlace que contiene para continuar.
            </CardText>
            <Button block tag={Link} to="/login" color="primary">
              Iniciar sesión
            </Button>
            {/* <p className="text-center mt-2">
              <span>Didn't receive an email? </span>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <span>Resend</span>
              </a>
            </p> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default VerifyEmailBasic;
