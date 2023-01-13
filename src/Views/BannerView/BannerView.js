import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';


export default class BannerView extends Component {

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
            <Banner/>
            </div>
        )
    }
}