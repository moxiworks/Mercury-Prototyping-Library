import React, { Component } from 'react';
import Checkbox from '../../components/Checkbox/Checkbox';
class CheckboxView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        checked:false
    }

    checkState=()=>{
        console.log("cheked");
        this.setState(({ checked }) => ({ checked: !checked }));
    }
    render() { 
        return ( 
            <Checkbox label="Checkbox" checked={this.state.checked} onClick={()=>this.checkState()}/>
         );
    }
}
 
export default CheckboxView;