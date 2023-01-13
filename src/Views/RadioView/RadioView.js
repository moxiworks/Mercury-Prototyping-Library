import React, { Component } from 'react';
import Radio from '../../components/Radio/Radio';

export default class RadioView extends Component {

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
            <Radio error={this.state.error} label="Upload File" placeholder="No file chosen"/>
            </div>
        )
    }
}