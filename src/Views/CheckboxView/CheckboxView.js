import React, { Component } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
class CheckboxView extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <Checkbox label="Checkbox"/>
         );
    }
}
 
export default CheckboxView;