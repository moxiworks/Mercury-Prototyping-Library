import React, { Component } from 'react';
import Label from '../../components/Label/Label'
import './OvalGraph.scss'
import { ReactComponent as OvalGraphComp} from '../../images/ovalGraph.svg'

class OvalGraph extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        ovalAmount:'480',
        ovalAmount2:'480',
        count:0,
        count2: 0
      }
      componentDidMount(){

        setTimeout(() => {
            this.setState({
                ovalAmount:'150',
                ovalAmount2: '266'
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
        let inter2 = setInterval(() => {
            if(this.state.count2<50){
                this.setState({
                    count2: this.state.count2+1
                })
            }else{
                clearInterval(inter2)
            }
        }, 10);

      }
  
    render() { 
        return (
        <div className='mainView'>
            <h1>Goal Completion</h1>
            <small className='h3'>January 2022 - December 2022</small>
            <div className='ovalSideBySide'>

            <div className='ovalGraph'>
                <OvalGraphComp strokeDashoffset={this.state.ovalAmount} color="#9C5AF2"/>
                <div className='ovalAmount'>{this.state.count}<sup>%</sup></div>
                <div className='desciption'><strong>$150,000</strong> of <strong>$200,000</strong> GCI goal</div>
                <div className='lineIndicator'>
                    <div className='inner'>
                        <div className='hand'></div>
                    </div>
                </div>
            </div>

            <div className='ovalGraph'>
                <OvalGraphComp strokeDashoffset={this.state.ovalAmount2} color="#56C6FE"/>
                <div className='ovalAmount'>{this.state.count2}<sup>%</sup></div>
                <div className='desciption'>Average Close Rate</div>
                <div className='lineIndicator2'>
                    <div className='inner'>
                        <div className='hand'></div>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
         
        );
    }
}
 
export default OvalGraph;