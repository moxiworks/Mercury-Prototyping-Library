import React, { Component } from 'react';
import './Modal.scss'
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.modalRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }
    
    state = {

    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("keydown", this.onKeyPressed);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.props.onCancel()
        }
    }
    onKeyPressed(event) {
        if (event.code === 'Escape') {
            event.preventDefault()
            this.props.onCancel()
        }
    }

    render() {
        return (
            <div className='modalWrapper' ref={this.modalRef} >
                <div className='modalContent' ref={this.wrapperRef}>
                    <CloseButton type="internal" onClick={() => this.props.onCancel()} />
                    <h1>{this.props.heading}</h1>
                    <div className='subTitle'>
                        {this.props.icon ? <img src={this.props.icon} /> : null}
                        {this.props.subTitle}
                    </div>
                    <div className='modalText'>
                        {this.props.content}
                    </div>
                    <div className='modalButtons'>
                        {this.props.cancelButton ?
                            <Button text="Cancel" onClick={() => this.props.onCancel()} type={"text"} />
                            : null}
                        <Button text={this.props.mainButtonText} onClick={() => this.props.onClick()} type={this.props.buttonType ? this.props.buttonType : ""} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Modal;