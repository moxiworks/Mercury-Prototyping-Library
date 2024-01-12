import React, { Component } from 'react';
import UploadInput from '../../components/UploadInput/UploadInput';
import Toggle from '../../components/Toggle/Toggle';

export default class UploadInputView extends Component {

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
            <UploadInput error={this.state.error} label="Upload File" placeholder="No file chosen"/>
            {/* <Toggle text="Toggle error state" action={()=>this.setError()}/> */}
            </div>
        )
    }
}