import React, { Component } from 'react';
import Label from '../Label/Label';
import './TextField.scss'
export default class TextField extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            error: this.props.error,
            showCross:false,
            text: ''
        }
        this.inputRef = React.createRef();
    }
    componentDidMount() {
   
    }
    componentDidUpdate(){
        if(this.props.error !== this.state.error){
            this.setState({
                error: this.props.error
            })
        }
    }
    focusInput=()=>{
        this.setState(({ focused }) => ({ focused: !focused }));
    }
    changeText=(e)=>{
            this.setState({
                showCross: e.target.value.length> 0 ? true : false,
                text: e.target.value
            })
    }
    clearText=()=>{
        this.setState({
            showCross: false,
            text: ''
        })
    }
   
    render() {
        return (
            <div 
            className={
                this.state.error && this.state.focused  ?
                "textWrap textErrorFocused textError"
                : this.state.focused ? 
                "textWrap textWrapFocused" 
                : this.state.error ?
                 "textWrap inputError"
                : "textWrap"
            }
            >
                <Label text={this.props.label}  for="textArea" subText={this.state.error ? "This field is required":""}/>
                <textarea
                id="textArea"
                ref={this.inputRef}  
                placeholder={this.props.placeholder} value={this.state.text} 
                onFocus={()=>this.focusInput()}
                onBlur={()=>this.focusInput()} 
                onChange={(e)=>this.changeText(e)}>
                </textarea>
            </div>
        )
    }
}