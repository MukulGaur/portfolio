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
          <img src={ME} alt="mukul" />
        </div>

        <div className="about__content">
          <p>
          👋🏻 Hi! I am a full-stack developer who is obsessed with the idea of improving himself,
          and I love building things for the web.<br/>
          Web development calls to all my passions; it incorporates creativity and problem solving
          and I am allowed to break it to improve the code ( in a separate Git branch, of course).<br/>
          I love applying responsive design principles and watching my web pages shrink into mobile
          screens and still look amazing. It’s oddly satisfying. I think in a way I’m kind of like
          those web pages; I’m moldable, but I still keep my creative flare intact.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About