import React, { Component } from 'react';
import MoreIcon from '../../images/more.svg'
import MoreWhite from '../../images/more-white.svg'
import TableArrow from '../../images/table-arrow.svg'
import Button from '../Button/Button'
import './Tables.scss'
class Tables extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        menuIndex:-1,
        tbd: -1,
        sortBy: 'fname',
        sortDir: 'down',
        celebs: [
            {
                fname: 'Robert',
                lname: 'Smith',
                credits: 350,
                bdate: 'April 21st 1959',
                ecolor: 'Blue'
            },
            {
                fname: 'Steven',
                lname: 'Morrissey',
                credits: 180,
                bdate: 'May 22nd 1959',
                ecolor: 'Blue'
            },
            {
                fname: 'Siouxsie',
                lname: 'Sioux',
                credits: 90,
                bdate: 'May 27nd 1957',
                ecolor: 'Brown'
            }
        ]
    }
    componentDidMount(){
       this.sortBy(this.state.sortBy)
    }
    showSubMenu=(index)=>{
        if(this.state.menuIndex===index){
            this.setState({
                menuIndex: -1
            })
        }else{
            this.setState({
                menuIndex: index
            })
        }
    }

    sortBy=(sortBy)=>{
        if(this.state.sortDir==='down' && sortBy===this.state.sortBy){
            this.setState({
                sortBy: sortBy,
                sortDir: 'up',
                celebs: this.state.celebs.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
            })
        }else if(this.state.sortDir==='up' && sortBy===this.state.sortBy){
            this.setState({
                sortBy: sortBy,
                sortDir: 'down',
                celebs: this.state.celebs.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
            })
        }else {
            if(this.state.sortDir==='up'){
                this.setState({
                    sortBy: sortBy,
                    celebs: this.state.celebs.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
                })
            }else if(this.state.sortDir==='down'){
                this.setState({
                    sortBy: sortBy,
                    celebs: this.state.celebs.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
                })
            }
        }
        
    }

    deleteItem=(myIndex)=>{
        let tester= this.state.celebs.filter((_, index) => index !== myIndex);
        console.log(tester);
        this.setState({
            tbd: myIndex
        })
        setTimeout(()=>{
            this.setState({
                tbd: -1,
                celebs: tester
            })
            },200)
    }

    addLine=()=>{
        let newLine={
            fname: 'Ian',
            lname: 'Curtis',
            credits: 100,
            bdate: 'July 15th 1956',
            ecolor: 'Blue'
        }
        let newCelebs = [...this.state.celebs,newLine]
        newCelebs =  newCelebs.sort((a, b) => (a[this.state.sortBy] < b[this.state.sortBy]) ? 1 : -1)
        this.setState({
            celebs: newCelebs
        },()=>{
            // this.sortBy(this.state.sortBy)
        })
    }

    menu=(index)=>{
        return(
            <div className='moreMenu'>
                <div className='toolBtns'>
                <div className='toolBtn' onClick={()=>this.deleteItem(index)}>Delete</div>
                <div className='toolBtn'>Edit</div>
                </div>
                <img src={MoreWhite} alt=''/>
            </div>
        )
    }
    render() {
        return (
            <div className='tableWrapper'>
                 <div className='titleArea'>
                <h1>Singer songwriters</h1>
                <small className='h3'>An overview of 80’s & 90's alternative musicians</small>
                </div>

                <table className='merTable'>

                    <thead>
                        <tr>
                            <th onClick={()=>this.sortBy('fname')}>
                                First Name
                                {this.state.sortBy==='fname' ?
                                    <img src={TableArrow} alt='' className={this.state.sortDir==='down'?'arrowUp':''}/>
                                    : 
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={()=>this.sortBy('lname')}>
                                Last Name
                                {this.state.sortBy==='lname' ?
                                    <img src={TableArrow} alt=''  className={this.state.sortDir==='down'?'arrowUp':''}/>
                                    : 
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={()=>this.sortBy('credits')}>
                                Song Credits
                                {this.state.sortBy==='credits' ?
                                    <img src={TableArrow} alt=''  className={this.state.sortDir==='down'?'arrowUp':''}/>
                                    : 
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={()=>this.sortBy('bdate')}>
                                Birthdate
                                {this.state.sortBy==='bdate' ?
                                    <img src={TableArrow} alt=''  className={this.state.sortDir==='down'?'arrowUp':''}/>
                                    : 
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th onClick={()=>this.sortBy('ecolor')}>
                                Eye Color
                                {this.state.sortBy==='ecolor' ?
                                    <img src={TableArrow} alt=''  className={this.state.sortDir==='down'?'arrowUp':''}/>
                                    : 
                                    <div className='noArrow'></div>
                                }
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        this.state.celebs.map((celeb, index) => 
                            {
                                return (
                                    <tr key={'tab'+index} className={this.state.tbd===index ? 'scaleOut':''}>
                                        <td className={this.state.sortBy === 'fname' ? 'activeColumn':''} >{celeb.fname}</td>
                                        <td className={this.state.sortBy === 'lname' ? 'activeColumn':''}>{celeb.lname}</td>
                                        <td className={this.state.sortBy === 'credits' ? 'activeColumn':''}>{celeb.credits}</td>
                                        <td className={this.state.sortBy === 'bdate' ? 'activeColumn':''}>{celeb.bdate}</td>
                                        <td className={this.state.sortBy === 'ecolor' ? 'activeColumn':''}>{celeb.ecolor}</td>
                                        <td onClick={()=>this.showSubMenu(index)} className='moreBtn'>
                                            <img src={MoreIcon} alt=''/>
                                            {this.state.menuIndex === index ? 
                                                this.menu(index)
                                                :null
                                            }
                                        </td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            <Button text="Add line" onClick={()=>this.addLine()}/>


            </div>
        );
    }
}

export default Tables;