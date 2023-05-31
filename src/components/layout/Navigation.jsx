import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/nav.scss";
import { BsDownload } from 'react-icons/bs';
import Tom_Rossner_Resume from "../../assets/tomrossner.pdf";
import Space from '../common/Space';

const Navigation = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = Tom_Rossner_Resume;
      link.download = 'tomrossner.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }

  return (
    <nav>
        <div id='logo' onClick={() => navigate('/')}>tomrossner<span>.</span>dev</div>
        <Space/>
        <ul>
            <Link to={'/'} className='nav-link'>Home</Link>
            <Link to={'/projects'} className='nav-link'>Projects</Link>
            <Link to={'/about'} className='nav-link'>About</Link>
            <Link to={'/contact'} className='nav-link'>Contact</Link>
        </ul>
        <button id='resume' onClick={handleDownload}>
          <BsDownload className='icon'/>
          Download Resume
        </button>
    </nav>
  )
}

export default Navigation;