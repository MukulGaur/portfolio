import React from 'react';
import './project.css';

const Project = () => {
  return (
    <section id='projects'>
      <h5>My Projects</h5>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="Project Image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" >GitHub</a>
            <a href="github.com" className="btn btn-primary" target="_mukul" >Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="Project Image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" >GitHub</a>
            <a href="github.com" className="btn btn-primary" target="_mukul" >Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="Project Image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" >GitHub</a>
            <a href="github.com" className="btn btn-primary" target="_mukul" >Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project