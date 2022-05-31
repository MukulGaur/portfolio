import React from 'react';
import './header.css'
import CV from './Cta';
import ME from '../../assets/photo.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mukul Gaur</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CV />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header