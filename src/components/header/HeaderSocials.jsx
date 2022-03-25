import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com" target="_mukul" ><BsLinkedin /></a>
        <a href="github.com" target="_mukul" ><BsGithub /></a>
        <a href="instagram.com" target="_mukul" ><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials