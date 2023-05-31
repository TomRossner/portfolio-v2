import React from 'react';

const Project = ({project}) => {
    const {name, technologies, shortDesc, description, repoLink, webPage} = project;

  return (
    <div className='project'>
        <div className='project-name'>
          <h2>{name}</h2>
          <span>{shortDesc}</span>
        </div>
        <p className='project-description'>{description}.</p>
        <div className='buttons-container'>
          <a href={webPage} target='_blank' rel='noreferrer' className='link'>Live app</a>
          <a href={repoLink} target='_blank' rel='noreferrer' className='link'>Source code</a>
        </div>
        <hr />
        <div className='project-tech'>
        {technologies.map(tech => (
            <div key={tech.name} className='tech' title={tech.name}>
              <img src={tech.logo} alt={tech.name}/>
              <span>{tech.name}</span>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Project;