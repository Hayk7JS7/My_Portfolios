import React from 'react'
import portfolioReal from '../../assets/logo/portfolio-real.jpg';
import './About.css';

const About = () => {
    let url = "https://images.unsplash.com/photo-1606331926175-1472e97ac7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  return (
    <section className="about" id="about">
        <h2 className="heading">About <span>me</span></h2>

        <div className='about-img'>
          <img src={url} alt="portfolio" width="200px" height="200px"/>
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Frontend Developer!</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vero dolore, numquam dolor unde voluptate explicabo ea odio similique nam autem magnam quod aspernatur voluptatibus maiores amet sint aut natus consectetur in tempora aliquid. Architecto nihil molestiae sit molestias temporibus ad cum deserunt excepturi culpa inventore? Totam inventore ipsa porro.</p>

          <div className="btn-box btns">
            <a href="#" className='btn'>Read more</a>
          </div>
        </div>
      </section>
  )
}

export default About