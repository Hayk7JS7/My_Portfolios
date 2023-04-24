import React from 'react'
import './Education.css'
import calendar from '../../assets/calendar.svg'

const Education = () => {
  return (
    <section className='education' id='education'>
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
            <div className="education-column">
                <h3 className="title">Educations</h3>
                
                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2018-19</div>
                            <h3>Finished school</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2019-20</div>
                            <h3>Finished school</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2021-22</div>
                            <h3>Finished school</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="education-column">
                <h3 className="title">Expierence</h3>
                
                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2018-19</div>
                            <h3>Freelance</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2019-20</div>
                            <h3>Freelance</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                        </div>
                    </div>

                    <div className="education-content">
                        <div className="content">
                            <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2021-22</div>
                            <h3>Freelance</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Education