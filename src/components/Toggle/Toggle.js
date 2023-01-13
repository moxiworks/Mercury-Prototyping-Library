import React, { Component } from 'react';
import './Toggle.scss'
class Toggle extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        toggle: false
     }

     setToggle=()=>{
        this.setState(({ toggle }) => ({ toggle: !toggle }));
        if(this.props.action){this.props.action()}
    }

    render() { 
        return ( 
            <div className='toggleWrap' onClick={()=>this.setToggle()}>
                <div className={this.state.toggle ? 'toggle toggleOn' : 'toggle'} >
                    <div className='toggleButton'></div>
                </div>
                <label>{this.props.text}</label>
            </div>
         );
    }
}
 
export default Toggle;