import React, { Component,createRef } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./GraphLine.scss";



const options = {
  plugins: {
    backgroundBar:false,
    legend: {
        display:false
    },
    tooltip: {
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

class GraphLine extends Component {
    constructor(props,context){
        super(props, context);
  this.state = {
    showGraph:false,
    tempData:[],
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
      ],

      datasets: [
        {
          data: [
            135000, 72000, 100000, 150000, 145000, 6500, 75000, 100000, 250000,
            49000, 350000, 150000,
          ],
          pointBackgroundColor: ["#76C8FE"],
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: "#FFFFFF",
          pointHoverRadius: 8,
          backgroundColor:'#0073E6',
          
          hoverBackgroundColor: "#9C5AF2",
          borderColor: '#0073E6',
          borderWidth: 2,
 
          tension: 0,
          animation: {
            duration: 400,
          },
          label:'2023',
        },
        {
            data:[
                300000, 150000, 185000, 49000, 250000, 100000, 185000, 6500,
                145000, 84000, 125000, 72000,
              ],
            pointBackgroundColor: ["#76C8FE"],
            pointRadius: 4,
            pointBorderWidth: 3,
            pointBorderColor: "#FFFFFF",
            pointHoverRadius: 8,
            hoverBackgroundColor: "#9C5AF2",
            borderColor: '#56C6FE',
            borderWidth: 1,
            borderDash:[2],
            tension: 0,
            animation: {
              duration: 400,
            },
            label:'2022',
            backgroundColor:'#56C6FE',
          },
      ]

    },
  };
   this.chartRef = React.createRef();
}

  toggleVisibilty=(index)=>{
    this.chartRef.current.setDatasetVisibility(index, !this.chartRef.current.isDatasetVisible(index));
    this.chartRef.current.update();
  }

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
       

        <div className="graphAreaLine">
            {this.state.showGraph &&
            <div>
                 <div className="titleArea">
                    <h1>Closed Transactions</h1>
                    <small className="h3">January 2023 - December 2023</small>
                </div>
            <Line options={options} data={this.state.data} ref={this.chartRef}/>
            <div id="legend-container"></div>
            <div className="lineLegend">
                {
                     this.state.data.datasets.map((item, index) => {
                        return (
                            <div className="legendLabel" key={index} onClick={()=>{this.toggleVisibilty(index)}}>
                            <div className="icon" style={{backgroundColor:item.backgroundColor}}></div>
                                {item.label}
                            </div>
                        )
                    })
                }
            </div>

            </div>
            }
        </div>
      </div>
    );
  }
}

export default GraphLine;
{
}
