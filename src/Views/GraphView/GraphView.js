import React, { Component } from 'react';
import BarGraph from '../../components/BarGraph/BarGraph';
import LineGraph from '../../components/LineGraph/LineGraph'
import Label from '../../components/Label/Label'
class GraphView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return (
        <div>
            <Label text="Hover bars for info"/>
            <BarGraph/> 
            {/* <br></br>
            <LineGraph/> */}
        </div>
         
        );
    }
}
 
export default GraphView;