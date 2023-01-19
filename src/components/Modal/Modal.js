import React, { Component } from 'react';
import './Modal.scss'
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    state = { 
       
     }
     componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
          this.props.onClick()
        }
      }

    render() { 
        return ( 
            <div className='modalWrapper' >
                <div className='modalContent'  ref={this.wrapperRef}>
                    <CloseButton type="internal" onClick={()=>this.props.onClick()}/>
                    <h1>{this.props.heading}</h1>
                    <div className='subTitle'>
                        {this.props.icon ? <img src={this.props.icon}/> : null}
                        {this.props.subTitle}
                    </div>
                    <div className='modalText'>
                        {this.props.content}
                    </div>
                    <div className='modalButtons'>
                        {this.props.cancelButton ? 
                         <Button text="Cancel" onClick={()=>this.props.onCancel()} type="text"/>
                         :null}
                        <Button text={this.props.mainButtonText} onClick={()=>this.props.onClick()}/>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Modal;