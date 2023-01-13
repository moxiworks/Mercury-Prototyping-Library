import React, { Component } from 'react';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
export default class ImageUploadView extends Component {

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
            <ImageUpload/>
        )
    }
}