import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Logo from './images/logo.svg'

// IMPORT VIEWS
import HomeView from './Views/HomeView/HomeView';

import pageArray from './pagelist.js'

// SETUP ROUTES
function App() {
  
  return (

    <Router>
      <div className='appWrap'>
        <nav>
          <NavLink to="/" className='logo'>
            <img src={Logo} alt="logo"/>
          </NavLink>
          {
            pageArray.map((item,index)=>{
                  return(
                  <NavLink to={item.link} className={({ isActive }) => isActive ? 'selected' : 'link'} key={'Nav'+index}>
                    {item.title}
                  </NavLink>
                  )
            })
          }
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
  );
}

export default App;

