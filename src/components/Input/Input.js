import React, { Component } from 'react';
import Label from '../Label/Label';
import Cross  from '../../images/cross.svg'
import './Input.scss'
export default class Input extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            error: this.props.error,
            showCross:false,
            text: this.props.text ? this.props.text : ''
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
            if(this.props.onChange){
                this.props.onChange(e.target.value)
            }
            
    }
    clearText=()=>{
        this.setState({
            showCross: false,
            text: '',
            error: true
        },()=>{
            this.inputRef.current.focus()
        })
        
       
    }
   
    render() {
        return (
            <div 
            className={
                this.state.error && this.state.focused  ?
                "inputWrap inputError inputErrorFocused"
                : this.state.focused ? 
                "inputWrap inputWrapFocused" 
                : this.state.error ?
                 "inputWrap inputError"
                : "inputWrap"
            }
            >
                <Label text={this.props.label} subText={this.state.error ? "This field is required":""}/>
                <input 
                    ref={this.inputRef}  
                    placeholder={this.props.placeholder} value={this.state.text} 
                    onFocus={()=>this.focusInput()}
                    onBlur={()=>this.focusInput()} 
                    onChange={(e)=>this.changeText(e)}
                    autoFocus={this.props.focus}
                    type={this.props.type? this.props.type : 'text'}
                    max={this.props.max?this.props.max:800000000}
                />
                {this.state.showCross ? 
                <div className="clearButton" onClick={()=>this.clearText()}><img src={Cross}/></div>
                : null}
            </div>
        )
    }
}