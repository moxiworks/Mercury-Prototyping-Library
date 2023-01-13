import React, { Component } from 'react';
import './BarGraph.scss'
class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.toolTip = React.createRef();
    }
    state = { 
        tooltipText: 'Hello',
        max: 7,
        sideList: [],
        data:[
            {
                date: 'Jan',
                count: 20,
                price: '$35,000'
            },
            {
                date: 'Feb',
                count: 50,
                price: '$72,000'
            },
            {
                date: 'Mar',
                count: 0,
                price: '$0'
            },
            {
                date: 'Apr',
                count: 60,
                price: '$84,000'
            },
            {
                date: 'May',
                count: 80,
                price: '$145,000'
            },
            {
                date: 'Jun',
                count: 0,
                price: '$0'
            },
            {
                date: 'Jul',
                count: 70,
                price: '$100,000'
            },
            {
                date: 'Aug',
                count: 120,
                price: '$280,000'
            },
            {
                date: 'Sep',
                count: 90,
                price: '$145,000'
            },
            {
                date: 'Oct',
                count: 20,
                price: '$65,000'
            },
            {
                date: 'Nov',
                count: 0,
                price: '$0'
            },
            {
                date: 'Dec',
                count: 10,
                price: '$85,000'
            }
            
        ]
     }

     componentDidMount(){
        // sideList
        let max = this.state.max
        let index = 0
        let numArray=[]
        while (index<max) {
            numArray.push(index)
            ++index
        }
        this.setState({
            sideList: numArray
        })

     }

     showToolTip=(e,text)=>{
        const myWidth = this.toolTip.current.getBoundingClientRect().width-20
        const myHeight= this.toolTip.current.getBoundingClientRect().height+15
        this.toolTip.current.style.opacity= 1
        this.toolTip.current.style.left= (e.target.getBoundingClientRect().left - 5)+'px'
        this.toolTip.current.style.top= (e.target.getBoundingClientRect().top-myHeight) + 'px'
        this.setState({
            tooltipText: text
        })
     }

     hideToolTip=()=>{
        this.toolTip.current.style.opacity= 0
     }

    render() { 
        return ( 
            <div className='wrap'>

                <div className='toolTip' ref={this.toolTip}>{this.state.tooltipText}</div>

                <div className='barGraphWrap'>
                    <div className='barTop'>
                        <div className='barLeft'>
                            <div>6</div>
                            <div>5</div>
                            <div>4</div>
                            <div>3</div>
                            <div>2</div>
                            <div>1</div>
                            <div>0</div>
                        {/* {this.state.sideList.reverse().map((item,index)=>{
                                return(
                                    <div key={index+'g'}>{item}</div>
                                )
                            })} */}
                        </div>
                        <div className='barBars'>
                             {this.state.data.map((item,index)=>{
                                return(
                                    <div key={index} className="barBar">
                                        <div className='barBack'></div>
                                        <div className='barReal'
                                        onMouseEnter={(e)=>this.showToolTip(e,item.price)}
                                        onMouseLeave={(e)=>this.hideToolTip(e)}
                                         style={{
                                            height: item.count, 
                                            animationDelay:index*50+'ms' 
                                        }}
                                        ></div>
                                        <div key={index+12} className="date">
                                        {item.date}
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BarGraph;