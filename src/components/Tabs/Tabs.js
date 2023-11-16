import React, { Component } from 'react';
import Button from '../../components/Button/Button'
import Toggle from '../../components/Toggle/Toggle'
import { ClipboardText, ArrowsLeftRight} from '@phosphor-icons/react';
import './Tabs.scss'

class Tabs extends Component {
    state = { 
        isActive:0,
        data:[
            {
                id:0,
                title: 'My Tasks',
                content:"Create Dotloop Loop",
                description: "Save time by sending property, transaction, and contact info to Dotloop.",
                date:"Tomorrow",
                count: 10,
                type: 'my'
            },
            {
                id:1,
                title: 'Transaction Tasks',
                content:"Do a transaction task",
                description:'Clean up your database by assigning a listing number.',
                date:"NOV 30 2023",
                count: 8,
                type:'trans'
            },
            {
                id:2,
                title: 'Completed Tasks',
                content:"This is a completed taks",
                description:"Create calendar events to analyze incremental market reviews every two two three weeks.",
                date:"MAR 1 2023",
                count: 85,
                type:'complete'
            }
        ]
     } 
     constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }


     moveItem=(e,index)=>{
        e.stopPropagation();
        this.myRef.current.style.left =  e.target.offsetLeft + "px"
        this.setState({
            isActive: index
        })
     }

     doToggle=()=>{
        // console.log(this.state.data[this.state.isActive]);
        // this.state.data[this.state.isActive].type='complete'
        // this.setState({

        // })
     }


    render() { 
        return (

            <div className='tabMain'>
                <div className='headerSection'>
                    <div
                        ><h1>To-Do List</h1>
                        <p>What has been happening in your sphere</p>
                    </div>
                    <div><Button text="Create Task" type="tertiary" icon="true"/></div>
                </div>
                <div className='tabInner'>

                    <div className='tabButtons'>
                        {this.state.data.map((item,index)=>{
                            return(
                                <button key={index} className={this.state.isActive===index ? 'tabActive' :''} onClick={(e)=>this.moveItem(e,item.id)}>
                                    {item.title}
                                    <div className='itemCount'>{item.count}</div>
                                </button>
                            )
                        })}
                        <div className='tabActiveBackground'ref={this.myRef} ></div>
                    </div>
                    
                    <div className='tabContent'>
                        <div className='task'>
                            <div className='icon'>
                                {this.state.data[this.state.isActive].type === 'my'
                                    ?
                                    <ClipboardText color="#459EFF" size={24} weight="bold"/>
                                    : this.state.data[this.state.isActive].type === 'trans'
                                    ? <ArrowsLeftRight color="#1FCDAB" size={24} weight="bold"/>
                                    
                                    :  <ClipboardText color="#459EFF" size={24} weight="bold"/>
                                }
                                
                            </div>
                            <div className={ this.state.data[this.state.isActive].type === 'complete' ? 'complete text':'text'}>
                                {this.state.data[this.state.isActive].content}
                                <p>
                                    {this.state.data[this.state.isActive].description}
                                </p>
                                <small className='date'>{this.state.data[this.state.isActive].date}</small>
                            </div>
                            <div>
                            {this.state.data[this.state.isActive].type !== 'complete' ?
                                <Toggle 
                                    // toggle={this.state.data[this.state.isActive].type === 'complete' ? 'true' : ''} 
                                    // usePro={this.state.data[this.state.isActive].type === 'complete' ? 'true' : ''}
                                    // action={()=>this.doToggle()}
                                />
                                :<></>
                            }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default Tabs;