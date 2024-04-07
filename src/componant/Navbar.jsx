import React, { useState } from 'react'
import { Outlet, Link, BrowserRouter } from "react-router-dom";

import './Navbar.css';

import groupIcon from '../images/groupIcon.png';
import upArrow from '../images/up.png';
import downArrow from '../images/down.png';
import homeIcon from '../images/homeIcon.png';
import homeIcon_filled from '../images/homeIcon_filled.png';
import addgroupIcon from '../images/addgroupIcon.png';
import postIcon from  '../images/postIcon.png';
import postIcon_filled from  '../images/postIcon_filled.png';
import settingIcon from  '../images/settingIcon.png';
// componant

function Navbar() {
  // let [select , changeSelect]= useState('Home');
  let [select, changeSelect] = useState("Home");
  return (
    <div className='Navbar'>
      <BrowserRouter>
        <nav>
      <ul className='primary_navbar'>
        <li onClick={()=>{changeSelect('Home')}}><img src={select=="Home" ? homeIcon_filled : homeIcon} alt="img" />
           <Link to='/'>Home</Link>
        </li>
        <li >
          
          <img src={addgroupIcon} alt="" />
          <Link to='/createPost'> Create Group </Link>
          </li>
        <li  >
          <img src={select='postIcon' ? postIcon_filled: postIcon} alt=""  />
          <Link to='/post'> Your Post </Link>
          </li>
      </ul>
       <div className="underline"></div>
      <ul className='groups_navbar'>
        <li><h2>Groups</h2></li>
        <li>
          <img src={groupIcon} alt="img" />
          <h3>groupName</h3>
          </li>
          <li>
          <img src={groupIcon} alt="img" />
          <h3>groupName</h3>
          </li>
          <li>
          <img src={groupIcon} alt="img" />
          <h3>groupName</h3>
          </li>
          <li>
          <img src={groupIcon} alt="img" />
          <h3>groupName</h3>
          </li>

          <div>
            <img src={upArrow} alt="" className='expand' />
          </div>
      </ul>
      <div className="underline"></div>
        <ul>
          <li>
            <img src={settingIcon} alt="" />
            <Link to='/setting'>Setting</Link>
          </li>
          <li className='noIcon'>
            
            <div >  About Us</div>
            </li>
             <li className='noIcon'>
              <div>
                Sign Out
                </div>
                </li>
        </ul>
          
      </nav>
      </BrowserRouter>
      {/* <Outlet /> */}
      </div>
  )
}

export default Navbar;