import React, { Component } from 'react';
import TextField from '../../components/TextField/TextField';
import Toggle from '../../components/Toggle/Toggle';

export default class TextFieldView extends Component {

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
            <TextField error={this.state.error}  label="Text Area" placeholder="Placeholder text goes here"/>
            <Toggle text="Toggle error state" action={()=>this.setError()}/>
            </div>
        )
    }
}