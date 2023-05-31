import React from 'react';
import "../../styles/footer.scss";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>Portfolio by Tom Rossner&copy; {year} | All rights reserved</p>
    </footer>
  )
}

export default Footer;