import React, { Component } from 'react';
import DateInput from '../../components/DateInput/DateInput';

export default class DateView extends Component {

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
                <DateInput label="Date"/>
            </div>
        )
    }
}