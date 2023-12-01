import React, { Component } from 'react';
import PieChart from '../../components/PieChart/PieChart';
export default class PieChartView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
  
        }
        
    }
    componentDidMount() {
   
    }

    render() {
        return (
            <div >
              <PieChart/>
            </div>
        )
    }
}