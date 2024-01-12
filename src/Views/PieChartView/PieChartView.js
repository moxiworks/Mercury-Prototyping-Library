import React, { Component } from 'react';
import './PieChartView.scss'
import PieChart from '../../components/PieChart/PieChart';
import Label from '../../components/Label/Label'
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
            <div className='ovalInfo'>
                <div className=''>
                <h1>Contact Uploads</h1>
                <small className='h3'>January 2023 - December 2023</small>
                </div>
              <PieChart/>
            </div>
        )
    }
}