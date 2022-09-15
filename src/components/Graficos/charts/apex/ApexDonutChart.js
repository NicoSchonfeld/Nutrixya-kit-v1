// ** Third Party Components
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

const ApexRadiarChart = () => {
  const donutColors = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
    series6: "#FFA1A1",
  };

  // ** Chart Options
  const options = {
    legend: {
      show: true,
      position: "bottom",
    },
    labels: [
      "A la siembra",
      "Arrancador o abono orgánico",
      "Rastrojo y precipitación",
      "Mineralización",
      "Fijación simbiótica",
      "Podría haber fijado",
    ],
    colors: [
      donutColors.series1,
      donutColors.series2,
      donutColors.series3,
      donutColors.series4,
      donutColors.series5,
      donutColors.series6,
    ],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: "2rem",
              fontFamily: "Montserrat",
            },
            value: {
              fontSize: "1rem",
              fontFamily: "Montserrat",
              formatter(val) {
                return `${parseInt(val)}%`;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              label: "Oferta:",
              formatter() {
                return "382 kg N/ha";
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 2000,
        options: {
          chart: {
            height: 600,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 5760,
        options: {
          chart: {
            height: 3200,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1.5rem",
                  },
                  value: {
                    fontSize: "1rem",
                  },
                  total: {
                    fontSize: "1.5rem",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  // ** Chart Series
  const series = [20, 0, 10, 30, 40, 4];

  return (
    <Card>
      {/* <CardHeader>
        <div>
          <CardTitle className="mb-75" tag="h4">
            Expense Ratio 111
          </CardTitle>
          <CardSubtitle className="text-muted">
            Spending on various categories
          </CardSubtitle>
        </div>
      </CardHeader> */}
      <CardBody>
        <Chart options={options} series={series} type="donut" height={350} />
      </CardBody>
    </Card>
  );
};

export default ApexRadiarChart;
