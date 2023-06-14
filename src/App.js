import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Logo from './images/logo.svg'
import Cross from './images/cross.svg'

// IMPORT VIEWS
import HomeView from './Views/HomeView/HomeView';
import pageArray from './pagelist.js'


// SETUP ROUTES
class App extends Component {
  constructor(props) {
    super(props);
}
  state = {
    searchValue:'',
    pageArray:pageArray
  }
  componentDidMount(){
    let ordered = pageArray.sort((a,b) => (a['title'] > b['title']) ? 1 : ((b['title'] > a['title']) ? -1 : 0))
    this.setState({
      pageArray:ordered
    })
  }

   changed=(e)=>{

    let results = pageArray.filter(nav=>nav.title.toLowerCase().includes(e.target.value.toLowerCase()))
      this.setState({
        pageArray:results,
        searchValue:e.target.value
      })
  }

  clearSearch=()=>{
    this.setState({
      searchValue:'',
      pageArray:pageArray
    })
  }
  render(){  return (
    <Router>
      <div className='appWrap'>
        <nav>
          <NavLink to="/" className='logo'>
            <img src={Logo} alt="logo"/>
          </NavLink>

          <div className='searchForm'>
            <input onChange={(e)=>this.changed(e)} className='searchBar' placeholder='Search...' value={this.state.searchValue}/>
            {this.state.searchValue.length > 1 &&
              <div className='searchClearWrap' onClick={()=>this.clearSearch()}>
              <img src={Cross} alt="Search" className='searchClear'/>
              </div>
            }
          </div>
          <div className='viewList'>
          {
            this.state.pageArray.map((item,index)=>{
                  return(
                  <NavLink to={item.link} className={({ isActive }) => isActive ? 'selected' : 'link'} key={'Nav'+index}>
                    {item.title}
                  </NavLink>
                  )
            })
          }
          </div>
        </nav>

        <div className='mainViews'>
          <Routes>
          <Route path="/" element={<HomeView />} />
          {
            pageArray.map((item,index)=>{
                  return(
                  <Route path={'/'+item.link} element={<item.comp />} key={'Route'+index}>
                    {item.title}
                  </Route>
                  )
            })
          }
          </Routes>
        </div>
      </div>

    </Router>
  )}
}

export default App;

