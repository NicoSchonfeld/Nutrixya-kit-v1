import React from "react";
import { Col, Row, CardText, List } from "reactstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import ApexCharts from "../../components/Graficos/charts/apex";

const BalanceDeN = () => {
  const colorChart = {
    color1: "#ff6961",
    color2: "#77dd77",
    color3: "#fdfd96",
    color4: "#84b6f4",
    color5: "#f15fff",
    color6: "#a68069",
  };

  const dataValueNumber = {
    data1: 62,
    data2: 9,
    data3: 30,
    data4: 118,
    data5: 0,
    data6: 0,
    dataTwo: {
      data1: 219,
      data2: 257,
      data3: -38,
      data4: 0,
    },
  };
  const data = {
    labels: [
      "A la siembra",
      "Arrancador o abono orgánico",
      "Rastrojo y precipitación",
      "Mineralización",
      "Fijación simbiótica",
      "Podría haber fijado",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          dataValueNumber.data1,
          dataValueNumber.data2,
          dataValueNumber.data3,
          dataValueNumber.data4,
          dataValueNumber.data5,
          dataValueNumber.data6,
        ],
        backgroundColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
          colorChart.color6,
        ],
        borderColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
          colorChart.color5,
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1>Balance De N</h1>{" "}
      <div className="py-2">
        <Row>
          <Col sm="12" md="4" className="mb-4">
            <Doughnut data={data} options={options} />
          </Col>

          <Col
            sm="12"
            md="6"
            className="d-flex align-items-center justify-content-center"
          >
            <List type="unstyled">
              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color1}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4">
                  A la siembra:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data1} kgN/ha
                  </span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color2}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4">
                  Arrancador o abono orgánico:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data2} kgN/ha
                  </span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color3}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4">
                  Rastrojo y precipitación:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data3} kgN/ha
                  </span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color4}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4">
                  Mineralización:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data4} kgN/ha
                  </span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color5}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4">
                  Fijación simbiótica:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data5} kgN/ha
                  </span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color6}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4">
                  Podría haber fijado:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data6} kgN/ha
                  </span>
                </CardText>
              </li>
            </List>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm="12" md="12" className="p-3">
            <List type="unstyled" className="d-flex flex-column gap-3">
              <li>
                <CardText className="fs-3">
                  Oferta:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data1}kgN/ha
                  </span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-3">
                  Demanda:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data2}kgN/ha
                  </span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-3">
                  Déficit:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data3}kgN/ha
                  </span>{" "}
                  Comienza el día 38.
                </CardText>
              </li>

              <li>
                <CardText className="fs-3">
                  Se removilizó en el cultivo:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data4}kgN/ha
                  </span>
                </CardText>
              </li>
            </List>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BalanceDeN;
