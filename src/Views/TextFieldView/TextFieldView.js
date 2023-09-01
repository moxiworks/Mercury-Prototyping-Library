import React, { Component } from 'react';
import TextField from '../../components/TextField/TextField';
import Toggle from '../../components/Toggle/Toggle';

export default class TextFieldView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            error: false,
            resize:true
        }
        
    }
    componentDidMount() {
   
    }
    setError=()=>{
        this.setState(({ resize }) => ({ resize: !resize }));
    }

    render() {
        return (
            <div>
                <Toggle text="Toggle Resize" action={()=>this.setError()}/>
                <TextField resize={this.state.resize}  label="Text Area" placeholder="Placeholder text goes here"/>
            </div>
        )
    }
}