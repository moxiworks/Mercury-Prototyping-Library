import React, { Component } from 'react';
import './Dialogs.scss'
import Button from '../Button/Button';
import Input from '../Input/Input'

class Dialogs extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    state = { 
       delDisabled: true,
       showOk: true
     }
     componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
          this.props.onClick()
        }
      }

      test=(val)=>{
        if(val==="DELETE"){
            this.setState({
                delDisabled: false
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
                             <Input label="Name" placeholder="Enter your name" focus={true} onChange={(val)=>this.test(val)} error={true}/>
                             <div className='modalButtons'>
                            <Button text="Cancel" onClick={()=>this.props.onClick()} type="text"/>
                            <Button text="Ok" onClick={()=>this.props.onClick()} type="delete" disabled={this.state.delDisabled}/>
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

                    {/* <div className='modalButtons'>
                        <Button text="Cancel" onClick={()=>this.props.onClick()} type="text"/>
                            <Button text="Ok" onClick={()=>this.props.onClick()} type="delete" disabled={this.state.delDisabled}/>
                            <Button text="Ok" onClick={()=>this.props.onClick()} />
                    </div> */}

                </div>
                
            </div>
        );
    }
}
 
export default Dialogs;