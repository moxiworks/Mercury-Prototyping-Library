import React, { Component } from 'react';
import './Dialogs.scss'
import Button from '../Button/Button';
import Input from '../Input/Input'

class Dialogs extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }
    state = { 
       delDisabled: true,
       showOk: true
     }
     componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("keydown", this.onKeyPressed);
       
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
            if(this.props.onCancel){
                this.props.onCancel()
            }else{
                this.props.onClick()
            }
          
        }
      }

      onKeyPressed(event){
        if(event.code==='Enter'){
            event.preventDefault()
            if(this.props.type === 'delete'){
                if(!this.state.delDisabled){
                    this.setState({
                        delDisabled: true
                    },()=>{
                        this.props.onClick()
                    })
                    
                }
            }else if(this.props.type === 'prompt'){
                if(!this.state.showOk){
                    this.setState({
                        showOk: true
                    },()=>{
                        this.props.onCancel()
                    })
                }
            }
            else{
                this.setState({
                    delDisabled: true
                },()=>{
                    this.props.onCancel()
                })
            }
            
        }
            
        if(event.code==='Escape'){
            this.setState({
                delDisabled: true
            },()=>{
                this.props.onCancel()
            })
        }
      }

      test=(val)=>{
        if(val==="DELETE"){
            this.setState({
                delDisabled: false
            })
        }else{
            this.setState({
                delDisabled: true
            })
        }
        if(val.length>0){
            this.setState({
                showOk: false
            })
        }
      }

    render() { 
        return ( 
            <div className='modalWrapper' >
                <div className='dialogBack' ref={this.wrapperRef}>
                    {
                        this.props.type=== 'alert' 
                        ?
                        <div className='alertText'>
                            <div className='alertHeading'>Something has happened!</div>
                            By doing this thing, something import may happen. So go ahead if you wish but yeah.
                            <div className='modalButtons'>
                                <Button text="Ok" onClick={()=>this.props.onClick()} />
                            </div>
                        </div>
                        : 
                        this.props.type=== 'prompt' 
                        ?
                        <div className='alertText'>
                            <div className='alertHeading'>You need to input your name to continue</div>
                            <Input label="Name" placeholder="Enter your name" focus={true} onChange={(val)=>this.test(val)}/>
                            <div className='modalButtons'>
                                <Button text="Cancel" onClick={()=>this.props.onClick()} type="text"/>
                                <Button text="Ok" onClick={()=>this.props.onClick()}  disabled={this.state.showOk}/>
                            </div>
                        </div>
                        :
                         this.props.type=== 'delete' 
                         ?
                         <div className='alertText'>
                             <div className='alertHeading'>Type 'DELETE' to delete</div>
                             <Input label="Confirm" placeholder="Type 'DELETE'" focus={true} onChange={(val)=>this.test(val)} error={false}/>
                             <div className='modalButtons'>
                            <Button text="Cancel" onClick={()=>this.props.onCancel()} type="text"/>
                            <Button text="Ok" onClick={()=>this.props.onClick()} type="" disabled={this.state.delDisabled}/>
                            </div>
                         </div>
                        : <div className='alertText'>
                        <div className='alertHeading'>Are you sure you want to do this?</div>
                        By doing this thing, something import may happen. So go ahead if you wish but yeah.
                        <div className='modalButtons'>
                                <Button text="Cancel" onClick={()=>this.props.onClick()} type="text"/>
                                <Button text="Ok" onClick={()=>this.props.onClick()} />
                            </div>
                        </div>
                    }
                </div>
                
            </div>
        );
    }
}
 
export default Dialogs;