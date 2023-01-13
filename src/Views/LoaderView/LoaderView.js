import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
export default class LoaderView extends Component {

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
            <Loader/>
        )
    }
}