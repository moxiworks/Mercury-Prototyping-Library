import React, { Component } from 'react';
import HandWave from '../../images/hand-wave.svg'
import WhiteCross from '../../images/white-cross.svg'
import Button from '../Button/Button';
import './Banner.scss'

class Banner extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    state = { 
        show: '',
        timer: 5
     }

    show=()=>{
        this.setState({
            show: "show",
            timer: 5
        },()=>{
    
        })
    }

    hide=()=>{
        this.setState({
            show: "hide",
            timer: 5
        })
    }
 
    render() { 
        return (  
            <div className=''>
                <div 
                className={this.state.show==='show' ? 'bannerAlert slideDown' : this.state.show==='hide' ? 'bannerAlert slideUp' : 'bannerAlert'}
                onClick={()=>this.hide()}
                >
                    <div className='bannerIcon'><img src={HandWave} alt="sad face"/></div>
                    <div className='bannerContent'>
                        <div className='bannerText'>I have no actions, just telling you something.</div>
                        <div className='rhs'>
                             {/* {this.state.timer} */}
                             <img src={WhiteCross} alt="Close"/>
                        </div>
                    </div>
                </div>
                <Button text="Show Notification" onClick={()=>this.show()}/>
            </div>
        );
    }
}
 
export default Banner;