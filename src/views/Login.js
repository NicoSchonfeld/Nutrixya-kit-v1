import { useEffect, useState } from "react";
import { useSkin } from "@hooks/useSkin";
import { Link, useNavigate } from "react-router-dom";
import InputPasswordToggle from "@components/input-password-toggle";
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
import "@styles/react/pages/page-authentication.scss";

// ** import logo icon
import Logo from "../assets/images/logo/logoNutrixya.svg";

const Login = () => {
  const { skin } = useSkin();

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  // const illustration =
  //     skin === "dark" ? "npks-animate.png" : "npks-animate.png",
  //   source = require(`@src/assets/images/logo/${illustration}`).default;

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/login">
          <img src={Logo} alt={"Logo"} />

          <h2 className="brand-text txtLogo ms-1">Nutrixya</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        {/* auth-bg */}
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Te damos la bienvenida a Nutrixya
            </CardTitle>
            <CardText className="mb-2">
              La plataforma que te ayudará a nutrir tus cultivos de manera ágil
              y sencilla logrando la máxima eficiencia en fertilización.
            </CardText>
            <Form className="auth-login-form mt-2">
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  <em>Email</em>
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  autoFocus
                  placeholder="ejemplo@ejemplo.com"
                />
              </div>

              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Contraseña
                  </Label>
                  <Link to="/forgot-password">
                    <small>¿Olvidó su contraseña?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  // "input-group-merge"
                  id="login-password"
                />
              </div>

              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Recuérdame
                </Label>
              </div>
              <Link to="/home">
                <Button color="primary" block>
                  Inicia sesión
                </Button>
              </Link>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">¿Nuevo en nuestra plataforma?</span>
              <Link to="/register">
                <span>Crear una cuenta</span>
              </Link>
            </p>
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
  );
};

export default Login;
