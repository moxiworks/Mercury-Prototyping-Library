import React, { Component } from 'react';
import TimelineCard from '../TimelineCard/TimelineCard';
import Button from '../Button/Button';
import Modal from '../Modal/Modal'
import Toggle from '../Toggle/Toggle'
import { v4 as uuidv4 } from 'uuid';
import './Timeline.scss'

class Timeline extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        moveDown: false,
        disabledBtn:false,
        animating: false,
        status:false,
        content: '',
        modal:false,
        events:[
            {
                "id":uuidv4(),
              "date": "Today",
              "text": "Clicked on 12 Main St",
              "animate": false,
              "color": "#1FCDAB",
              "status":"Approved"
            },
            {
                "id":uuidv4(),
              "date": "Yesterday",
              "text": "Opened Neighbour Hood news",
              "color": "#FF9246",
              "animate": false,
              "status":"In Review"
            },
            {
                "id":uuidv4(),
              "date": "Mon 7 August",
              "text": "Sent 875 Seaview Rd Seattle WA, 98256 Promote Presentation",
              "animate": false,
              "status":"Submitted"
            },
            {
                "id":uuidv4(),
              "date": "Fri 28th July",
              "text": "Opened Neighbour Hood news",
              "color": "#FF7A70",
              "animate": false,
              "status":"Rejected"
            }
          ]
     }


     addCard=()=>{
        if(this.state.events.length>=8 || this.state.animating){
            return
        }

        // BEWARE THE DIRTY HACK HERE!!!
        let cards = document.getElementsByClassName('timelineCard')
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('moveOne');
        }
        setTimeout(() => {
            let cards = document.getElementsByClassName('timelineCard')
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('moveOne');
                cards[i].classList.remove('animateIn');
            }
            this.setState({
                // disabledBtn:tempObject.length>7 ? true :false,
                animating:false
            })
        }, 700);

        // let colorArray=['#FF9246','#CE82FF','#1FCDAB','#6BC4FF']
        // const randomNumber = Math.floor(Math.random() * colorArray.length);
      
        let tempObject =this.state.events
        const newCard = {
            "id":uuidv4(),
            "date": "Just Now",
              "text": "Clicked on 1234 Main St",
              "animate": true,
              "status": "Submitted"
        }
        tempObject.unshift(newCard)
        this.setState({
            events:tempObject,
            // disabledBtn:true,
            animating:true
        })

     }
     showStatus=()=>{
        this.setState({
            status: !this.state.status
        })
     }

     showModal=(content)=>{
        this.setState({
            content: content,
            modal:true
        })
     }
    render() { 
        return (
            <div className='timeWrap'>
                <Toggle action={()=>this.showStatus()} text="Toggle Status Variant"/>
            <div className='timeline'>
                <div className='timeLineDivider'><div className='timelineDot'></div><div className='timelineDot'></div></div>
                <div className='timelineCardWrapper'>
                    {this.state.events.map((element,index)=>{
                        return(
                            <TimelineCard 
                            key={element.id} 
                            date={element.date} 
                            text={element.text} 
                            color={element.color} 
                            animate={element.animate}
                            moveDown={this.state.moveDown}
                            onClick={()=>this.showModal(element.text)}
                            status={this.state.status && element.status}
                            />
                        )
                    })}
                </div>
                </div>
                {this.state.modal &&
                <Modal mainButtonText="Done" heading="Heading" content={this.state.content} onClick={()=>this.setState({modal:false})}  onCancel={()=>this.setState({modal:false})} />
                }
               {/* <Button text="Add Event" onClick={()=>this.addCard()} disabled={this.state.disabledBtn}/> */}
            </div>
          );
    }
}
 
export default Timeline;