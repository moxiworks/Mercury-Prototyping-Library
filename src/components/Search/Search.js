import React, { Component } from 'react';
import Label from '../Label/Label';
import Cross  from '../../images/cross.svg'
import SearchLoader from '../../images/small-loader.svg'
import Button from '../Button/Button';
import './Search.scss'
class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false,
            error: this.props.error,
            showCross:false,
            text: '',
            searching: false,
            showButton:false
        }
        this.inputRef = React.createRef();
    }
    componentDidMount() {
      
        const newImage = new Image();
        newImage.src = SearchLoader;
        const newImage2 = new Image();
        newImage2.src = Cross;
    }
    componentDidUpdate(){
        if(this.props.error !== this.state.error){
            this.setState({
                error: this.props.error
            })
        }

       
    }
    focusInput=()=>{
        this.setState(({ focused }) => ({ focused: !focused }));
    }
    changeText=(e)=>{
            this.setState({
                showCross: e.target.value.length> 0 ? true : false,
                showButton: e.target.value.length> 0 ? true : false,
                text: e.target.value
            })
    }
    checkEnter=(e)=>{
        if(e.key=== 'Enter' && this.state.text.length>0){
            this.search()
        }
    }
    clearText=()=>{
        this.inputRef.current.focus()
        this.setState({
            showCross: false,
            searching: false,
            showButton: false,
            text: '',
            focused:true
        })
        
    }
    search=()=>{
        this.inputRef.current.focus()
        this.setState({
            searching: true,
            showCross: false,
            focused:true
        })
        setTimeout(() => {
            this.setState({
                searching: false,
                showCross:true
            })
        }, 2000);
    }

   
    render() {
        return (
            <div 
            className={
                this.state.error && this.state.focused  ?
                "searchWrap  searchError searchErrorFocused"
                : this.state.focused ? 
                "searchWrap searchWrapFocused" 
                : this.state.error ?
                 "searchWrap searchError"
                : "searchWrap"
            }
            >
                <Label text="Search" for="searchInput" subText={this.state.error ? "This field is required":""}/>
                <input 
                id="searchInput"
                className='searchInput'
                ref={this.inputRef}  
                placeholder="Search for things..." 
                value={this.state.text} 
                onFocus={()=>this.focusInput()}
                onBlur={()=>this.focusInput()} 
                onChange={(e)=>this.changeText(e)}
                onKeyDown={(e)=>this.checkEnter(e)}
                />
                {this.state.showCross ? 
                <div className="clearButtonsearch" onClick={()=>this.clearText()}><img src={Cross} alt="Clear Search"/></div>
                : null}
                {this.state.showButton ? 
                <Button text="Search" type={this.state.searching ? "search" : "small"} onClick={()=>this.search()}/>
                : null}
            </div>
        )
    }
}
 
export default Search;