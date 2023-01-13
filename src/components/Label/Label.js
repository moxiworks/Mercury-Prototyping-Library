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
                <span>{this.props.text}</span>
                <span className='subText'>{this.props.subText}</span>
            </div>
        )
    }
}