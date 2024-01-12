import React, { Component } from 'react';
import './Label.scss'
import { Question } from '@phosphor-icons/react';
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
                <label htmlFor={this.props.for}>
                    {this.props.text} 
                       {this.props.info && <Question size={18} color="#455E78" weight="fill" />}
                </label>
            </div>
        )
    }
}