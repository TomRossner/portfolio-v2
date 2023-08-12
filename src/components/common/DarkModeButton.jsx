import React, { useState } from 'react';
import {IoMoonSharp, IoSunnySharp} from "react-icons/io5";
import useTheme from '../../hooks/useTheme';
import { ANIMATE, THEME } from '../../utils/theme';
import "../../styles/theme-button.scss";

const DarkModeButton = () => {
    const {toggleTheme, theme} = useTheme();
    const {LIGHT, DARK} = THEME;
    
    const [animateLight, setAnimateLight] = useState(ANIMATE.IN); // Light
    const [animateDark, setAnimateDark] = useState(ANIMATE.OUT); // Dark

    const animate = () => {
        theme === LIGHT ? setAnimateDark(ANIMATE.OUT) : setAnimateDark(ANIMATE.IN); // Dark
        theme === LIGHT ? setAnimateLight(ANIMATE.IN) : setAnimateLight(ANIMATE.OUT); // Light
    }

  return (
    <button id='theme-button' onClick={toggleTheme} title='Toggle dark mode' className={`${theme === DARK ? 'dark' : ''}`}>
        <span
            className={`icon theme ${theme === LIGHT ? animateLight : animateDark} ${theme === DARK ? 'dark' : ''}`}
            onAnimationEnd={animate}
        >
            {theme === LIGHT ? <IoMoonSharp/> : <IoSunnySharp/>}
        </span>
    </button>
  )
}

export default DarkModeButton;