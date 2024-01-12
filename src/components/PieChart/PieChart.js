import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "./PieChart.scss";


const options = {
  type:'pie',
  plugins: {
    backgroundBar:false,
    legend: {
      display: false,
    },
    tooltip: {
      padding: {
        top: 10,
        left: 20,
        right: 20,
        bottom: 10,
      },
      xAlign: 'left',
      yAlign: 'bottom',
      boxPadding: 10,
      backgroundColor: "#004C97"
    },
  },
  layout: {
    padding: 40,
  },
};


export default class PieChart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {
        labels: ["CMS", "CVS Upload", "Manual Upload", "Other"],
        datasets: [
          {
            hoverOffset: 20,
            data: [1499, 478, 332, 195],
            backgroundColor: ["#56C6FE", "#9C5AF2", "#FE9900", "#19A388"],
            hoverBackgroundColor: ["#56C6FE", "#9C5AF2", "#FE9900", "#19A388"],
            borderWidth: 2,
            borderJoinStyle: 'round',
            borderRadius: 4
          },
        ]
      },
    };
    this.chartRef = React.createRef();
  }

  toggleVisibilty=(index)=>{
    this.chartRef.current.toggleDataVisibility(index)
    this.chartRef.current.update();
  }


  render() {
    return (
      <div className="mainView">
        <div className="sideBySide">
          <div className="container">
            <Pie data={this.state.data} options={options} ref={this.chartRef}/>
          </div>
          <div>
            {this.state.data.labels.map((item, index) => {
              return (
                <div
                  className="pieKey"
                  key={index}
                  style={{ animationDelay: index * 100 + "ms" }}
                  onClick={()=>this.toggleVisibilty(index)}
                >
                  <div
                    style={{ backgroundColor: this.state.data.datasets[0].backgroundColor[index] }}
                    className="keyLed"
                  ></div>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
