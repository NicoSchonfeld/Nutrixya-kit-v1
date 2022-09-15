import React, { createContext, useEffect, useState } from "react";

// ** Import navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const DataContext = createContext();

const DataLoteYManejo = [
  {
    id: 2,
    name: "Lote 1",
    field: "San Antonio",
    amountOfHectarea: null,
    location: "Villa María",
    province: "Córdoba",
    crop: "Maíz",
    date: "2023-09-11",
    cropUp: true,
  },
  {
    id: 3,
    name: "Lote 2",
    field: "Las Catitas",
    amountOfHectarea: null,
    location: "Pasco",
    province: "Córdoba",
  },
];

export default function LoteProvider({ children }) {
  // ** import navigate from "react-router-dom"
  const navigate = useNavigate();

  // ** State Cultivo
  // const [dateCultivo, setDateCultivo] = useState("");
  // const [cropCultivo, setCropCultivo] = useState("Maíz grano");

  // ** State Otro Arrancador
  const [contenidoNitrogeno, setContenidoNitrogeno] = useState("");
  const [contenidoFosforo, setContenidoFosforo] = useState("");
  const [contenidoPotasio, setContenidoPotasio] = useState("");
  const [contenidoAzufre, setContenidoAzufre] = useState("");

  const [eficienciasNitrogeno, setEficienciasNitrogeno] = useState("");
  const [eficienciasFosforo, setEficienciasFosforo] = useState("");
  const [eficienciasPotasio, setEficienciasPotasio] = useState("");
  const [eficienciasAzufre, setEficienciasAzufre] = useState("");

  // ** State setting acount profile
  const [nombreUsuario, setNombreUsuario] = useState("Martín-Nutrixya");

  // ** State modal Account
  const [centeredModal, setCenteredModal] = useState(false);
  const [backModal, setBackModal] = useState(false);
  const [backModalHome, setBackModalbackModalHome] = useState(false);
  const [deleteLoteModal, setDeleteLoteModal] = useState(false);
  const [idLoteDelete, setIdLoteDelete] = useState(null);

  // ** Initial state
  const [data, setData] = useState(DataLoteYManejo);

  const [dataForm, setDataForm] = useState({
    id: null,
    name: "",
    field: "",
    amountOfHectarea: "",
    location: "",
    province: "",
    // ** wizard suelo
    compactionLevel: "",
    limitationForWaterlogging: "",
    rootableProfunity: "",

    // Estrato 1
    depth: "",
    sso4: "",
    phosphate: "",
    cic: "17",
    nai: 0.3,
    soilDensity: "",
    totalN: "",
    ce: 0.5,
    cai: 12,
    ki: 2,
    nno3: "",
    fmin: 0.11,
    ph: "",
    mgi: 1.2,

    // Estrato 2
    depthStratumTwo: "",
    sso4StratumTwo: "",
    pStratumTwo: "",
    cicStratumTwo: 17,
    naiStratumTwo: 0.3,
    soilDensityStratumTwo: "",
    totalNStratumTwo: "",
    ceStratumTwo: 0.5,
    caiStratumTwo: 12,
    kiStratumTwo: 2,
    nno3StratumTwo: "",
    fminStratumTwo: 0.11,
    phStratumTwo: "",
    mgiStratumTwo: 1.2,
    // Estrato 3
    depthStratumThree: "",
    sso4StratumThree: "",
    pStratumThree: "",
    cicStratumThree: 17,
    naiStratumThree: 0.3,
    soilDensityStratumThree: "",
    totalNStratumThree: "",
    ceStratumThree: 0.5,
    caiStratumThree: 12,
    kiStratumThree: 2,
    nno3StratumThree: "",
    fminStratumThree: 0.11,
    phStratumThree: "",
    mgiStratumThree: 1.2,
    // ** wizard cultivo
    crop: "",
    targetPerformance: "",
    date: "",
    productPrice: "",
    predecessorCrop: "",
    yieldOfThePredecessorCrop: "",
    timeElapsedBetweenHarvestAndSowing: "",
    performDirectSowing: true,
    // ** wizard fertilizantes
    starterOrOrganicFertilizer: "",
    quantity: "",
    starter: "",
    organicFertilizer: "",
    price: "",
    // ** Otro arrancador
    nitrogenContent: "",
    phosphorusContent: "",
    potassiumContent: "",
    sulphurContent: "",
    nitrogenEfficiencies: "",
    phosphorusEfficiencies: "",
    potassiumEfficiencies: "",
    sulfurEfficiencies: "",
    // ** fin del wizard
    costOfFertilizerApplicationAndSoilAnalysis: "",
  });

  const [dataToEdit, setDataToEdit] = useState(null);
  const [addRecomendacion, setAddRecomendacion] = useState(null);
  const [verRecomendacion, setVerRecomendacion] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setDataForm({
      ...dataForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      dataForm.name !== "" &&
      dataForm.field !== "" &&
      dataForm.amountOfHectarea !== "" &&
      dataForm.location !== "" &&
      dataForm.province !== ""
    ) {
      if (dataForm.id === null) {
        createData(dataForm);

        setDataForm({
          id: null,
          name: "",
          field: "",
          amountOfHectarea: "",
          location: "",
          province: "",
        });
      } else {
        updateData(dataForm);

        setDataForm({
          id: null,
          name: "",
          field: "",
          amountOfHectarea: "",
          location: "",
          province: "",
        });
      }
    } else {
      setCenteredModal(!centeredModal);
    }
  };

  const handleWizard = (e) => {
    e.preventDefault();

    addRecomendacionLote(dataForm);

    navigate("/");
  };

  const createData = (dato) => {
    dato.id = +new Date();
    setData([...data, dato]);

    navigate("/");
  };

  const updateData = (dato) => {
    let newDataLote = data.map((el) => (el.id === dato.id ? dato : el));
    setData(newDataLote);
    navigate("/");
  };

  const deleteData = (id) => {
    // alert("ELIMINAR LOTE con ID: " + id);
    setData(data.filter((dato) => dato.id !== id));
    setDeleteLoteModal(false);
  };

  const addRecomendacionLote = (dato) => {
    let newDataLote = data.map((el) => (el.id === dato.id ? dato : el));
    setData(newDataLote);
  };

  useEffect(() => {
    if (dataToEdit) {
      setDataForm(dataToEdit);
    } else {
      setDataForm({
        id: null,
        name: "",
        field: "",
        amountOfHectarea: "",
        location: "",
        province: "",
      });
    }
  }, [dataToEdit]);

  useEffect(() => {
    if (addRecomendacion) {
      setDataForm(addRecomendacion);
    } else {
      setDataForm({
        id: null,
        name: "",
        field: "",
        amountOfHectarea: "",
        location: "",
        province: "",
        // ** wizard suelo
        compactionLevel: "",
        limitationForWaterlogging: "",
        rootableProfunity: "",
        // Estrato 1
        depth: "",
        sso4: "",
        phosphate: "",
        cic: "",
        nai: "",
        soilDensity: "",
        totalN: "",
        ce: "",
        cai: "",
        ki: "",
        nno3: "",
        fmin: "",
        ph: "",
        mgi: "",
        // Estrato 2
        depthStratumTwo: "",
        sso4StratumTwo: "",
        pStratumTwo: "",
        cicStratumTwo: "",
        naiStratumTwo: "",
        soilDensityStratumTwo: "",
        totalNStratumTwo: "",
        ceStratumTwo: "",
        caiStratumTwo: "",
        kiStratumTwo: "",
        nno3StratumTwo: "",
        fminStratumTwo: "",
        phStratumTwo: "",
        mgiStratumTwo: "",
        // Estrato 3
        depthStratumThree: "",
        sso4StratumThree: "",
        pStratumThree: "",
        cicStratumThree: "",
        naiStratumThree: "",
        soilDensityStratumThree: "",
        totalNStratumThree: "",
        ceStratumThree: "",
        caiStratumThree: "",
        kiStratumThree: "",
        nno3StratumThree: "",
        fminStratumThree: "",
        phStratumThree: "",
        mgiStratumThree: "",
        // ** wizard cultivo
        crop: "",
        targetPerformance: "",
        date: "",
        productPrice: "",
        predecessorCrop: "",
        yieldOfThePredecessorCrop: "",
        timeElapsedBetweenHarvestAndSowing: "",
        performDirectSowing: true,
        // ** wizard fertilizantes
        starterOrOrganicFertilizer: "Ninguno",
        quantity: "",
        starter: "",
        organicFertilizer: "",
        price: "",
        // ** Otro arrancador
        nitrogenContent: "",
        phosphorusContent: "",
        potassiumContent: "",
        sulphurContent: "",
        nitrogenEfficiencies: "",
        phosphorusEfficiencies: "",
        potassiumEfficiencies: "",
        sulfurEfficiencies: "",
        // ** fin del wizard
        costOfFertilizerApplicationAndSoilAnalysis: "",
      });
    }
  }, [addRecomendacion]);

  return (
    <>
      <DataContext.Provider
        value={{
          // State global
          dataForm,
          handleChange,
          handleSubmit,
          deleteData,
          setData,
          data,
          setDataToEdit,
          dataToEdit,
          setAddRecomendacion,
          verRecomendacion,
          setVerRecomendacion,
          backModal,
          setBackModal,
          backModalHome,
          setBackModalbackModalHome,
          handleWizard,
          idLoteDelete,
          setIdLoteDelete,
          deleteLoteModal,
          setDeleteLoteModal,
          // State cultivo
          // setDateCultivo,
          // setCropCultivo,
          // State arrancador
          contenidoNitrogeno,
          setContenidoNitrogeno,
          contenidoFosforo,
          setContenidoFosforo,
          contenidoPotasio,
          setContenidoPotasio,
          contenidoAzufre,
          setContenidoAzufre,
          eficienciasNitrogeno,
          setEficienciasNitrogeno,
          eficienciasFosforo,
          setEficienciasFosforo,
          eficienciasPotasio,
          setEficienciasPotasio,
          eficienciasAzufre,
          setEficienciasAzufre,
          // ** State setting acount profile

          nombreUsuario,
          setNombreUsuario,
        }}
      >
        {children}
      </DataContext.Provider>

      {centeredModal ? (
        <Modal
          isOpen={centeredModal}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>Campos obligatorios</ModalHeader>
          <ModalBody>
            <h4>Es necesario completar todos los campos para Guardar</h4>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}

      {backModal ? (
        <Modal
          isOpen={backModal}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¡Atención!</ModalHeader>
          <ModalBody>
            <h4>No se guardarán los cambios</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setBackModal(!backModal)}>
              Cancelar
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setBackModal(!backModal);
                setDataForm({
                  id: null,
                  name: "",
                  field: "",
                  amountOfHectarea: "",
                  location: "",
                  province: "",
                  // ** wizard suelo
                  compactionLevel: "",
                  limitationForWaterlogging: "",
                  rootableProfunity: "",
                  // Estrato 1
                  depth: "",
                  sso4: "",
                  p: "",
                  cic: "",
                  nai: "",
                  soilDensity: "",
                  totalN: "",
                  ce: "",
                  cai: "",
                  ki: "",
                  nno3: "",
                  fmin: "",
                  ph: "",
                  mgi: "",
                  // Estrato 2
                  depthStratumTwo: "",
                  sso4StratumTwo: "",
                  pStratumTwo: "",
                  cicStratumTwo: "",
                  naiStratumTwo: "",
                  soilDensityStratumTwo: "",
                  totalNStratumTwo: "",
                  ceStratumTwo: "",
                  caiStratumTwo: "",
                  kiStratumTwo: "",
                  nno3StratumTwo: "",
                  fminStratumTwo: "",
                  phStratumTwo: "",
                  mgiStratumTwo: "",
                  // Estrato 3
                  depthStratumThree: "",
                  sso4StratumThree: "",
                  pStratumThree: "",
                  cicStratumThree: "",
                  naiStratumThree: "",
                  soilDensityStratumThree: "",
                  totalNStratumThree: "",
                  ceStratumThree: "",
                  caiStratumThree: "",
                  kiStratumThree: "",
                  nno3StratumThree: "",
                  fminStratumThree: "",
                  phStratumThree: "",
                  mgiStratumThree: "",
                  // ** wizard cultivo
                  crop: "",
                  targetPerformance: "",
                  date: "",
                  productPrice: "",
                  predecessorCrop: "",
                  yieldOfThePredecessorCrop: "",
                  timeElapsedBetweenHarvestAndSowing: "",
                  performDirectSowing: true,
                  // ** wizard fertilizantes
                  starterOrOrganicFertilizer: "Ninguno",
                  quantity: "",
                  starter: "",
                  organicFertilizer: "",
                  price: "",
                  // ** Otro arrancador
                  nitrogenContent: "",
                  phosphorusContent: "",
                  potassiumContent: "",
                  sulphurContent: "",
                  nitrogenEfficiencies: "",
                  phosphorusEfficiencies: "",
                  potassiumEfficiencies: "",
                  sulfurEfficiencies: "",
                  // ** fin del wizard
                  costOfFertilizerApplicationAndSoilAnalysis: "",
                });
                navigate("/");
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}

      {deleteLoteModal ? (
        <Modal
          isOpen={deleteLoteModal}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>!ATENCIÓN¡</ModalHeader>
          <ModalBody>
            <h4>¿Esta seguro que desea eliminar el lote?</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => setDeleteLoteModal(false)}>
              Cancelar
            </Button>
            <Button color="primary" onClick={() => deleteData(idLoteDelete)}>
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  );
}
