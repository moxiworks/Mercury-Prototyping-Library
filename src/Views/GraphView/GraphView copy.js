import React, { Component } from 'react';
import BarGraph from '../../components/BarGraph/BarGraph';
import LineGraph from '../../components/LineGraph/LineGraph'
import Label from '../../components/Label/Label'
import './GraphView.scss'
import { ReactComponent as Oval } from '../../images/oval.svg'
import { ReactComponent as OvalGraph } from '../../images/ovalGraph.svg'
class GraphView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        ovalAmount:'480',
        count:0
      }
      componentDidMount(){

        setTimeout(() => {
            this.setState({
                ovalAmount:'150'
            })
        }, 200);
        
        let inter = setInterval(() => {
            if(this.state.count<75){
                this.setState({
                    count: this.state.count+1
                })
            }else{
                clearInterval(inter)
            }
        }, 10);

      }
  
    render() { 
        return (
        <div className='mainView'>
            <Label text="Hover bars for info"/>
            <BarGraph/> 
        </div>
         
        );
    }
}
 
export default GraphView;