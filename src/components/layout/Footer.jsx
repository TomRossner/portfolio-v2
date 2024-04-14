import React from 'react';
import "../../styles/footer.scss";
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Footer = () => {
  const {theme} = useTheme();
  const {DARK} = THEME;

  const year = new Date().getFullYear();
  
  return (
    <footer className={`${theme === DARK && 'dark'}`}>
        <p>Portfolio by Tom Rossner&copy; {year} | All rights reserved</p>
    </footer>
  )
}

export default Footer;