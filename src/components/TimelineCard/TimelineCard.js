import React, { Component } from 'react';
import { Clock, CheckCircle,ShareFat,WarningCircle } from '@phosphor-icons/react';
import './TimelineCard.scss'

class TimelineCard extends Component {
    constructor(props) {
        super(props);
        this.comp = React.createRef();
    }
    state = {  }

     check=(e)=>{
        console.log(this.comp.current.style);
    }
    render() { 
        return (
            <div 
            className={this.props.animate ? 'animateIn timelineCard timelineCard' : this.props.moveDown ? 'timelineCard moveOne' : this.props.status?'timelineCard timelineCardStatus':'timelineCard'}
            onClick={()=>this.props.onClick()}
            >
                <div className='timelineHook'>
                    <div className='timelineBall' style={{backgroundColor:this.props.color}}></div>
                    <div className='timelineLine' style={{backgroundColor:this.props.color}}></div>
                </div>

                <div className='timelineIndicator' style={{backgroundColor:this.props.color}}></div>

                <div className='timelineInfo'>
                    <div className='timelineDate'>{this.props.date}</div>
                    <div className='timelineText' ref={this.comp} onMouseEnter={()=>this.check()}>{this.props.text}</div>

                    {this.props.status &&
                        <div className='timelineStatus'>
                            {this.props.status==='In Review'?
                           <Clock size={16} color="#FF9246" weight="bold" /> 
                           :
                           this.props.status==='Approved'?
                           <CheckCircle size={16} color="#1FCDAB" weight="bold" /> 
                           :
                           this.props.status==='Submitted'?
                           <ShareFat size={16} color="#6BC4FF" weight="bold" /> 

                           :<WarningCircle size={16} color="#FF7A70" weight="bold" /> 
                            }
                           {this.props.status}
                        </div>
                    }
                </div>
                
            </div>
          );
    }
}
 
export default TimelineCard;