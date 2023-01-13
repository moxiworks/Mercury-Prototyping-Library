import React, { Component } from 'react';
import Label from '../Label/Label';
import './Range.scss'
class Range extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    state = { 
        range: 50
     }

     componentDidMount(){
        this.inputRef.current.style.transform="scaleX(" + this.state.range + "%)"
     }

    changeRange = (e)=>{
        this.setState({
            range: e.target.value
        })
        let value = e.target.value
        this.inputRef.current.style.transform="scaleX(" + value + "%)"
    }
    render() { 
        return (  
            <div className='wrap'>
            <Label text="Label One"/>
            <div className='rangeWrapper'>
                <div className='rangeInput'>
                <div className='trackBack' ref={this.inputRef}></div>
                <input type="range" min="0" max="100" onChange={(e)=>this.changeRange(e)} value={this.state.range} />
                </div>
                <div className='rangeData'>{this.state.range}%</div>
            </div>
            </div>
        );
    }
}
 
export default Range;