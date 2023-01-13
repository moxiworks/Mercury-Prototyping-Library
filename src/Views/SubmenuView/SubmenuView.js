import React, { Component } from 'react';
import Submenu from '../../components/Submenu/Submenu';

export default class SubmenuView extends Component {

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
            <Submenu/>
            </div>
        )
    }
}