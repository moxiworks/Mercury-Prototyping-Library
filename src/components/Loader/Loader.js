import React, { Component } from 'react';
import './Loader.scss'
import LoaderIcon from '../../images/loader.svg'

class Loader extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    componentDidMount(){
        const newImage = new Image();
        newImage.src = LoaderIcon;
    }

    render() { 
        return ( 
            <div className='loaderWrap'>
                <div className='loaderIcon'>
                    <img src={LoaderIcon} alt="loading"/>
                </div>
                <div className='loaderText'>
                    <div className='loaderTitle'>Hold tight!</div>
                    <div>We should be ready in no time</div>
                </div>
            </div>
         );
    }
}
 
export default Loader;