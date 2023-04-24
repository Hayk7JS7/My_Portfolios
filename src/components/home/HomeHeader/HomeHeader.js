import React from 'react'
import './HomeHeader.css'
import github from '../../../assets/logo/github.svg'
import linkedin from '../../../assets/logo/linkeding.svg'

const HomeHeader = () => {
  return (
    <div>
    <section className="home" id="home">
        <div className="home-content">
            <h1>Hi, I'm <span>Hayk Zhamharyan</span></h1>
            <div className="text-animate">
                <h3>Frontend Developer</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta est, corrupti modi deserunt quam rerum sed, veritatis recusandae, doloremque ipsam sunt. Modi, dolores deleniti! Nostrum, dolore maxime!</p>
        
            <div className="btn-box">
                <a href="#" className="btn">hire me</a>
                <a href="##" className="btn">Let's talk</a>
            </div>
        </div>

        <div className='home-sci'>
            <a href="https://github.com/Hayk7JS7?tab=repositories" target='__blanket'><img src={github} alt="git" className='bx bxl-github' /></a>
            <a href="https://www.linkedin.com/onboarding/start/profile-location/new/" target='__blanket'><img src={linkedin} alt="linkedin" className='bx-bxl-linked' /></a>
        </div>
        
        <div className='home-imgHover'></div>
    </section>
    </div>
  )
}

export default HomeHeader
