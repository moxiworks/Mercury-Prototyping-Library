import React, { Component } from 'react';
import Button from '../Button/Button';
import './SaveButton.scss'
class SaveButton extends Component {
    state = { 
        text:"Save",
        type:"",
        disabled:false,
        moveState:''
     } 

     doSave=()=>{
        this.setState({
            text: 'Saving...',
            type:'saving',
            disabled:true
        })
        setTimeout(() => {
            this.setState({
                moveState:'moveUpOne'
            })
            setTimeout(() => {
                this.setState({
                    moveState:'',
                    text:"Save",
                    type:"",
                    disabled:false
                })
            }, 3000);
        }, 2000);
     }
    render() { 
        return (

            <div className='saveButtonMain'>
             
             <div className={this.state.moveState + ' saveButtonWrapper'}>
                <Button text={this.state.text} type={this.state.type} onClick={()=>this.doSave()} />
                <Button text="Saved!" type="saved" onClick={()=>this.doSave()} disabled="true"/>
             </div>
            </div>
        );
    }
}
 
export default SaveButton;