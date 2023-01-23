import React, { Component } from 'react';
import './CalendarLarge.scss'
import LeftArrow  from '../../images/left-arrow.svg'
import RightArrow  from '../../images/right-arrow.svg'
import MapIcon  from '../../images/map-icon.svg'
import George  from '../../images/george.png'
import CloseButton from '../CloseButton/CloseButton'
import Modal from '../Modal/Modal'
import Select from '../Select/Select'
import DateInput from '../DateInput/DateInput'
import Label from '../Label/Label';
class CalendarLarge extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        month: 'August',
        year: '2023',
        showEvents: false,
        eventName: 'Ring Sam Cook',
        showModal: false,
        times:     [
            { title: '5:00pm', value: '5:00pm'},
            { title: '5:30pm', value: '5:30pm'},
            { title: '6:00pm', value: '6:00pm'},
            { title: '6:30pm', value: '6:30pm'}
        ]
     }

     closeModal=()=>{
        this.setState({
            showModal: false
        })
    }
    showModal=()=>{
        this.setState({
            showModal: true
        })
    }
     showEvents=()=>{
        this.setState({
            showEvents: true
        })
     }
     hideEvents=()=>{
        this.setState({
            showEvents: false
        })
     }

     event=()=>{
        return(
            <div className='modalContentCal'>
            <div className='calLargeSelects'>
                <Select label="Start Time" text="6:30pm" listItems={this.state.times}/>
                <DateInput label="Start Date" text="2023-08-04"/>
                <Select label="End Time" listItems={this.state.times} text="6:45pm"/>
                <DateInput label="End Date" text="2023-08-04"/>
                <Select label="All day" text="No" listItems={[{title:'Yes', value:'Yes'},{title:'No',value:'No'}]}/>
                <Select label="Repeats" text="Never" listItems={[{title:'Never', value:'Never'},{title:'Forever', value:'Forever'},{title:'1', value:'1'},{title:'2',value:'2'},{title:'3',value:'3'}]}/>
                <Select label="Alerts" text="5 mins before" listItems={[{title:'5 mins before', value:'5 mins before'},{title:'15 mins before',value:'15 mins before'}]}/>
                <Select label="Attending" text="Yes" listItems={[{title:'Yes', value:'Yes'},{title:'No',value:'No'}]}/>
                
            </div>
            <div className='eventInfo'>
                    <div>
                        <Label text="Description"/>
                        <div className='description'>
                            Ring Sam Cook in relation to 4/1045 Myrtle Ave Bushwick. Sam is keen but may need some convincing that this is the place for her.
                        </div>
                    </div>
                    <div>
                        <Label text="Attendees (5)"/>

                        <div className='attendees'>

                            <div className='attendee'>
                                <div className='avatar'>SC</div>
                                <div className='info'>
                                    <div className='name'>Sam Cook</div>
                                    <div className='email'>sam.cook@realestate.com</div>
                                </div>
                                <div className='icon'></div>
                            </div>

                            <div className='attendee'>
                                <div className='avatar'>SC</div>
                                <div className='info'>
                                    <div className='name'>Sam Cook</div>
                                    <div className='email'>sam.cook@realestate.com</div>
                                </div>
                                <div className='icon'></div>
                            </div>

                            <div className='attendee'>
                                <div className='avatar'>SC</div>
                                <div className='info'>
                                    <div className='name'>Sam Cook</div>
                                    <div className='email'>sam.cook@realestate.com</div>
                                </div>
                                <div className='icon'></div>
                            </div>

                            <div className='attendee'>
                                <div className='avatar'>SC</div>
                                <div className='info'>
                                    <div className='name'>Sam Cook</div>
                                    <div className='email'>sam.cook@realestate.com</div>
                                </div>
                                <div className='icon'></div>
                            </div>

                            <div className='attendee'>
                                <div className='avatar'>SC</div>
                                <div className='info'>
                                    <div className='name'>Sam Cook</div>
                                    <div className='email'>sam.cook@realestate.com</div>
                                </div>
                                <div className='icon'></div>
                            </div>

                           
                        </div>
                    </div>
            </div>
            </div>
        )
     }


    render() { 
        return (  
            <div className='calLargeWrap'>
                {this.state.showModal ? 
                <Modal 
                heading={this.state.eventName} 
                subTitle="625 Broadway Williamsburg"
                icon={MapIcon}
                content={this.event()}
                onClick={()=>this.closeModal()}
                onCancel={()=>this.closeModal()}
                mainButtonText="Update"
                cancelButton={true}
                />
                : null}
                <div className='calLargeHeader'>
                        <div className='calArrow' onClick={()=>this.goback()}><img src={LeftArrow} alt="" title="July"/></div>
                        <div onClick={()=>this.showModal()} className='calCurrentDate'> {this.state.month} {this.state.year}</div>
                        <div className='calArrow' onClick={()=>this.forward()}> <img src={RightArrow} alt="" tilte="Septmember"/> </div>
                </div>
                <div className='calLargeDays'>
                                <div className='calLargeDay calLargeOtherMonth'>
                                    <div className='calLargeDayName'>MON</div>
                                     31</div>
                                <div className='calLargeDay'>
                                <div className='calLargeDayName'>TUE</div>
                                1</div>
                                <div className='calLargeDay'>
                                <div className='calLargeDayName'>WED</div>
                                    2</div>
                                <div className='calLargeDay'>
                                <div className='calLargeDayName'>THU</div>
                                    3</div>
                                <div className='calLargeDay'>
                                <div className='calLargeDayName'>FRI</div>
                                    4
                                    <div className='calLargeEventList'>
                                        <div className='calLargeEvent calLargeEventOver' onClick={()=>this.showModal()}>2pm Ring Sam Cook</div>
                                        <div className='calLargeEvent calLargeEventOver calLargeEventCancelled' onClick={()=>this.showModal()}>3pm Design mee...</div>
                                    </div>
                                    </div>
                                <div className='calLargeDay'>
                                <div className='calLargeDayName'>SAT</div>
                                    5</div>
                                <div className='calLargeDay'>
                                <div className='calLargeDayName'>SUN</div>
                                    6</div>
                                <div className='calLargeDay'>7</div>
                                <div className='calLargeDay calLargeToday'>8</div>
                                <div className='calLargeDay'>9
                                    <div className='calLargeEventList'>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>2pm Ring Sam Cook</div>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>3pm Design mee...</div>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>4pm Catch up with...</div>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>7pm Dinner at the...</div>
                                        <div className='calLargeSeeMore' onClick={()=>this.showEvents()}>See More</div>
                                    </div>
                                </div>
                                <div className='calLargeDay'>10</div>
                                <div className='calLargeDay'>11</div>
                                <div className='calLargeDay'>12</div>
                                <div className='calLargeDay'>13</div>
                                <div className='calLargeDay'>14</div>
                                <div className='calLargeDay'>15</div>
                                <div className='calLargeDay'>16</div>
                                <div className='calLargeDay'>17</div>
                                <div className='calLargeDay'>18
                                <div className='calLargeEventList'>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>2pm Ring Sam Cook</div>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>3pm Design mee...</div>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>3pm Design mee...</div>
                                    </div>
                                </div>
                                <div className='calLargeDay'>19</div>
                                <div className='calLargeDay'>20</div>
                                <div className='calLargeDay'>21</div>
                                <div className='calLargeDay'>22
                                <div className='calLargeEventList'>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>2pm Ring Sam Cook</div>
                                        <div className='calLargeEvent' onClick={()=>this.showModal()}>3pm Design mee...</div>
                                    </div>
                                </div>
                                <div className='calLargeDay'>23</div>
                                <div className='calLargeDay'>24</div>
                                <div className='calLargeDay'>25</div>
                                <div className='calLargeDay'>26</div>
                                <div className='calLargeDay'>27</div>
                                <div className='calLargeDay'>28</div>
                                <div className='calLargeDay'>29</div>
                                <div className='calLargeDay'>30</div>
                                <div className='calLargeDay'>31</div>
                                <div className='calLargeDay calLargeOtherMonth'>1</div>
                                <div className='calLargeDay calLargeOtherMonth'>2</div>
                                <div className='calLargeDay calLargeOtherMonth'>3</div>
                                
                </div>
            {this.state.showEvents ? 
            <div className='calLargeListPopup'>
                <CloseButton type='internal' onClick={()=>this.hideEvents()}/>
                <div className='header'>
                   <div className='dayName'> Wednesday</div>
                   <div className='dayNumber'> 9</div>
                </div>
                <div className='eventListPopup'>

                    <div className='eventPopup'>
                        <div className='timePopup'>2pm</div>
                        Ring Sam Cook
                    </div>
                    <div className='eventPopup'>
                        <div className='timePopup'>3pm</div>
                       Design meeting with product and engineering.
                    </div>
                    <div className='eventPopup'>
                        <div className='timePopup'>4pm</div>
                        Catch up with Nora for drinks.
                    </div>
                    <div className='eventPopup'>
                        <div className='timePopup'>7pm</div>
                       Dinner at the house with family
                    </div>
                    <div className='eventPopup'>
                        <div className='timePopup'>8pm</div>
                       Call Brian
                    </div>
                    <div className='eventPopup'>
                        <div className='timePopup'>11pm</div>
                       Bed
                    </div>

                </div>
            </div>
            : null}
            </div>
        );
    }
}
 
export default CalendarLarge;