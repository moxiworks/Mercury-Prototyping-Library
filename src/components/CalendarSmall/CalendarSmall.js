import React, { Component } from 'react';
import './CalendarSmall.scss'
import LeftArrow  from '../../images/left-arrow.svg'
import RightArrow  from '../../images/right-arrow.svg'
import Select from '../Select/Select'
import Input from '../Input/Input';
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';

class CalendarSmall extends Component {
    constructor(props) {
        super(props);
       this.todayFunc = this.todayFunc.bind(this);
       this.wrapperRef = React.createRef();
       this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    state = { 
        month:'',
        hide: false,
        month: 'August',
        year: '2023',
        showModal:false,
        tempMonth: 'August',
        tempYear: '2023',
        months:[
            {
                title: "January",
                value: "January"
            },
            {
                title: "February",
                value: "February"
            },
            {
                title: "March",
                value: "March"
            },
            {
                title: "April",
                value: "April"
            },
            {
                title: "May",
                value: "May"
            },
            {
                title: "June",
                value: "June"
            },
            {
                title: "July",
                value: "July"
            },
            {
                title: "August",
                value: "August"
            },
            {
                title: "September",
                value: "September"
            },
            {
                title: "October",
                value: "October"
            },
            {
                title: "November",
                value: "November"
            },
            {
                title: "December",
                value: "December"
            }
        ]
     }

    componentDidMount(){
        let elements = document.getElementsByClassName("calDay");
        Array.from(elements).forEach((element)=>{
            element.addEventListener('click', this.todayFunc);
        });
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && ! this.wrapperRef.current.contains(event.target)) {
          this.hideModal()
        }
      }

    todayFunc(e){
        let elements = document.getElementsByClassName("calToday");
        Array.from(elements).forEach((element)=>{
            element.classList.remove('calToday')
        });
        e.target.classList.add('calToday')
    }

    forward=()=>{
            this.setState({
                hide: true,
                month: 'September',
                year: '2023',
                tempMonth: 'September',
                tempYear: '2023'
            })
    }
    goback=()=>{
        this.setState({
            hide: false,
            month: 'August',
            year: '2023',
            tempMonth: 'August',
            tempYear: '2023'
        })
    }

    showModal=()=>{
        this.setState({
            showModal: true
        })
    }

    hideModal=()=>{
        this.setState({
            showModal: false,
            tempMonth: this.state.month,
            tempYear: this.state.year
        })
    }

    setDate=()=>{
        this.setState({
            showModal: false,
            month: this.state.tempMonth,
            year: this.state.tempYear
        })
    
    }

    changeMonth=(text)=>{
        this.setState({
            tempMonth: text
        })
    }
    changeYear=(text)=>{
        this.setState({
            tempYear: text
        })
    }

