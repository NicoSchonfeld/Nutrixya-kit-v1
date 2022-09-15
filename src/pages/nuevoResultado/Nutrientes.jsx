import React from "react";
import { CardText, Col, List, Row } from "reactstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Nutrientes = () => {
  const colorChart = {
    color1: "#ff6961",
    color2: "#77dd77",
    color3: "#fdfd96",
    color4: "#84b6f4",
    color5: "#f15fff",
    color6: "#a68069",
    colorOpacity: {
      color1: "#ff696150",
      color2: "#77dd7750",
      color3: "#fdfd9650",
      color4: "#84b6f450",
      color5: "#f15fff50",
      color6: "#a6806950",
    },
  };

  const dataValueNumberNutrientes = {
    dataTitle: 6240,
    data1: 9000,
    data2: 6940,
    data3: 6240,
    data4: 9000,
    data5: 9000,
  };

  const data = {
    // labels: [
    //   "Rendimiento objetivo",
    //   "Rendimiento sin aplicar N",
    //   "Rendimiento sin aplicar P",
    //   "Rendimiento sin aplicar K",
    //   "Rendimiento sin aplicar S",
    // ],
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "Rendimientos",
        backgroundColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
        ],
        brderColor: "black",
        borderWidth: 1,
        // barPercentage: 0.5,
        // barThickness: 6,
        maxBarThickness: 80,
        // minBarLength: 2,
        hoverBackgroundColor: [
          colorChart.colorOpacity.color1,
          colorChart.colorOpacity.color2,
          colorChart.colorOpacity.color3,
          colorChart.colorOpacity.color4,
          colorChart.colorOpacity.color5,
          colorChart.colorOpacity.color6,
        ],
        hoverBorderColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
        ],
        data: [
          dataValueNumberNutrientes.data1,
          dataValueNumberNutrientes.data2,
          dataValueNumberNutrientes.data3,
          dataValueNumberNutrientes.data4,
          dataValueNumberNutrientes.data5,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1 className="mb-5">Rendimiento vs Nutrientes</h1>

      <CardText className="fs-3 mb-2">
        Rendimiento sin fertilizar:{" "}
        <span className="fw-bolder">
          {dataValueNumberNutrientes.dataTitle}kg/ha
        </span>
      </CardText>
      <Row>
        <Col sm="12" md="6" className="p-1">
          <Bar data={data} options={options} />
        </Col>

        <Col sm="12" md="6" className="py-5">
          <List type="unstyled">
            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color1}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento objetivo:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data1} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color2}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar N:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data2} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color3}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar P:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data3} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color4}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar K:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data4} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color5}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar S:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data5} kg/ha
                </span>
              </CardText>
            </li>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default Nutrientes;
