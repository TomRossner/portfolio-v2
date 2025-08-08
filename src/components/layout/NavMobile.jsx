import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Tom_Rossner_Resume from "../../assets/Tom_Rossner.pdf";
import { BsDownload } from 'react-icons/bs';
import Sidebar from './Sidebar';
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const NavMobile = () => {
    const {closeMenu, menuOpen, } = useContext(AppContext);
    
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
    <nav id='navMobile' className={`${menuOpen ? 'open' : 'closed'} ${theme === DARK && 'dark'}`}>
        <ul className={menuOpen ? 'open' : 'closed'}>
            <Link to={'/'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>Home</Link>
            <Link to={'/projects'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>Projects</Link>
            <Link to={'/about'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>About</Link>
            <Link to={'/contact'} className={`nav-link ${theme === DARK && 'dark'}`} onClick={closeMenu}>Contact</Link>
        </ul>
        {/* <button id='resume' onClick={handleDownload}>
          <BsDownload className='icon'/>
          Download Resume
        </button> */}
        <div id='github-linkedin-buttons' className={`${theme === DARK && 'dark'}`}>
          <h2>Find me on</h2>
          <Sidebar/>
        </div>
    </nav>
  )
}

export default NavMobile;