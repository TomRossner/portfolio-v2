import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Tom_Rossner_Resume from "../../assets/tomrossner.pdf";
import { BsDownload } from 'react-icons/bs';
import Sidebar from './Sidebar';

const NavMobile = () => {
    const {closeMenu, menuOpen, } = useContext(AppContext);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = Tom_Rossner_Resume;
        link.download = 'tomrossner.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
    }

  return (
    <nav id='navMobile' className={menuOpen ? 'open' : 'closed'}>
        <ul className={menuOpen ? 'open' : 'closed'}>
            <Link to={'/'} className='nav-link' onClick={closeMenu}>Home</Link>
            <Link to={'/projects'} className='nav-link' onClick={closeMenu}>Projects</Link>
            <Link to={'/about'} className='nav-link' onClick={closeMenu}>About</Link>
            <Link to={'/contact'} className='nav-link' onClick={closeMenu}>Contact</Link>
        </ul>
        <button id='resume' onClick={handleDownload}>
          <BsDownload className='icon'/>
          Download Resume
        </button>
        <Sidebar/>
    </nav>
  )
}

export default NavMobile;