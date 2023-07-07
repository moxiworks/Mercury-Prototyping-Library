import React, { Component } from 'react';
import './Label.scss'
export default class Label extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
  
        }
        
    }
    componentDidMount() {
   
    }

    render() {
        return (
            <div className='label'>
                <label htmlFor={this.props.for}>{this.props.text} 
                    <span className='subText'>{this.props.subText}</span>
                </label>
                
            </div>
        )
    }
}