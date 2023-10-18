import React, { Component } from 'react';
import './PersonCard.scss'
class PersonCard extends Component {
    state = {}

    render() {
        return (
            <div ref={this.props.reffer ? this.props.reffer :''} className={this.props.person.checked ? 'userPanel userPanelActive' : 'userPanel'} onClick={() =>  this.props.setChecked(this.props.person.id)} >
                <div className='userPic'>
                    {this.props.person.image ? 
                    <img src={this.props.person.image} alt="" />
                    :
                    <div className='picHolder'>{this.props.person.name.split(" ").map((n)=>n[0]).join("")}</div>
                    }
                </div>
                <div className='userInfo'>
                    <div className='userName'>{this.props.person.name}</div>
                    <div className='userEmail'>{this.props.person.email}</div>
                    {this.props.person.office &&
                        <div className='useroffice'> {this.props.person.office}</div>
                    }
                </div>
                {this.props.person.role ? 
                <div className='role'>
                    Admin
                </div>
                :<div></div>
                 }

                <div className='userRadio'>
                    <input type='radio' name="rad" checked={this.props.person.checked} onChange={() => this.props.changeRadio()} />
                </div>
            </div>
        );
    }
}

export default PersonCard;