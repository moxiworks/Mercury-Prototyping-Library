import React, { Component } from 'react';
import './Dropdown.scss'
import { ReactComponent as Chevron } from '../../images/chevron.svg'
import Button from '../Button/Button';
export default class Dropdown extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            showMenu: false,
            lineLength:"790",
            totalLength:''
        }
        this.dropWrap = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    showChildren=()=>{
        this.setState(({ show }) => ({ show: !show }));
    }
    showMenu=()=>{
        this.setState(({ showMenu }) => ({ showMenu: !showMenu }));
    }

    changeLine=(length)=>{

        this.setState({
            lineLength: this.state.totalLength-(this.state.totalLength*length.target.value)/100
        })
    }

    handleClickOutside(event) {
        if (this.dropWrap && this.dropWrap.current && ! this.dropWrap.current.contains(event.target)) {
          this.setState({
            focused:false,
            showMenu: false
          })
        }
      }

    render() {
        return (
            <div className='mainWrapper' ref={this.dropWrap}>
                <div className='buttonWrap'>
                    <Button onClick={()=>this.showMenu()} text="Click to show menu"/>
                </div>
            <div className='dropdownWrapper'>
               <div className={this.state.showMenu ? 'dropdown dropdownOpen' : 'dropdown'}>
                    <div className='item'>Item</div>
                    <div className='item'>Item</div>
                    <div className={this.state.show ? 'hasChild openChild' : 'hasChild'}>
                            <div className='itemTitle'  onClick={()=>this.showChildren()}> 
                            <div>Item Title </div>
                            <Chevron stroke={this.state.show ? "white" :"#597897"}/>
                            </div>
                            <div className='subItems'>
                            <div className='item subItem'>SubItem</div>
                            <div className='item subItem' >SubItem</div>
                            <div className='item subItem'>SubItem</div>
                            </div>
                    </div>
                    <div className='item'>Item</div>
                    <div className='item'>Item</div>
               </div>
            </div>
            </div>
        )
    }
}