import React, { Component } from 'react';
import HandWave from '../../images/hand-wave.svg'
import WhiteCross from '../../images/white-cross.svg'
import CheckIcon from '../../images/Check.svg'
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
    getAlert() {
        alert('getAlert from Child');
      }
 
    render() { 
        return (  
            <div className=''>
                <div 
                className={this.state.show==='show' ? 'bannerAlert slideDown' : this.state.show==='hide' ? 'bannerAlert slideUp' : 'bannerAlert'}
                onClick={()=>this.hide()}
                style={{backgroundColor:this.props.type==='success'?'#1FCDAB':''}}
                >
                    <div className='bannerIcon'>
                        <img src={
                            this.props.type==='success'?
                            CheckIcon
                            :
                            HandWave
                        } alt="Wave"/>
                    </div>
                    <div className='bannerContent'>
                        <div className='bannerText'>{this.props.text}</div>
                        <div className='rhs'>
                             <img src={WhiteCross} alt="Close"/>
                        </div>
                    </div>
                </div>
                {this.props.hasButton? 
                <Button text="Show Notification" onClick={()=>this.show()}/>
                :null}
            </div>
        );
    }
}
 
export default Banner;