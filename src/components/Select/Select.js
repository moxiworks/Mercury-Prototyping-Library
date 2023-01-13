import React, { Component } from 'react';
import Label from '../Label/Label';
import { ReactComponent as Chevron } from '../../images/chevron.svg'

import './Select.scss'
export default class Input extends Component {

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
    changer=()=>{}
    render() {
        return (
            <div className='selectWrap' ref={this.wrapperRef}>
            <div 
            className={
                this.state.focused ? 
                "selectselectWrap selectWrapFocused" 
                : "selectselectWrap"
            }
            onClick={()=>this.focusInput()}
            >
                <Label text={this.props.label} />
                <input 
                ref={this.inputRef}  
                placeholder={this.props.placeholder} 
                value={this.state.text}
                onChange={()=>this.changer()}
                onFocus={()=>this.focusInput()}
                onBlur={()=>this.focusInput()} 
                />
                <div className="chevronIcon"><Chevron stroke={"#597897"}/></div>

            </div>

            <div className='dropdownWrapper'>
                <div className={this.state.showMenu ? 'dropdown dropdownOpen' : 'dropdown'}>
                        <div className={this.state.text==='Item 1' ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.setItem("Item 1")}>Item 1</div>
                        <div className={this.state.text==='Item 2' ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.setItem("Item 2")}>Item 2</div>
                        <div className={this.state.text==='Item 3' ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.setItem("Item 3")}>Item 3</div>
                        <div className={this.state.text==='Item 4' ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.setItem("Item 4")}>Item 4</div>
                </div>
            </div>


            </div>
        )
    }
}