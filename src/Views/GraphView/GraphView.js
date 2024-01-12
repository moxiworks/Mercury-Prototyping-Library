import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./GraphView.scss";


const backgroundBar = {
    id: "backgroundBar",
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const {data,ctx,chartArea: { top, bottom, left, right, width, height },scales: { x, y },} = chart;
        ctx.save();
        const segment = width / data.labels.length;
        const barWidth = segment * data.datasets[0].barPercentage * data.datasets[0].categoryPercentage;
        ctx.fillStyle = pluginOptions.barColor;
        for (let i = 0; i < data.labels.length; i++) {
            ctx.fillRect(x.getPixelForValue(i) - barWidth / 2, top, barWidth, height);
        }
    },
    defaults: {
        barColor: '#F3F5F6'
    }
};


Chart.register(backgroundBar);

const options = {
  plugins: {
    backgroundBar: {
      barColor: "#F3F5F6",
    },
    legend: {
      display: false,
    },
    tooltip: {
      yAlign: "bottom",
      xAlign: "right",
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
      backgroundColor: "#004C97",
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#597897",
        font: {
          size: 12,
          weight: "bold",
          family: "Roboto",
        },
      },
    },
    y: {
      grid: {
        color: "#F3F5F6",
      },
      ticks: {
        color: "#597897",
        font: {
          size: 12,
          weight: "bold",
          family: "Roboto",
        },
        callback: function (value, index, ticks) {
          return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
      },
    },
  },
};

class GraphView extends Component {
  state = {
    showGraph:false,
    data: {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
        "JAN",
      ],

      datasets: [
        {
          data: [
            135000, 72000, 323000, 84000, 145000, 6500, 75000, 100000, 250000,
            49000, 369000, 150000, 300000,
          ],
          backgroundColor: ["#76C8FE"],
          hoverBackgroundColor: "#9C5AF2",
          borderRadius: 3,
          barPercentage: 0.8,
          categoryPercentage: 0.8,
          animation: {
            duration: 400,
          },
        },
      ]

    },
  };
  componentDidMount(){
    setTimeout(() => {
        this.setState({
            showGraph:true
        })
    }, 100);
  }

  render() {
   
    return (
      <div className="mainView">
       

        <div className="graphArea">
            {this.state.showGraph &&
            <div>
                 <div className="titleArea">
          <h1>Closed Transactions</h1>
          <small className="h3">January 2023 - December 2023</small>
        </div>
            <Bar options={options} data={this.state.data}/>
            </div>
            }
        </div>
      </div>
    );
  }
}

export default GraphView;
{
}
