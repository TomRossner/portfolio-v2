import React from 'react';
import profile from "../../assets/TOM_PROFILE.jpg";
import { Link } from 'react-router-dom';
import Heading from '../common/Heading';
import useScrollReset from '../../hooks/useScrollReset';
import useTheme from '../../hooks/useTheme';
import { THEME } from '../../utils/theme';

const Home = () => {
  const {theme} = useTheme();
  const {DARK} = THEME;
  
  useScrollReset();
  
  return (
    <>
    <div id='home'>
        <div id='home-content'>
            <Heading text={`Hi, I'm Tom`}/>
            <Heading text={`I'm a Full Stack Developer`}/>
            <div className='buttons-container'>
                <Link to={'/projects'} className={`link ${theme === DARK ? 'dark' : ''}`}>My projects</Link>
                <Link to={'/about'} className={`link ${theme === DARK ? 'dark' : ''}`}>About me</Link>
            </div>
        </div>
        <img src={profile} alt="profile" loading='lazy'/>
    </div>
    </>
  )
}

export default Home;