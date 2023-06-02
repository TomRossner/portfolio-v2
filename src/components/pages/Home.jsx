import React from 'react';
import profile from "../../assets/TOM_PROFILE.jpg";
import { Link } from 'react-router-dom';
import Heading from '../common/Heading';
import useScrollReset from '../../hooks/useScrollReset';

const Home = () => {
  useScrollReset();
  
  return (
    <>
    <div id='home'>
        <div id='home-content'>
            <Heading text={`Hi, I'm Tom`}/>
            <Heading text={`I'm a Full Stack Developer`}/>
            <div className='buttons-container'>
                <Link to={'/projects'} className='link'>My projects</Link>
                <Link to={'/about'} className='link'>About me</Link>
            </div>
        </div>
        <img src={profile} alt="profile"/>
    </div>
    </>
  )
}

export default Home;