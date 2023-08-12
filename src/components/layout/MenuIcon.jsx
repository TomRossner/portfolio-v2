import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import "../../styles/menu-icon.scss";
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const MenuIcon = () => {
    const {menuOpen, toggleMenu} = useContext(AppContext);
    const {theme} = useTheme();
    const {DARK} = THEME;

  return (
    <div id='hamburger' className={menuOpen ? 'open' : 'closed'} onClick={toggleMenu}>
        <div className={`line ${theme === DARK ? 'dark' : ''}`}/>
        <div className={`line ${theme === DARK ? 'dark' : ''}`}/>
        <div className={`line ${theme === DARK ? 'dark' : ''}`}/>
    </div>
  )
}

export default MenuIcon;