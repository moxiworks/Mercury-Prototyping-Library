import React, { Component } from 'react';
import './CloseButton.scss'
import Cross  from '../../images/cross.svg'

class CloseButton extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <div className={this.props.type==='internal' ? 'closeButton closeButtonInternal' : 'closeButton'}  onClick={()=>this.props.onClick()}>
                <img src={Cross} alt="Clear"/>
            </div>
         );
    }
}
 
export default CloseButton;