//** import hooks from react
import { useContext } from "react";

// ** Import DataContext from LoteProvider
import { DataContext } from "../../../../utility/context/LoteProvider";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
} from "reactstrap";

const LoteManjeo = () => {
  const {
    dataForm,
    handleChange,
    handleSubmit,
    dataToEdit,
    backModal,
    setBackModal,
  } = useContext(DataContext);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Lotes</CardTitle>
        </CardHeader>

        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" htmlFor="name">
                  Nombre
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  value={dataForm.name}
                  onChange={handleChange}
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="field">
                  Campo o Establecimiento
                </Label>
                <Input
                  type="text"
                  name="field"
                  id="field"
                  placeholder="Campo o Establecimiento"
                  value={dataForm.field}
                  onChange={handleChange}
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="amountOfHectarea">
                  Cantidad de Hectáreas
                </Label>
                <Input
                  type="text"
                  name="amountOfHectarea"
                  id="amountOfHectarea"
                  placeholder="Cantidad de Hectáreas"
                  value={dataForm.amountOfHectarea}
                  onChange={handleChange}
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="province">
                  Provincia
                </Label>
                <Input
                  type="text"
                  name="province"
                  id="province"
                  placeholder="Provincia"
                  value={dataForm.province}
                  onChange={handleChange}
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="location">
                  Localidad
                </Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Localidad"
                  value={dataForm.location}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-1">
              <Button
                outline
                color="danger"
                onClick={() => setBackModal(!backModal)}
              >
                Volver
              </Button>

              <Button
                className="btn btn-primary ms-2"
                color="primary"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default LoteManjeo;

// // ** React Imports
// import { Fragment } from 'react'

// // ** Icons Imports
// import { ArrowLeft, ArrowRight } from 'react-feather'
// import { Link } from 'react-router-dom'

// // ** Reactstrap Imports
// import { Label, Row, Col, Input, Form, Button, FormGroup } from 'reactstrap'

// const LoteManjeo = ({ stepper }) => {
//   return (
//     <Fragment>
//       <div className='content-header'>
//         <h3 className='mb-0'>Lote y Manjeo (Modificar página jira)</h3>
//       </div>
//       <Form onSubmit={e => e.preventDefault()}>
//         <FormGroup >
//         <Row className='match-height mt-1'>
//             <Col md='6' sm='12' >
//               <Label className='mt-1'>Nombre</Label>
//               <Input placeholder='Nombre' />
//               <Label className='mt-1'>Localidad</Label>
//               <Input placeholder='Localidad' />
//               <Label className='mt-1'>Tiempo transcurrido entre cosecha y siembra</Label>
//               <Input placeholder='Tiempo' />
//               <Label className='mt-1'>Rendimiento del cultivo antecesor en qq/ha</Label>
//               <Input placeholder='Rendimiento del cultivo antecesor en qq/ha' />
//             </Col>
//             <Col md='6' sm='12'>
//               <Label className='mt-1'>Campo o establecimiento</Label>
//               <Input placeholder='establecimiento' />
//               <Label className='mt-1'>Cultivo antecesor</Label>
//               <Input placeholder='Cultivo antecesor' />
//               <Label className='mt-1'>¿Se realiza siembra directa o lote arado?</Label>
//               <Input placeholder='¿Se realiza siembra directa o lote arado?' />
//               <Label className='mt-1'>Cantidad de hectáreas</Label>
//               <Input placeholder='Cantidad de hectáreas' />
//             </Col>
//         </Row>
//         </FormGroup>
//         <div className='d-flex justify-content-end'>
//           {/* <Button color='secondary' className='btn-prev' outline disabled>
//             <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
//             <span className='align-middle d-sm-inline-block d-none'>Atras</span>
//           </Button> */}
//           <Link to="/home" className="btn btn-primary">
//             <span className='align-middle d-sm-inline-block d-none'>Guardar</span>
//             {/* <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight> */}
//           </Link>
//         </div>
//       </Form>
//     </Fragment>
//   )
// }

// export default LoteManjeo
