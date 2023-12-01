import React, { Component } from 'react';
import './PieChart.scss'
let ctx
export default class PieChart extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            results :[
                {source: "CMS", total: 1499, shade: "#56C6FE"},
                {source: "CVS Upload", total: 478, shade: "#9C5AF2"},
                {source: "Manual Upload", total:332, shade: "#FE9900"},
                {source: "Other", total: 195, shade: "#19A388"}
            ]
        }
    }

   
    componentDidMount() {
      this.drawChart()
    }

    drawChart=()=>{
        
        ctx = document.querySelector("canvas").getContext("2d",{willReadFrequently: true });
        let totalNumberOfPeople = this.state.results.reduce((sum, {total}) => sum + total, 0);
        let currentAngle = 0;
    
        for (let moodValue of this.state.results) {
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;
            //drawing an arc and a line to the center to differentiate the slice from the rest
            ctx.beginPath();
            ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            ctx.lineTo(100, 100);
            //filling the slices with the corresponding mood's color
            ctx.fillStyle = moodValue.shade;
            ctx.fill();
    
        }
      
    }
    showColor=(e)=>{


        let imgData = ctx.getImageData(e.pageX, e.pageX, 1, 1);
        console.log(imgData);
        const red = imgData.data[0];
        const green = imgData.data[1];
        const blue = imgData.data[2];
        const alpha = imgData.data[3];
        console.log(red + " " + green + " " + blue + " " + alpha);  
    }

    render() {
        return (
            <div className='mainView'>
                <div className='sideBySide'>
                    <div className="container">
                        {/* <div className='myPie'></div> */}
                        <canvas width="200" height="200" onMouseMove={(e)=>this.showColor(e)}></canvas>
                    </div>
                    <div>
                        {this.state.results.map((item,index)=>{
                            return(
                                <div className='pieKey' key={index} style={{animationDelay:index*100+'ms'}}>
                                    <div style={{backgroundColor:item.shade}} className='keyLed'></div>
                                    {item.source}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}