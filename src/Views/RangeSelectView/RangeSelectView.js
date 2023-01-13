import React, { Component } from 'react';
import Range from '../../components/Range/Range';

export default class RangeSelectView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            error: false
        }
        
    }
    componentDidMount() {
   
    }
    setError=()=>{
        this.setState(({ error }) => ({ error: !error }));
    }

    render() {
        return (
            <div>
            <Range/>
            </div>
        )
    }
}