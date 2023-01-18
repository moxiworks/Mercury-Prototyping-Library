import React, { Component } from 'react';
import Label from '../Label/Label';
import { ReactComponent as Chevron } from '../../images/chevron.svg'

import './DateInput.scss'
export default class DateInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            text: this.props.text,
            show: true
        }
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    focusInput=()=>{
        this.setState(({ focused,showMenu }) => ({ focused: true , showMenu: !showMenu}));
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
          this.setState({
            focused:false,
            showMenu: false
          })
        }
      }

    setItem=(text)=>{
        this.setState({
            text:text,
            showMenu:false,
        })
    }
    changer=(e)=>{
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div ref={this.wrapperRef}>
            <div 
            className={
                this.state.focused ? 
                "dateWrap dateWrapFocused" 
                : "dateWrap"
            }
            onClick={()=>this.focusInput()}
            >
                <Label text={this.props.label} />
                <input 
                ref={this.inputRef}  
                placeholder={this.props.placeholder} 
                value={this.state.text}
                onChange={(e)=>this.changer(e)}
                onFocus={()=>this.focusInput()}
                onBlur={()=>this.focusInput()} 
                type="date"
                />

            </div>

            </div>
        )
    }
}