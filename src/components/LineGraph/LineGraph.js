import React, { Component } from 'react';
import './LineGraph.scss'
let ctx
class LineGraph extends Component {
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
                count: 120,
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
        const canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
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

        this.drawLines()
     }

    drawLines=()=>{
        ctx.strokeStyle="#0073E6"
        ctx.moveTo(0, 150);
        // ctx.lineTo(10, 130);
        // ctx.stroke();

        let circles = document.getElementsByClassName('barBar')
        let myCan = document.getElementById('myCanvas')
        let start=0
        // Array.from(circles).forEach(element => {
        //     // console.log(element);
        //     let y = myCan.getBoundingClientRect().y+myCan.getBoundingClientRect().y
        //     let x = myCan.getBoundingClientRect().x+myCan.getBoundingClientRect().x
        //     console.log();
        //     ctx.lineTo(x, y-30);
        // });

        this.state.data.forEach((element, index)=>{
            // console.log(circles[0].getBoundingClientRect().width);
            
            ctx.lineTo(start,element.count);
            start = start+25
            console.log(start);
        })

        ctx.stroke();
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
                        <div className='dotHolder'>
                            <canvas id="myCanvas"/>
                             {this.state.data.map((item,index)=>{
                                return(
                                    <div key={index} className="barBar">
                                        <div 
                                        className='dotReal'
                                        onMouseEnter={(e)=>this.showToolTip(e,item.price)}
                                        onMouseLeave={(e)=>this.hideToolTip(e)}
                                         style={{
                                            bottom: item.count, 
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
 
export default LineGraph;