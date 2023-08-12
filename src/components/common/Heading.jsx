import React from 'react';
import "../../styles/heading.scss";
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Heading = ({text}) => {
  const {theme} = useTheme();
  const {DARK} = THEME;

  return (
    <div className='heading'>
        <span className={`background-text ${theme === DARK ? 'dark' : ''}`}>{text}</span>
        <h1 className={`heading-text ${theme === DARK ? 'dark' : ''}`}>{text}</h1>
    </div>
  )
}

export default Heading;