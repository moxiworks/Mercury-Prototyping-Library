import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Toggle from '../../components/Toggle/Toggle';

export default class InputView extends Component {

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
            <Input label="First Name" placeholder='Text goes here'/>
            <Input error={this.state.error} label="Last Name" placeholder='Text goes here' info="Google or Microsoft only"/>
            <Input  label="Email" placeholder='Text goes here' info="Google or Microsoft only"/>
            <Input  label="Password" type="password" placeholder='Text goes here'/>
            <Toggle text="Toggle error state" action={()=>this.setError()}/>
            </div>
        )
    }
}