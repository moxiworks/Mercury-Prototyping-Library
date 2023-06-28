import React, { Component } from 'react';
import './Checkbox.scss'

export default class Checkbox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // checked: this.props.checked
        }
        
    }



    render() { 
        return (  
            <div className='checkboxWrap' onClick={()=>this.props.onClick()}>
                <div className={this.props.inbetween ? "checkboxMain checkBeteen" : this.props.checked ? 'checkboxMain checkboxChecked' : 'checkboxMain'}></div>
                {this.props.label ?
                <label htmlFor="option2">{this.props.label}</label>
                : null}
            </div>
        );
    }
}
 