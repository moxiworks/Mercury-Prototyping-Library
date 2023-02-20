import React, { Component } from 'react';
import './ColorSwatch.scss'
class ColorSwatch extends Component {
    state = { 

     } 

     copyColor= async ()=>{
        await navigator.clipboard.writeText(this.props.color);
        this.props.callback(this.props.color)
     }

    render() { 
        return (
            <div className='colorSwatch' onClick={()=>this.copyColor()}>
                <div className='color' style={{backgroundColor:this.props.color, color:this.props.secondaryColor, borderColor:this.props.border}}>Aa</div>
                <div className='colorName'>{this.props.color}</div>
            </div>
        );
    }
}
 
export default ColorSwatch;