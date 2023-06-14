import React, { Component } from 'react';
import ProfilePic from '../../images/testimonial.png'
import './Testimonials.scss'

let myInterval

class Testimonials extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        index: 0,
        moverWhere: 0,
        scaleX: '100%',
        testimonials: [
            {
                text: "The simplicity of being able to go in to MoxiWorks, manage your goals, look at your sales flow, and post your listings to Facebook... why wouldn’t you?",
                city: "Tacoma, WA",
                name: "Jasmyn Jefferson",
                title: "Branch Manager"
            },
            {
                text: "MoxiWorks is a great way to advertise your listings on social media! Moxi tracks the views and hits and makes it easy to send that information directly to your client. I will continue to use this service!",
                city: "Bethany Beach, DE",
                name: "Liz K.",
                title: "Realtor"
            },
            {
                text: "I like that I can input the property photo, add a few things about the listing and it's ready to go. It's a simple tool for online marketing.",
                city: "Modesto, CA",
                name: "Karen Gustafson",
                title: "Realtor"
            },
            {
                text: "I think the thing I like the best about Promote is the seamlessness…The fact that it’s seamlessly connected and they’re able to transition immediately…that ease of use is an absolute bonus.",
                city: "Gig Harbor, WA",
                name: "Steve Easton",
                title: "Asst. Manager"
            }
        ]
    }

    componentDidMount(){
        this.autoMove()
    }

    mover = (amount,index) => {
        clearInterval(myInterval)
        this.setState({
            moverWhere: amount,
            index: index
        },()=>{
            // this.autoMove()
        })
    }
    autoMove=()=>{
        console.log("move");
        myInterval=setInterval(() => {
            if(this.state.index < this.state.testimonials.length-1){
                this.setState({
                    index: this.state.index+1,
                    moverWhere:'-'+(this.state.index+1)*100
                })
            }else{
                this.setState({
                    index: 0,
                    moverWhere: 0
                })
            }
        }, 4000);
        
    }

    stopAnimation=()=>{
        clearInterval(myInterval)
    }
    render() {
        return (
            <div className='testimonialWrapMain' onClick={()=>this.stopAnimation()}>

                <div className='testimonialWrap' style={{ 'transform': 'translateX(' + this.state.moverWhere + '%)' }}>
                    {
                        this.state.testimonials.map((test, index) => {
                            return (
                                <div key={"test" + index} className='testimonial'>
                                    <div className='testInner'>
                                        <div className='city'>{test.city}</div>
                                        <div className='text'>"{test.text}"</div>
                                        <div className='agent'>
                                            <div className='lhs'>
                                                <div className='pic'>
                                                    <img src={ProfilePic}/>
                                                </div>
                                            </div>
                                            <div className='rhs'>
                                                <div className='name'>{test.name}</div>
                                                <div className='title'>{test.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }

                </div>

                <div className='transMover'>
                    {
                        this.state.testimonials.map((test, index) => {
                            return (
                                <div onClick={() => this.mover('-'+index*100,index)} key={"test" + index} className='moveBtn'>
                                    <div className='testIndicator'></div>
                                </div>
                            )
                        })
                    }
                    <div className='testIndicatorActive' style={{ transform: 'translateX(' + this.state.index*100 + '%)', width: 100/this.state.testimonials.length+'%' }}></div>
                </div>
                {/* <div>
                    <div className='textButton' onClick={()=>this.autoMove()}>Restart Animation</div>
                </div> */}
            </div>
        );
    }
}

export default Testimonials;