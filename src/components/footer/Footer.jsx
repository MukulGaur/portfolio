import React from 'react';
import './footer.css';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >MUKUL GAUR</a>

      <ul className='permalinks' >
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="insta"><BsInstagram/></a>
        <a href="fb"><BsFacebook/></a>
        <a href="twitter"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mukul Gaur. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer