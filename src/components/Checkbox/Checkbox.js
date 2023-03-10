import React, { Component } from 'react';
import './Checkbox.scss'
class Checkbox extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        checked: false
     }

    toggleCheck=()=>{
        this.setState(({ checked }) => ({ checked: !checked }));
    }
    render() { 
        return (  
            <div className='checkboxWrap' onClick={()=>this.toggleCheck()}>
                <div className={this.state.checked ? 'checkboxMain checkboxChecked' : 'checkboxMain'}></div>
                <label htmlFor="option2">Checkbox</label>
            </div>
        );
    }
}
 
export default Checkbox;