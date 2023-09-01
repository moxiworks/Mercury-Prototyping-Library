import React, { Component } from 'react';
import InputCC from '../../components/InputCC/InputCC';
import Label from '../../components/Label/Label';
export default class InputViewCC extends Component {

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
                <Label text="This must always be on its own line due to its extra height" />
            <InputCC error={this.state.error} label="Label" placeholder='Text goes here'/>
            </div>
        )
    }
}