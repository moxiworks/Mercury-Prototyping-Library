import React, { Component } from 'react';
import Label from '../Label/Label';
import Button from '../Button/Button';
import Cross  from '../../images/cross.svg'
import './UploadInput.scss'
var input
export default class UploadInput extends Component {

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
        input = document.createElement('input');
        input.type = 'file';
        input.style.display='none'
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

    getFile=()=>{
        this.setState({
            focused: true
        })
        input.onchange = e => { 
            var file = e.target.files[0]; 
            console.log(file)
            this.setState({
                text: file.name,
                showCross:true,
                
            })
        }
        input.click()
        
    }
   
    render() {
        return (
            <div 
            className={
                this.state.error && this.state.focused  ?
                "uploadWrap  uploadError uploadErrorFocused"
                : this.state.focused ? 
                "uploadWrap uploadWrapFocused" 
                : this.state.error ?
                 "uploadWrap uploadError"
                : "uploadWrap"
            }
            >
                <Label text={this.props.label} for="uploadInput" subText={this.state.error ? "This field is required":""}/>
                <input 
                id="uploadInput"
                className='uploadInput'
                ref={this.inputRef}  
                placeholder={this.props.placeholder} 
                value={this.state.text} 
                onFocus={()=>this.focusInput()}
                onBlur={()=>this.focusInput()} 
                onChange={(e)=>this.changeText(e)}
                />
                {this.state.showCross ? 
                <div className="clearButtonUpload" onClick={()=>this.clearText()}><img src={Cross}/></div>
                : null}
                <Button text="select file" type="small"  onClick={()=>this.getFile()}/>
            </div>
        )
    }
}