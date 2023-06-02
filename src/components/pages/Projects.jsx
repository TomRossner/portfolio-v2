import React from 'react';
import Heading from '../common/Heading';
import "../../styles/projects.scss";
import {projects} from "../../utils/projects";
import Project from "../common/Project";
import useScrollReset from '../../hooks/useScrollReset';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  useScrollReset();
  
  return (
    <div id='projects' className='container'>
      <Heading text={'Projects'}/>
      <div id='projects-list'>
          {projects.map(proj => <Project key={proj.name} project={proj}/>)}
      </div>

      <a href="https://github.com/TomRossner/" target='_blank' rel='noreferrer' id='moreProjects'><BsGithub className='icon'/>See more projects on Github</a>
    </div>
  )
}

export default Projects;