import React, { useContext, useState } from "react";

// ** Icons Imports
import {
  MoreVertical,
  Edit,
  Trash,
  Monitor,
  TrendingUp,
  TrendingDown,
} from "react-feather";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  Button,
  CardHeader,
  CardTitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tooltip,
  UncontrolledTooltip,
} from "reactstrap";

// ** Import Link from react-router-dom
import { Link } from "react-router-dom";

// ** import icon ToolBox
import toolBox from "@src/assets/images/icons/toolbox.svg";
import { DataContext } from "../../utility/context/LoteProvider";

const TableCompany = () => {
  const {
    data,
    deleteData,
    setDataToEdit,
    setData,
    setAddRecomendacion,
    setVerRecomendacion,
    idLoteDelete,
    setIdLoteDelete,
    deleteLoteModal,
    setDeleteLoteModal,
  } = useContext(DataContext);

  const [verModal, setVerModal] = useState(false);

  // ** tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const medidaDesktop = document.documentElement.clientWidth;

  const renderData = () => {
    return (
      <>
        <tr>
          <td>
            <div className="d-flex aling-items-center pb-1 pt-1">
              <img className="me-75" src={toolBox} alt="name" />
              <div className="d-flex flex-column">
                <Link
                  to="/new-lote"
                  className="align-middle fw-bolder"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  // title="Crear nuevo Lote"
                  id="masLote"
                >
                  + Lote
                </Link>
                {/* <FiHelpCircle id="Precio" className="fs-5 ms-1" /> */}
                <UncontrolledTooltip placement="right" target="masLote">
                  <span className="fw-bolder">Crear nuevo Lote</span>
                </UncontrolledTooltip>
              </div>
            </div>
          </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
        {data.map((dato, index) => (
          <>
            <tr key={index || dato.id}>
              {/* NOMBRE */}
              <td>
                <div className="d-flex aling-items-center">
                  <img className="me-75" src={toolBox} alt={dato.name} />
                  <div className="d-flex flex-column">
                    <Link
                      to={"/new-lote"}
                      onClick={() => setDataToEdit(dato)}
                      className="align-middle fw-bolder"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      // title="Editar Lote"
                      id="editLote"
                    >
                      {dato.name}
                    </Link>

                    <UncontrolledTooltip placement="right" target="editLote">
                      <span className="fw-bolder">Editar Lote</span>
                    </UncontrolledTooltip>

                    <span className="font-small-2 text-muted">
                      {dato.description}
                    </span>
                  </div>
                </div>
              </td>
              {/* CAMPO */}
              <td>
                <span className="fw-bolder mb-25">{dato.field}</span>
              </td>
              {/* LOCALIDAD */}
              <td className="text-nowrap">
                <div className="d-flex flex-column">
                  <span className="fw-bolder mb-25">{dato.location}</span>
                  <span className="font-small-2 text-muted">
                    {dato.province}
                  </span>
                </div>
              </td>
              {/* CULTIVO */}
              <td>
                <div className="d-flex align-items-center">
                  <span className="fw-bolder ms-1">{dato.crop}</span>
                  {/* {col.cropUp ? (<TrendingUp size={15} className="text-success" />) : (<TrendingDown size={15} className="text-danger" />)} */}
                </div>
              </td>
              {/* FECHA */}
              <td>
                <Badge
                  pill
                  // color={dato.cropUp ? "light-primary" : "light-danger"}
                  color="light-primary"
                  className="ms-1"
                >
                  {dato.date}
                </Badge>
              </td>
              <td>
                <UncontrolledDropdown className="ms-4">
                  <DropdownToggle
                    className="icon-btn hide-arrow"
                    color="transparent"
                    size="sm"
                    caret
                  >
                    <MoreVertical size={15} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem className="w-100">
                      {dato.crop && dato.date ? (
                        <Link
                          to="/rendimiento"
                          onClick={() => setVerRecomendacion(dato)}
                        >
                          <Monitor className="me-50" size={15} />{" "}
                          <span className="align-middle">Ver</span>
                        </Link>
                      ) : (
                        <span onClick={() => setVerModal(!verModal)}>
                          <Monitor className="me-50" size={15} />{" "}
                          <span className="align-middle">Ver</span>
                        </span>
                      )}
                    </DropdownItem>

                    <DropdownItem className="w-100">
                      <Link
                        to="/Alta"
                        onClick={() => setAddRecomendacion(dato)}
                      >
                        <Edit className="me-50" size={15} />{" "}
                        <span className="align-middle">Agregar / Editar</span>
                      </Link>
                    </DropdownItem>

                    {/* <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Trash className='me-50' size={15} /> <span className='align-middle'>Eliminar</span>
                </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
              <Modal
                isOpen={verModal}
                // toggle={() => setCenteredModal(!centeredModal)}
                className="modal-dialog-centered"
              >
                {/* toggle={() => setCenteredModal(!centeredModal)} */}
                <ModalHeader>Atención</ModalHeader>
                <ModalBody>
                  <h4 className="mb-2">
                    Para poder ver los resultados de su lote necesita agregar
                    una recomendación.
                  </h4>
                  <span>
                    Agrega o Edita una recomendación desde{" "}
                    <span className="color-ejemplo fw-bold">
                      "Agregar / Editar"
                    </span>
                    .
                  </span>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => setVerModal(!verModal)}
                  >
                    Aceptar
                  </Button>
                </ModalFooter>
              </Modal>

              <td>
                <span className="hoverDelete" id="deleteLote">
                  <Trash
                    className="me-50"
                    size={15}
                    onClick={() => {
                      setDeleteLoteModal(true), setIdLoteDelete(dato.id);
                    }}
                    // onClick={() => deleteData(dato.id)}
                  />

                  {/* <Tooltip
                    placement="left"
                    isOpen={tooltipOpen}
                    autohide={true}
                    target="deleteLote"
                    toggle={toggle}
                  >
                    Eliminar Lote
                  </Tooltip> */}
                </span>
                <UncontrolledTooltip placement="right" target="deleteLote">
                  <span className="fw-bolder">Eliminar Lote</span>
                </UncontrolledTooltip>
              </td>
            </tr>
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <CardHeader className="d-flex align-items-center justify-content-between">
        <CardTitle>Mis Lotes</CardTitle>

        {/* {data.length === 0 && (
          <Link to="/new-lote" className="btn btn-primary">
            + Lote
          </Link>
        )} */}
      </CardHeader>

      <CardBody>
        {data.length === 1 ? (
          <>
            {medidaDesktop <= 1024 ? (
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>CAMPO</th>
                    <th>LOCALIDAD</th>
                    <th>CULTIVO</th>
                    <th>FECHA DE SIEMBRA</th>
                    <th>MIS RECOMENDACIONES</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </Table>
            ) : (
              <Table hover>
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>CAMPO</th>
                    <th>LOCALIDAD</th>
                    <th>CULTIVO</th>
                    <th>FECHA DE SIEMBRA</th>
                    <th>MIS RECOMENDACIONES</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </Table>
            )}
          </>
        ) : (
          <Table responsive hover>
            <thead>
              <tr>
                <th>NOMBRE</th>
                <th>CAMPO</th>
                <th>LOCALIDAD</th>
                <th>CULTIVO</th>
                <th>FECHA DE SIEMBRA</th>
                <th>MIS RECOMENDACIONES</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{renderData()}</tbody>
          </Table>
        )}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </CardBody>
    </>
  );
};

export default TableCompany;
