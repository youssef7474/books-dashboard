import React from 'react';
import "./HomeLayOut.css"
//import Header from '../../components/Header/Header';
import Sidebar from "../../components/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom';
import HeaderDash from '../../components/HeaderDash/HeaderDash';

const HomeLayOut = () => {
  return (
   
   
    <div className='page d-flex'>
        <div className="content " style={{width:"100%"}} >
            <HeaderDash></HeaderDash>
            <Outlet></Outlet>
        </div>
        <Sidebar></Sidebar>
    </div>

  );
}



export default HomeLayOut;
