import React, { Component } from 'react';
import MoreIcon from '../../images/more.svg'
import MoreWhite from '../../images/more-white.svg'
import TableArrow from '../../images/table-arrow.svg'
import Trash from '../../images/trash.svg'
import DonwloadIcon from '../../images/download.svg'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Dialog from '../../components/Dialogs/Dialogs';

import './Tables.scss'
class Tables extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        menuIndex: -1,
        tbd: -1,
        sortBy: 'fname',
        sortDir: 'down',
        mainCheck: false,
        inbetweenCheck: false,
        showModal: false,
        bulkSelectText: 'Select All',
        celebs: [
            {
                fname: 'Robert',
                lname: 'Smith',
                credits: 350,
                bdate: 'April 21st 1959',
                ecolor: 'Blue',
                checked: false
            },
            {
                fname: 'Steven',
                lname: 'Morrissey',
                credits: 180,
                bdate: 'May 22nd 1959',
                ecolor: 'Blue',
                checked: false
            },
            {
                fname: 'Siouxsie',
                lname: 'Sioux',
                credits: 90,
                bdate: 'May 27nd 1957',
                ecolor: 'Brown',
                checked: false
            },
            
        ]
    }
    componentDidMount() {
        this.sortBy(this.state.sortBy)
    }
    showSubMenu = (index) => {
        if (this.state.menuIndex === index) {
            this.setState({
                menuIndex: -1
            })
        } else {
            this.setState({
                menuIndex: index
            })
        }
    }

    sortBy = (sortBy) => {
        if (this.state.sortDir === 'down' && sortBy === this.state.sortBy) {
            this.setState({
                sortBy: sortBy,
                sortDir: 'up',
                celebs: this.state.celebs.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
            })
        } else if (this.state.sortDir === 'up' && sortBy === this.state.sortBy) {
            this.setState({
                sortBy: sortBy,
                sortDir: 'down',
                celebs: this.state.celebs.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
            })
        } else {
            if (this.state.sortDir === 'up') {
                this.setState({
                    sortBy: sortBy,
                    celebs: this.state.celebs.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
                })
            } else if (this.state.sortDir === 'down') {
                this.setState({
                    sortBy: sortBy,
                    celebs: this.state.celebs.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
                })
            }
        }

    }

    deleteItem = (myIndex) => {
        let tester = this.state.celebs.filter((_, index) => index !== myIndex);
        this.setState({
            tbd: myIndex,
            mainCheck: false,
            inbetweenCheck: false,
            bulkSelectText: "Select All"
        })
        this.state.celebs.forEach(celeb => {
            celeb.checked = false
        })
        setTimeout(() => {
            this.setState({
                tbd: -1,
                celebs: tester
            })
        }, 200)
    }

    addLine = () => {
        let newLine = {
            fname: 'Ian',
            lname: 'Curtis',
            credits: 100,
            bdate: 'July 15th 1956',
            ecolor: 'Blue',
            checked: false
        }
        let newCelebs = [...this.state.celebs, newLine]
        newCelebs = newCelebs.sort((a, b) => (a[this.state.sortBy] < b[this.state.sortBy]) ? 1 : -1)
        this.state.celebs.forEach(celeb => {
            celeb.checked = false
        })
        this.setState({
            celebs: newCelebs,
            mainCheck:false,
            inbetweenCheck:false,
            bulkSelectText: "Select All"
        }, () => {
            // this.sortBy(this.state.sortBy)
        })
    }

    menu = (index) => {
        return (
            <div className='moreMenu'>
                <div className='toolBtns'>
                    <div className='toolBtn' onClick={() => this.deleteItem(index)}>Delete</div>
                    <div className='toolBtn'>Edit</div>
                </div>
                <img src={MoreWhite} alt='' />
            </div>
        )
    }
    bulkSelect = () => {
        this.setState({
            mainCheck: !this.state.mainCheck,
            inbetweenCheck: false,
        })
        if (!this.state.mainCheck) {

            // let count = 0
            // let checker = () => {
            //     let holder = this.state.celebs
            //     if (count < this.state.celebs.length) {
            //         holder[count].checked = true
            //         this.setState({
            //             celebs: holder
            //         })
            //         ++count
            //     } else {
            //         console.log("clear");
            //         clearInterval(myInterval);
            //     }
            // }
            // checker()
            // let myInterval = setInterval(() => {
            //     checker()
            // }, 70);

            this.state.celebs.forEach(celeb=>{
                celeb.checked=true   
            })

            this.setState({
                bulkSelectText: this.state.celebs.length + " Selected"
            })
        } else {
            this.state.celebs.forEach(celeb => {
                celeb.checked = false
            })
            this.setState({
                bulkSelectText: "Select All"
            })
        }
    }

    individualCheck = (index) => {
        let updateOne = this.state.celebs
        if (updateOne[index].checked) {
            updateOne[index].checked = false
        } else {
            updateOne[index].checked = true
        }
        let checker = updateOne.filter(celeb => celeb.checked === false)
        let checked = updateOne.filter(celeb => celeb.checked !== false)

        if ((checker.length > 0 && checker.length < updateOne.length) && this.state.mainCheck) {
            if (checker.length < updateOne.length) {
                this.setState({
                    inbetweenCheck: true,
                    bulkSelectText: checked.length + " Selected"
                })
            }

        } else if (checker.length === updateOne.length && this.state.mainCheck) {
            this.setState({
                inbetweenCheck: false,
                mainCheck: false,
                bulkSelectText: "Select All"
            })
        }
        else {
            this.setState({
                inbetweenCheck: false,
                bulkSelectText: "Select All"
            })
        }
        if(checked.length>0 && checked.length<updateOne.length){
            this.setState({
                mainCheck:true,
                inbetweenCheck: true,
            })
        }

        this.setState({
            celebs: updateOne
        })

    }

    bulkDelete = () => {
        let filtered = this.state.celebs.filter(item => item.checked !== true)
        this.setState({
            celebs: filtered,
            mainCheck: false,
            inbetweenCheck: false,
            showModal: false
        })
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    hideModal = () => {
        this.setState({
            showModal: false
        })
    }


    download = () => {
        const fileData = JSON.stringify(this.state.celebs);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "celebrities.json";
        link.href = url;
        link.click();
    }

    render() {
        return (
            <div className='tableWrapper'>
                <div className='titleArea'>
                    <h1>Singer songwriters</h1>
                    <small className='h3'>An overview of 80’s & 90's alternative musicians</small>
                </div>
                {
                    this.state.showModal &&
                    <Dialog type="delete" onClick={() => this.bulkDelete()} onCancel={() => this.hideModal()} />
                }

                <div className='bulkTools'>
                    {this.state.celebs.length > 1 &&
                        <Checkbox label={this.state.bulkSelectText} onClick={() => this.bulkSelect()} checked={this.state.mainCheck} inbetween={this.state.inbetweenCheck} />
                    }
                    {this.state.mainCheck &&
                        <div className='rhs'>
                            <button onClick={() => this.showModal()}><img src={Trash} alt="" />delete</button>
                            <button onClick={() => this.download()}><img src={DonwloadIcon} alt="" />download</button>
                        </div>
                    }
                </div>

                <table className='merTable'>

                    <thead>
                        <tr>
                            <th >

                            </th>

                            <th onClick={() => this.sortBy('fname')}>
                                First Name
                                {this.state.sortBy === 'fname' ?
                                    <img src={TableArrow} alt='' className={this.state.sortDir === 'down' ? 'arrowUp' : ''} />
                                    :
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={() => this.sortBy('lname')}>
                                Last Name
                                {this.state.sortBy === 'lname' ?
                                    <img src={TableArrow} alt='' className={this.state.sortDir === 'down' ? 'arrowUp' : ''} />
                                    :
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={() => this.sortBy('credits')}>
                                Song Credits
                                {this.state.sortBy === 'credits' ?
                                    <img src={TableArrow} alt='' className={this.state.sortDir === 'down' ? 'arrowUp' : ''} />
                                    :
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={() => this.sortBy('bdate')}>
                                Birthdate
                                {this.state.sortBy === 'bdate' ?
                                    <img src={TableArrow} alt='' className={this.state.sortDir === 'down' ? 'arrowUp' : ''} />
                                    :
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={() => this.sortBy('ecolor')}>
                                Eye Color
                                {this.state.sortBy === 'ecolor' ?
                                    <img src={TableArrow} alt='' className={this.state.sortDir === 'down' ? 'arrowUp' : ''} />
                                    :
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.celebs.map((celeb, index) => {
                                return (
                                    <tr key={'tab' + index} className={this.state.tbd === index ? 'scaleOut' : ''}>
                                        <td className='checkBoxTd'><Checkbox checked={celeb.checked} onClick={() => this.individualCheck(index)} /> </td>
                                        <td className={this.state.sortBy === 'fname' ? 'activeColumn' : ''} >{celeb.fname}</td>
                                        <td className={this.state.sortBy === 'lname' ? 'activeColumn' : ''}>{celeb.lname}</td>
                                        <td className={this.state.sortBy === 'credits' ? 'activeColumn' : ''}>{celeb.credits}</td>
                                        <td className={this.state.sortBy === 'bdate' ? 'activeColumn' : ''}>{celeb.bdate}</td>
                                        <td className={this.state.sortBy === 'ecolor' ? 'activeColumn' : ''}>{celeb.ecolor}</td>
                                        <td onClick={() => this.showSubMenu(index)} className='moreBtn'>
                                            <img src={MoreIcon} alt='' />
                                            {this.state.menuIndex === index ?
                                                this.menu(index)
                                                : null
                                            }
                                        </td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <Button text="Add line" onClick={() => this.addLine()} />


            </div>
        );
    }
}

export default Tables;