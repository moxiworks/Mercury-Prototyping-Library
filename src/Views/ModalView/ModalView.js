import React, { Component } from 'react';
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal';
class ModalView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { 
        showModal: false
     }

    openModal=()=>{
        this.setState({
            showModal: true
        })
    }
    closeModal=()=>{
        this.setState({
            showModal: false
        })
    }
    render() { 
        return (
        <div>
            <Button text="Open Modal" onClick={()=>this.openModal()}/>
            {this.state.showModal ? 
            <Modal onClick={()=>this.closeModal()}/>
            : null}
        </div>
         
        );
    }
}
 
export default ModalView;