import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/nav.scss";
import { BsDownload } from 'react-icons/bs';
import Tom_Rossner_Resume from "../../assets/Tom_Rossner.pdf";
import Space from '../common/Space';
import { AppContext } from '../../context/AppContext';
import MenuIcon from './MenuIcon';
import Logo from '../common/Logo';
import DarkModeButton from '../common/DarkModeButton';
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Navigation = () => {
    const {menuOpen, closeMenu} = useContext(AppContext);
    
    const {theme} = useTheme();
    const {DARK} = THEME;

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = Tom_Rossner_Resume;
      link.download = 'Tom_Rossner.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }

  return (
    <>
    <section id='navbar' className={`${theme === DARK ? 'dark': ''}`}>
      <MenuIcon/>
      <Space/>
      <Logo/>
      <Space/>
      <DarkModeButton/>
      <nav id='navDesktop'>
        <Logo/>
        <Space/>
        <ul className={menuOpen ? 'open' : 'closed'}>
            <Link to={'/'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>Home</Link>
            <Link to={'/projects'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>Projects</Link>
            <Link to={'/about'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>About</Link>
            <Link to={'/contact'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>Contact</Link>
        </ul>
        <div className='buttons-container'>
          <button id='resume' onClick={handleDownload}>
            <BsDownload className='icon'/>
            Download Resume
          </button>
          
          <DarkModeButton/>
        </div>
      </nav>
    </section>
    </>
  )
}

export default Navigation;