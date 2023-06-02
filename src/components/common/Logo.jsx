import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/logo.scss";
import logo from "../../assets/tom.png";

const Logo = () => {
    const navigate = useNavigate();
  return (
    <div id='logo' onClick={() => navigate('/')}>
      <img src={logo} alt='logo'/>
    </div>
  )
}

export default Logo;