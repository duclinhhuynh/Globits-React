import React from 'react'
import Style from './Sidebar.module.css'
import {GrClose} from 'react-icons/gr'
import { NavLink} from "react-router-dom";
const Sidebar = (props) => {
  const {setOpenSideMenu} = props;
  const closeSideBar = () => {
    setOpenSideMenu(false);
  };
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSideBar(); // Close the modal if click occurs outside modal content
    }
  };
  return (
    <div className={Style.SideBar} onClick={handleOutsideClick}>
      <div className={Style.SideBar_box}>
        <GrClose className={Style.SideBar_closeBtn} onClick={() => closeSideBar()} />
        <div className={Style.SideBar_menu}>
          <NavLink className={Style.SideBar_menu_box} to="/"><p>Home Page</p></NavLink>
          <NavLink className={Style.SideBar_menu_box} to="/Countries"><p>countries</p></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar