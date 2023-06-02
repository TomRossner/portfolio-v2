import React, { useEffect, useRef, useState } from 'react';
import "../../styles/about.scss";
import profile from "../../assets/TOM_PROFILE.jpg";
import profile2 from "../../assets/tomprofile-1.jpg";
import tomTMB from "../../assets/tom_tmb.jpg";
import { Link } from 'react-router-dom';
import Heading from '../common/Heading';
import { techs } from '../../utils/techstack';
import useScrollReset from '../../hooks/useScrollReset';

const About = () => {
  const index = useRef(0);
  const images = [profile, tomTMB, profile2];
  const [currentImg, setCurrentImg] = useState(images[index.current]);
  const [animate, setAnimate] = useState(false);
  useScrollReset();

  const showNext = () => {
    const imgIndex = index.current + 1;
    index.current = imgIndex;
    
    if (index.current >= images.length) {
      index.current = 0;
      setCurrentImg(images[index.current]);
      return;
    } else {
      setCurrentImg(images[imgIndex]);
    }
  }

  useEffect(() => {
    if (!currentImg) return;
    else {
      setAnimate(true);

      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [currentImg]);

  return (
    <div id='aboutContainer'>
      <div id='about' className='container'>
        <Heading text={'About me'}/>
        <div id='aboutContent'>
          <div id='aboutText'>
            <p>Hello, I'm Tom Rossner, a Full Stack developer with a passion for creating robust and innovative web applications. Proficient in technologies such as <span>React & Redux, Node.js, MongoDB, and Express</span>, I specialize in developing dynamic and user-friendly solutions.</p>
            <p>With a strong focus on writing clean and maintainable code, I strive to deliver high-quality products that meet the needs of both clients and end-users. My attention to detail ensures that every aspect of the development process is thoroughly considered, resulting in seamless and efficient applications.</p>
            <p>As a problem solver by nature, I enjoy tackling complex challenges and finding creative solutions. I thrive in fast-paced environments where I can apply my quick-learning abilities to stay up-to-date with the latest industry trends and technologies. This adaptability allows me to rapidly acquire new skills and apply them effectively to deliver outstanding results.</p>
            <p>In my professional journey, I have successfully completed projects that demanded a diverse range of technical expertise, providing me with a well-rounded skill set. This allows me to contribute effectively to all stages of development, from conceptualization and design to implementation and deployment.</p>
            <p>I'm excited to collaborate with forward-thinking individuals and organizations to bring their ideas to life. Feel free to explore my portfolio and get in touch with me to discuss potential opportunities. Let's create something exceptional together!</p>

            <div className='buttons-container'>
              <Link className='link' to={'/projects'}>Check out my projects</Link>
              <Link className='link' to={'/contact'}>Get in touch with me!</Link>
            </div>
          </div>
          <div id='images-techStack'>
            <div className='images-container'>

              <div className={animate ? 'img-container animate' : 'img-container'} onClick={showNext}>
                <img src={currentImg} alt="profile"/>
              </div>

              {images.filter(img => img !== currentImg).map((img, index) => (
                <div className='img-container' key={index}>
                  <img src={img} alt="profile"/>
                </div>
              ))}

            </div>

            <div id='tech-stack'>
              <div className='stack'>
                {techs.map(tech => (
                  <div className='tech' key={tech.name} title={tech.name}>
                    <img src={tech.logo} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;