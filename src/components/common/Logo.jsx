import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/logo.scss";

const Logo = () => {
    const navigate = useNavigate();
  return (
    <div id='logo' onClick={() => navigate('/')}>tomrossner<span>.</span>dev</div>
  )
}

export default Logo;