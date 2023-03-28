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
            show: true,
            defaultList:[
                {
                    title: 'Item One',
                    value: 'Item One'
                },
                {
                    title: 'Item Two',
                    value: 'Item Two'
                },
                {
                    title: 'Item Three',
                    value: 'Item Three'
                },
                {
                    title: 'Item Four',
                    value: 'Item Four'
                }
            ]
            
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
        if(this.props.callback){
            this.props.callback(text)
        }
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
                        {this.props.listItems ?
                            this.props.listItems.map((item,index)=>{
                                return(
                                    <div key={"List"+index} className={this.state.text===item.value ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.setItem(item.value)}>{item.title}</div>
                                )
                            })
                        :
                            this.state.defaultList.map((item,index)=>{
                                return(
                                    <div key={"List"+index} className={this.state.text===item.value ? 'item itemActive itemSelect' : 'item itemSelect'} onClick={()=>this.setItem(item.value)}>{item.title}</div>
                                )
                            })
                        }

                </div>
            </div>


            </div>
        )
    }
}