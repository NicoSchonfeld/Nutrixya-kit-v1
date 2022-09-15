import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
  Table,
  Form,
  Label,
  Input,
} from "reactstrap";

import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

import avatar from "../../../../assets/images/portrait/small/avatar-s-1.jpg";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const ProfilePage = () => {
  const { nombreUsuario, setNombreUsuario } = useContext(DataContext);

  const navigate = useNavigate();

  const [settingPassword, setSettingPassword] = useState(false);

  return (
    <>
      <Row className="p-1 h-100">
        <Col md="4" sm="12" className="p-1">
          <Card>
            <CardHeader className="d-flex flex-column align-items-center justify-content-start">
              <img
                src={avatar}
                alt={"avatar user profile"}
                width={130}
                height={130}
                className="rounded-circle"
              />
              <CardTitle tag="h5" className="mt-1">
                {nombreUsuario}
              </CardTitle>
            </CardHeader>

            <hr />

            <CardBody className="pb-2 d-flex flex-column align-items-start justify-content-start">
              <CardText>
                <span className="fs-6">Nombre:</span>
                <div className="d-flex align-items-center">
                  <FiUser className="me-1 text-primary" />
                  {nombreUsuario}
                </div>
              </CardText>

              <CardText>
                <span className="fs-6">Email:</span>
                <div className="d-flex align-items-center">
                  <AiOutlineMail className="me-1 text-primary" />
                  martinnutrixya@gmail.com
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col md="8" sm="12" className="p-3">
          <h3 className="mb-3">Edita tu perfil</h3>

          <Form>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" htmlFor="name">
                  Nombre
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Martin-Nutrixya"
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)}
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" htmlFor="Email">
                  Email
                </Label>
                <Input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="ejemplo@ejemplo.com"
                  value={"martinnutrixya@gmail.com"}
                />
              </Col>
            </Row>

            <Row>
              {settingPassword !== true ? (
                <Col md="6" sm="12">
                  <Button
                    className="mt-2"
                    color="primary"
                    outline
                    block
                    onClick={(e) => {
                      e.preventDefault(), setSettingPassword(true);
                    }}
                  >
                    ¿Cambiar contraseña?
                  </Button>
                </Col>
              ) : null}

              {settingPassword ? (
                <>
                  <hr className="my-1" />

                  <Col md="6" sm="12">
                    <Label className="form-label" for="amountOfHectarea">
                      Contraseña actual
                    </Label>

                    <Input
                      type="password"
                      name="amountOfHectarea"
                      id="amountOfHectarea"
                      placeholder="*************"
                    />
                  </Col>

                  <Col md="6" sm="12">
                    <Label className="form-label" for="amountOfHectarea">
                      Contraseña nueva
                    </Label>

                    <Input
                      type="password"
                      name="amountOfHectarea"
                      id="amountOfHectarea"
                      placeholder="*************"
                    />
                  </Col>

                  <Col md="6" sm="12" className="mt-1">
                    <Label className="form-label" for="amountOfHectarea">
                      Repetir nueva contraseña
                    </Label>

                    <Input
                      type="password"
                      name="amountOfHectarea"
                      id="amountOfHectarea"
                      placeholder="*************"
                    />
                  </Col>
                </>
              ) : null}
            </Row>

            <div className="d-flex justify-content-end mt-1">
              <Button
                className="btn btn-primary ms-2"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Guardar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
