import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import SaveButton from '../../components/SaveButton/SaveButton'
import Label from '../../components/Label/Label'
import './ButtonView.scss'
export default class ButtonView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: "Click Me",
            imageShow: false
        }
        
    }
    componentDidMount() {
   
    }
    handleChange=(e)=>{
        this.setState({
            text: e.target.value
        })
    }
    showPic=()=>{
        this.setState(({ imageShow }) => ({ imageShow: !imageShow }));
    }
    render() {
        return (
            <div className="wrap">
                <Button text={this.state.text} onClick={()=>this.showPic()}/>
                <Button text="CANCEL" onClick={()=>this.showPic()} type="text"/>
                <Button text="Waiting..." onClick={()=>this.showPic()} type="saving"/>
                <Button text="Small Button" onClick={()=>this.showPic()} type="small"/>
                <Button text="Disabled" onClick={()=>this.showPic()} disabled={true}/>
                <Label text=""/>
                <Label text="Save Button - Click to view animation"/>
                <SaveButton/>
            </div>
        )
    }
}