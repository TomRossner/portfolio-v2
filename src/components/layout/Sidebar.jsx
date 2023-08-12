import React from 'react';
import "../../styles/sidebar.scss";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Sidebar = () => {
  const {theme} = useTheme();
  const {DARK} = THEME;

  return (
    <div id='sidebar' className={`${theme === DARK ? 'dark' : ''}`}>
        <a className={`sidebar-icon ${theme === DARK ? 'dark' : ''}`} href="https://github.com/TomRossner/"  target='_blank' rel='noreferrer'>
            <BsGithub className='icon'/>
        </a>
        <a id='linkedin' className={`sidebar-icon ${theme === DARK ? 'dark' : ''}`} href="https://www.linkedin.com/in/tom-rossner/" target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon'/>
        </a>
    </div>
  )
}

export default Sidebar;