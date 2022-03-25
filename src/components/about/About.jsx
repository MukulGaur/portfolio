import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
import { MdWorkOutline } from 'react-icons/md';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About