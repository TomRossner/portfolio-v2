import React from 'react';
import "../../styles/sidebar.scss";
import {BsGithub, BsLinkedin} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div id='sidebar'>
        <a className='sidebar-icon' href="https://github.com/TomRossner/"  target='_blank' rel='noreferrer'>
            <BsGithub className='icon'/>
        </a>
        <a id='linkedin' className='sidebar-icon' href="https://www.linkedin.com/in/tom-rossner/" target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon'/>
        </a>
    </div>
  )
}

export default Sidebar;