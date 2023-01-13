import React, { Component } from 'react';
import './Button.scss'
export default class Button extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            active: false
        }
        
    }
    componentDidMount() {
   
    }

    clicked=()=>{
        if(this.props.onClick){
            this.props.onClick()
           }
        this.setState({
            active:true
        },()=>{
            setTimeout(() => {
                this.setState({
                    active:false
                })
            }, 500);
        })
    }

    render() {
        return (
            this.props.type==='small' 
            ? 
            <button onClick={()=>this.clicked()} className={this.state.active ? 'button buttonActive buttonSmall' : 'button buttonSmall'} disabled={this.props.disabled}>{this.props.text}</button>
            :
            this.props.type==='search' 
            ? 
            <button onClick={()=>this.clicked()} className={this.state.active ? 'button buttonActive buttonSmall buttonSearch' : 'button buttonSmall buttonSearch'} disabled={this.props.disabled}>{this.props.text}</button>
            :
            this.props.type==='text' 
            ?
            <button onClick={()=>this.clicked()} className={this.state.active ? 'button buttonActive buttonText' : 'button buttonText' } disabled={this.props.disabled}>{this.props.text}</button>
            :
            this.props.type==='delete' 
            ?
            <button onClick={()=>this.clicked()} className={this.state.active ? 'button buttonActive buttonDelete' : 'button buttonDelete' } disabled={this.props.disabled}>{this.props.text}</button>
            :
            <button onClick={()=>this.clicked()} className={this.state.active ? 'button buttonActive' : 'button'} disabled={this.props.disabled}>{this.props.text}</button>
        )
    }
}