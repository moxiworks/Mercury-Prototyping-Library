import React, { Component } from 'react';
import ProfilePic from '../../images/profile.png'
import LoaderIcon from '../../images/small-loader.svg'
import { ReactComponent as SearchIcon } from '../../images/searchIcon.svg'

import './Mainmenu.scss'
class Mainmenu extends Component {
    constructor(props) {
        super(props);
        this.dropWrap = React.createRef();
        this.inputRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {  
        active:0,
        open: false,
        strokeColor: '#FFF',
        searching: false,
        items:[
            {
                title: "Product One"
            },
            {   
                title: "Product Two"
            },
            {   
                title: "Product Three"
            }
        ]
    }
    componentDidMount(){
        this.setActive(0)
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    setActive=(index)=>{
        this.setState({
            active:index
        })
        let currentTab = document.getElementById(index)
        let underline = document.getElementById('mainMenuActiveBar')
        underline.style.left = (currentTab.offsetLeft+20)+'px'
        underline.style.width = currentTab.getBoundingClientRect().width+'px'
    }

    handleClickOutside(event) {
        console.log("acsasca");
        if (this.dropWrap && this.dropWrap.current && ! this.dropWrap.current.contains(event.target)) {
          this.setState({
                open: false,
                strokeColor: "white",
                searching: false
          })
          this.inputRef.current.value=""
        }
      }

    toggle=()=>{
        if(this.state.open){
            this.setState({
                open: false,
                strokeColor: "white",
                searching: false
            })
            this.inputRef.current.value=""
        }else{
            this.setState({
                open: true,
                strokeColor: "#0073E6"
            })
            this.inputRef.current.focus()
        }
    }

    search=(e)=>{
        e.preventDefault()
        this.setState({
            searching: true
        })
        setTimeout(() => {
            this.setState({
                searching: false
            })
        }, 2000);
    }

    render() { 
        return ( 
            <div className='mainMenuBack' ref={this.dropWrap}>
                <div className='mainMenuActiveBar' id='mainMenuActiveBar'></div>
                <div className='mainNavLeft'>
                {this.state.items.map((item,index)=>{
                    return(
                        <div key={index} id={index} className={this.state.active===index ? 'mainMenuItem mainMenuItemActive' : 'mainMenuItem'} onClick={(()=>this.setActive(index))}>{item.title}</div>
                    )
                })}
                </div>
                <div className='mainNavRight'>
                    <div className='inlineSearch'>
                        <div className='searchIcon' onClick={()=>this.toggle()}>
                            {this.state.searching ? 
                            <img src={LoaderIcon} className='loaderIconSearch' alt='load'/>
                            :<SearchIcon stroke={this.state.strokeColor}/>
                            }
                        </div>
                        <form onSubmit={(e)=>this.search(e)}>
                        <input className={this.state.open ? 'inputOpen' : ''} type="text" placeholder='Search MoxiWorks' ref={this.inputRef} spellCheck={false}/>
                        </form>
                    </div>
                    <img src={ProfilePic} alt="profile"/>
                </div>
            </div>
         );
    }
}
 
export default Mainmenu;