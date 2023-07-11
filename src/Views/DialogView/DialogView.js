import React, { Component } from 'react';
import Button from '../../components/Button/Button'
import Dialog from '../../components/Dialogs/Dialogs';
import './DialogView.scss'
class DialogView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        showModal: false,
        modalType:''
     }
     
    openModal=(type)=>{
        this.setState({
            showModal: true,
            modalType: type
        })
    }
    closeModal=()=>{
        this.setState({
            showModal: false
        })
    }
    render() { 
        return (
        <div className='horizontalLayout'>
            <Button text="Alert" onClick={()=>this.openModal('alert')} />
            <Button text="Confirm" onClick={()=>this.openModal('confirm')}/>
            <Button text="Prompt" onClick={()=>this.openModal('prompt')}/>
            <Button text="Delete" onClick={()=>this.openModal('delete')} />
            {this.state.showModal ? 
            <Dialog onClick={()=>this.closeModal()} onCancel={()=>this.closeModal()} type={this.state.modalType}/>
            : null}
        </div>
         
        );
    }
}
 
export default DialogView;