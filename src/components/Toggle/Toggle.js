import React, { Component } from 'react';
import './Toggle.scss'
class Toggle extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        toggle: this.props.usePro ? this.props.toggle : false
     }

     setToggle=()=>{
        // this.setState(({ toggle }) => ({ toggle: !toggle }));
        if(this.props.action){
            
            if(this.props.usePro){
                this.props.action()
            }else{
                this.props.action()
                this.setState(({ toggle }) => ({ toggle: !toggle }));
            }
        }else{
            this.setState(({ toggle }) => ({ toggle: !toggle }));
        }
    }

    render() { 
        return ( 
            <div className='toggleWrap' onClick={()=>this.setToggle()}>
                {this.props.usePro ? 
                <div className={this.props.toggle ? 'toggle toggleOn' : 'toggle'} >
                    <div className='toggleButton'></div>
                </div>
                :
                <div className={this.state.toggle ? 'toggle toggleOn' : 'toggle'} >
                    <div className='toggleButton'></div>
                </div>
                }
                <label>{this.props.text}</label>
            </div>
         );
    }
}
 
export default Toggle;