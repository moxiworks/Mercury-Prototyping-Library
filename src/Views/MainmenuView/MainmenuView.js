import React, { Component } from 'react';
import Submenu from '../../components/Mainmenu/Mainmenu';
import Label from '../../components/Label/Label'

export default class MainmenuView extends Component {

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
                <Label text='Press Enter in the search bar to view search animation'/>
                <br/>
            <Submenu/>
            </div>
        )
    }
}