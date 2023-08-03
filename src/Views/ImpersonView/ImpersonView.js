import React, { Component } from 'react';
import { LockKeyOpen } from '@phosphor-icons/react';
import Input from '../../components/Input/Input';
import CloseButton from '../../components/CloseButton/CloseButton';
import ImpersIcon from '../../images/impers-icon.svg'
import Toggle from '../../components/Toggle/Toggle';
import Button from '../../components/Button/Button';
import PersonCard from '../../components/PersonCard/PersonCard';
import GUser from '../../images/george-user.png'
import KUser from '../../images/kramer-user.png'
import NUser from '../../images/newman-user.png'
import EUser from '../../images/elaine-user.png'
import IncogIcon from '../../images/incog-icon.svg'
import SwapIcon from '../../images/swap-icon.svg'

import './ImpersonView.scss'
class ImpersonView extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.checkedRef = React.createRef();
        this.onKeyPressed = this.onKeyPressed.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    state = {
        impersonate: false,
        checked: false,
        currentUser: [],
        trueUser: [],
        showToast: false,
        showModal: false,
        saving: false,
        changed: false,
        toggle: false,
        users: [
            {
                id: 1,
                name: 'Elaine Benise',
                email: 'elaine@seinfeld.com',
                office: '',
                image: EUser,
                checked: false
            },
            {
                id: 2,
                name: 'George Costanza',
                email: 'george@seinfeld.com',
                image: GUser,
                checked: false
            },
            {
                id: 3,
                name: 'Jay Peterman',
                email: 'jay@seinfeld.com',
                checked: false
            },
            {
                id: 4,
                name: 'Kosmo Kramer',
                email: 'kosmo@seinfeld.com',
                image: KUser,
                checked: false
            },
            {
                id: 5,
                name: 'Mr Newman',
                email: 'newman@seinfeld.com',
                image: NUser,
                checked: false
            }
        ],
        tempUsers: [],
        originalUsers: [],
        originalUser: []
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPressed);
        document.addEventListener("mousedown", this.handleClickOutside);
        this.setState({
            tempUsers: this.state.users
        })
    }

    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.cancel()
        }
    }


    toggleToggle = () => {
        if (this.state.toggle) {
            this.setState({
                impersonate: false,
                toggle: false,
                changed: true
            })
            this.clearCheck()
        } else {
            this.setState({
                impersonate: true,
                toggle: true,
                changed: true
            })
        }

    }

    clearCheck = () => {
        let userHold = this.state.users
        userHold.forEach(item => {
            item.checked = false
        })
        this.setState({
            tempUsers: userHold,
            currentUser: []
        })
        this.clearSearch()
    }

    setChecked = (id) => {
        // if(!this.state.impersonate){
        //     return
        // }
        let userHold = this.state.tempUsers
        userHold.forEach(item => {
            item.checked = false
        })
        let newUser = userHold.find(user => user.id === id)
        newUser.checked = true


        let ogUsers = this.state.users
        ogUsers.forEach(item => {
            item.checked = false
        })
        let trueUser = ogUsers.find(user => user.id === id)
        trueUser.checked = true

        this.setState({
            tempUsers: userHold,
            impersonate: true,
            users: ogUsers,
            currentUser: newUser,
            changed: true,
            toggle: true

        }, () => {
            if (this.checkedRef.current) {
                this.checkedRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }

    submit = () => {
        this.setState({
            saving: true
        })

        setTimeout(() => {
            let checker = this.state.tempUsers.find(user => user.checked)
            if (checker) {
                this.setState({
                    showToast: true,
                    showModal: false,
                    tempUsers: this.state.users,
                    trueUser: this.state.currentUser,
                    saving: false
                })
            } else {
                this.setState({
                    showToast: false,
                    showModal: false,
                    tempUsers: this.state.users,
                    currentUser: [],
                    trueUser: [],
                    saving: false
                })
            }
        }, 1400);

    }


    inputChange = (e) => {
        let results = this.state.users.filter(nav => nav.name.toLowerCase().includes(e.toLowerCase()))
        this.setState({
            tempUsers: results
        })
    }
    clearSearch = () => {
        this.setState({
            tempUsers: this.state.users
        })
    }

    onKeyPressed(event) {
        if (event.code === 'Escape') {
            this.cancel()
        }
    }

    showModal = () => {
        localStorage.setItem('myState', JSON.stringify(this.state))
        this.setState({
            showModal: true
        }, () => {
            if (this.checkedRef.current) {
                this.checkedRef.current.scrollIntoView()
            }
        })

    }
    cancel = () => {
        let ogState = JSON.parse(localStorage.getItem('myState'))
        this.setState(ogState)
    }

    changeRadio = () => { }

    render() {
        return (
            <div>
                <Button text="Impersonate User" onClick={() => this.showModal()} icon={IncogIcon}/>

                {this.state.trueUser && this.state.showToast &&
                    <div className='impToast'>
                        <div><img src={IncogIcon} alt="" /></div>
                        <div>You are currently impersonating:</div>
                        <button className='impNavBtn' onClick={() => this.showModal()}>
                            <img src={SwapIcon} alt="" />
                            {this.state.trueUser.name}
                        </button>
                    </div>
                }

                {this.state.showModal &&
                    <div className='impModalBackground'>
                        <div className='impModal' ref={this.wrapperRef}>
                            <CloseButton type="internal" onClick={() => this.cancel()} />
                            <div className='titleArea'>
                                <div className='impIcon'>
                                    <img src={ImpersIcon} alt="" />
                                </div>
                                <div className='centerArea'>
                                    <h1>Select person to impersonate</h1>
                                    <small className='h3'>Perform actions for authorized users</small>
                                </div>
                                <div className='rhs'>
                                    <Toggle text="Impersonate" toggle={this.state.toggle} action={() => this.toggleToggle()} usePro={true} />
                                </div>
                            </div>

                            <Input label="Find People" onChange={(e) => this.inputChange(e)} onClear={() => this.clearSearch()} />

                            {/* MAKE COMP */}
                            <div className='personContent' id="people">
                                {this.state.tempUsers.map((person, index) => {
                                    return (
                                        <PersonCard reffer={this.state.currentUser.id === person.id && this.checkedRef} key={'person' + index} person={person} setChecked={(id) => this.setChecked(id)} changeRadio={() => this.changeRadio()} impersonate={this.state.impersonate} />
                                    )
                                })}
                            </div>

                            <div className='buttonArea'>
                                <div className='lhs'>
                                    <LockKeyOpen size={24} color="#597897" weight="fill" />
                                    <a href="/imperson">Request access to other accounts</a>
                                </div>
                                <div className='btns'>
                                <Button text="Cancel" type="text" onClick={() => this.cancel()} />
                                {this.state.saving ?
                                    <Button text="Switching" type="saving" disabled={!this.state.currentUser.name && this.state.impersonate} onClick={() => this.submit()} />
                                    :
                                    <Button text="Done" disabled={!this.state.changed || (!this.state.currentUser.name && this.state.impersonate)} onClick={() => this.submit()} />
                                }
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ImpersonView;