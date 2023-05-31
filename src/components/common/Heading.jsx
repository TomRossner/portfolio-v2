import React from 'react';
import "../../styles/heading.scss";

const Heading = ({text}) => {
  return (
    <div className='heading'>
        <span className='background-text'>{text}</span>
        <h1 className='heading-text'>{text}</h1>
    </div>
  )
}

export default Heading;