import React, { Component } from 'react';
import './Submenu.scss'
class Submenu extends Component {

    state = {  
        active:0,
        items:[
            {
                title: "Subpage One"
            },
            {   
                title: "Subpage Two"
            },
            {   
                title: "Subpage Three"
            },
            {
                title: "Subpage Four"
            }
        ]
    }
    componentDidMount(){
        this.setActive(0)
    }
    setActive=(index)=>{
        this.setState({
            active:index
        })
        let currentTab = document.getElementById(index)
        let underline = document.getElementById('subMenuActiveBar')
        underline.style.left = currentTab.offsetLeft+'px'
        underline.style.width = currentTab.getBoundingClientRect().width+'px'
    }

    render() { 
        return ( 
            <div className='subMenuBack'>
                {this.state.items.map((item,index)=>{
                    return(
                        <div key={index} id={index} className={this.state.active===index ? 'subMenuItem subMenuItemActive' : 'subMenuItem'} onClick={(()=>this.setActive(index))}>{item.title}</div>
                    )
                })}
                <div className='subMenuActiveBar' id='subMenuActiveBar'></div>
            </div>
         );
    }
}
 
export default Submenu;