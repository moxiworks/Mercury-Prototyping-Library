import React, { Component } from 'react';
import Select from '../../components/Select/Select';
export default class SelectView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            error: false
        }
        
    }
    componentDidMount() {
   
    }


    render() {
        return (
            <div>
                <Select label="Select" text="Choose Item"/>
            </div>
        )
    }
}