import React from 'react';
import Heading from '../common/Heading';
import "../../styles/projects.scss";
import {projects} from "../../projects";
import Project from "../common/Project";

const Projects = () => {
  
  return (
    <div id='projects' className='container'>
      <Heading text={'Projects'}/>
      <div id='projects-list'>
          {projects.map(proj => <Project key={proj.name} project={proj}/>)}
      </div>
    </div>
  )
}

export default Projects;