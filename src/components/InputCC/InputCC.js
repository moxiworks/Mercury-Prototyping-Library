import React, { Component } from 'react';
import Label from '../Label/Label';
import Cross  from '../../images/cross.svg'
import './InputCC.scss'
export default class InputCC extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            error: this.props.error,
            showCross:false,
            charCount: 0,
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
        if(e.target.value.length>50){
            return
        }
            this.setState({
                showCross: e.target.value.length> 0 ? true : false,
                text: e.target.value,
                charCount:e.target.value.length
            })
            if(this.props.onChange){
                this.props.onChange(e.target.value)
            }
            
    }
    clearText=()=>{
        this.setState({
            showCross: false,
            text: '',
            error: true,
            charCount:0
        },()=>{
            this.inputRef.current.focus()
        })
        if(this.props.onClear){
            this.props.onClear()
        }
    }
   
    render() {
        return (
            <div 
            className={
                this.state.error && this.state.focused  ?
                "inputWrapCC inputError inputWrapFocusedCC"
                : this.state.focused ? 
                "inputWrapCC inputWrapFocusedCC" 
                : this.state.error ?
                 "inputWrapCC inputError"
                : "inputWrapCC"
            }
            >
                <Label text={this.props.label} for="textInput"/>
                <input 
                    ref={this.inputRef} 
                    id="textInput"
                    placeholder={this.props.placeholder} value={this.state.text} 
                    onFocus={()=>this.focusInput()}
                    onBlur={()=>this.focusInput()} 
                    onChange={(e)=>this.changeText(e)}
                    autoFocus={this.props.focus}
                    type={this.props.type? this.props.type : 'text'}
                    max={this.props.max?this.props.max:800000000}
                />
                {this.state.showCross ? 
                <div className="clearButton" onClick={()=>this.clearText()}><img src={Cross} alt=""/></div>
                : null}
                <div className='charCount'> {this.state.charCount}/50</div>
            </div>
        )
    }
}