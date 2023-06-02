import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import "../../styles/menu-icon.scss";

const MenuIcon = () => {
    const {menuOpen, toggleMenu} = useContext(AppContext);

  return (
    <div id='hamburger' className={menuOpen ? 'open' : 'closed'} onClick={toggleMenu}>
        <div className='line'/>
        <div className='line'/>
        <div className='line'/>
    </div>
  )
}

export default MenuIcon;