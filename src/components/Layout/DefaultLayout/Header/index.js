import React , {useState, useEffect, useContext}from 'react'
import Style from './Header.module.css'
import Sidebar from '../Sidebar';
import { useNavigate } from "react-router-dom";
import logo from '../../../../img/logo.png'
import { MdMenu } from "react-icons/md";
import {GrClose} from 'react-icons/gr'

const Header = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const openSideBar = () => {
    if(!openSideMenu){
      setOpenSideMenu(true);
    }else {
      setOpenSideMenu(false);
    }
  };
  const CloseSideBar = () => {
      setOpenSideMenu(false);
  };
  return (
    
    <div className={Style.wrapper}>
       <div className={Style.inner}>
        <div className={Style.header_container}>
          <MdMenu className={Style.header_container_menu}  onClick={() => openSideBar()}/>          
        </div>
           {/* SIDBAR COMPONENT */}
        {openSideMenu && (
          <div className={Style.sideBar}>
            <Sidebar setOpenSideMenu = {setOpenSideMenu} 
            />
          </div>
        )}
       </div>
    </div>
  )
}

export default Header