    render() { 
        return ( 
            <div>
                {this.state.showModal ? 
                <div className='modalWrapper'>
                    <div className='modalInner' ref={this.wrapperRef}>
                        {/* <CloseButton type="internal" onClick={()=>this.hideModal()}/> */}
                    <h1>Choose Date</h1>
                    <Select text={this.state.tempMonth} label="Month" listItems={this.state.months} callback={(text)=>this.changeMonth(text)}/>
                    <Input text={this.state.tempYear} label="Year" onChange={(text)=>this.changeYear(text)}/>
                    <div className='modalButtons'>
                                <Button text="Cancel" onClick={()=>this.hideModal()} type="text"/>
                                <Button text="Ok" onClick={()=>this.setDate()} />
                    </div>
                    </div>
                </div>
                :null}


                <div className='calWrap'>
                    <div className='calHeader'>
                        <div className='calArrow' onClick={()=>this.goback()}><img src={LeftArrow} alt="" title="July"/></div>
                        <div onClick={()=>this.showModal()} className='calCurrentDate'> {this.state.month} {this.state.year}</div>
                        <div className='calArrow' onClick={()=>this.forward()}> <img src={RightArrow} alt="" tilte="Septmember"/> </div>
                    </div>

                    <div className='calMonth'>
                                    <div className='calDays'>MON</div>
                                    <div className='calDays'>TUE</div>
                                    <div className='calDays'>WED</div>
                                    <div className='calDays'>THU</div>
                                    <div className='calDays'>FRI</div>
                                    <div className='calDays'>SAT</div>
                                    <div className='calDays'>SUN</div>
                            </div>

                <div className={this.state.hide ? 'calMain calMonthMainActive': 'calMain'}>
                    <div className='calMonthWrap'>
                        

                            <div className='calDaysNumber'>
                            <div className='calDay calOffDay'>30</div>
                                <div className='calDay calOffDay'>31</div>
                                <div className='calDay'>1</div>
                                <div className='calDay'>2</div>
                                <div className='calDay'>3</div>
                                <div className='calDay'><div className='event'></div>4</div>
                                <div className='calDay'>5</div>
                                <div className='calDay'>6</div>
                                <div className='calDay'><div className='event'></div>7</div>
                                <div className='calDay'>8</div>
                                <div className='calDay'>9</div>
                                <div className='calDay'>10</div>
                                <div className='calDay'>11</div>
                                <div className='calDay'>12</div>
                                <div className='calDay'>13</div>
                                <div className='calDay'>14</div>
                                <div className='calDay'>15</div>
                                <div className='calDay'><div className='event'></div>16</div>
                                <div className='calDay'>17</div>
                                <div className='calDay'>18</div>
                                <div className='calDay'>19</div>
                                <div className='calDay'>20</div>
                                <div className='calDay calToday calCurrent'>21</div>
                                <div className='calDay'>22</div>
                                <div className='calDay'><div className='event'></div>23</div>
                                <div className='calDay'>24</div>
                                <div className='calDay calEvent'>25</div>
                                <div className='calDay'>26</div>
                                <div className='calDay'>27</div>
                                <div className='calDay'>28</div>
                                <div className='calDay'>29</div>
                                <div className='calDay'>30</div>
                                <div className='calDay'><div className='event'></div>31</div>
                                <div className='calDay calOffDay'>1</div>
                                <div className='calDay calOffDay'>2</div>
                            </div>
                    </div>

                    <div className='calMonthWrap'>
                            {/* <div className='calMonth'>
                                    <div className='calDays'>MON</div>
                                    <div className='calDays'>TUE</div>
                                    <div className='calDays'>WED</div>
                                    <div className='calDays'>THU</div>
                                    <div className='calDays'>FRI</div>
                                    <div className='calDays'>SAT</div>
                                    <div className='calDays'>SUN</div>
                            </div> */}

                            <div className='calDaysNumber'>
                                <div className='calDay calOffDay'>30</div>
                                <div className='calDay calOffDay'>31</div>
                                <div className='calDay'>1</div>
                                <div className='calDay'>2</div>
                                <div className='calDay'>3</div>
                                <div className='calDay'>4</div>
                                <div className='calDay'><div className='event'></div>5</div>
                                <div className='calDay'>6</div>
                                <div className='calDay'>7</div>
                                <div className='calDay'>8</div>
                                <div className='calDay'>9</div>
                                <div className='calDay'>10</div>
                                <div className='calDay'>11</div>
                                <div className='calDay'><div className='event'></div>12</div>
                                <div className='calDay'><div className='event'></div>13</div>
                                <div className='calDay'>14</div>
                                <div className='calDay'>15</div>
                                <div className='calDay'><div className='event'></div>16</div>
                                <div className='calDay'>17</div>
                                <div className='calDay'>18</div>
                                <div className='calDay'>19</div>
                                <div className='calDay'>20</div>
                                <div className='calDay'>21</div>
                                <div className='calDay'>22</div>
                                <div className='calDay'>23</div>
                                <div className='calDay'>24</div>
                                <div className='calDay'>25</div>
                                <div className='calDay'>26</div>
                                <div className='calDay'>27</div>
                                <div className='calDay'>28</div>
                                <div className='calDay'>29</div>
                                <div className='calDay'>30</div>
                                <div className='calDay'>31</div>
                                <div className='calDay calOffDay'>1</div>
                                <div className='calDay calOffDay'>2</div>
                            </div>
                    </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default CalendarSmall;