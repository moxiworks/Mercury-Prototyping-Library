import React, { Component } from 'react';
import MainPic from '../../images/home-image.png'
class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
                <img src={MainPic}/>
            </div>
        );
    }
}
 
export default HomeView;