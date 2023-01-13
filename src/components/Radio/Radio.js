import React, { Component } from 'react';
import Label from '../Label/Label';
import './Radio.scss'
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
            <div className='radioListWrap'>
                <div className='radioWrap'><input type="radio" name="radio" id="option1" defaultChecked={true}/><label htmlFor="option1">Option One</label></div>
                <div className='radioWrap'><input type="radio" name="radio" id="option2"/><label htmlFor="option2">Option Two</label></div>
            </div>
        );
    }
}
 
export default Checkbox;