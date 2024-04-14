import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/logo.scss";
import logo from "../../assets/tom.png";
import logoLight from "../../assets/tomLightText.png";
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Logo = () => {
    const {theme} = useTheme();
    const {DARK} = THEME;

    const navigate = useNavigate();
    
  return (
    <div id='logo' onClick={() => navigate('/')}>
      <img src={theme === DARK ? logoLight : logo} alt='logo'/>
      <span className={`${theme === DARK && 'dark'}`}>TOM ROSSNER</span>
    </div>
  )
}

export default Logo;