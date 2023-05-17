/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './css/About.css'
import img1 from './img/01.png'
import img2 from './img/02.png'
import img3 from './img/03.png'
import img4 from './img/04.png'

function About() {
    return (
        <div>
            <div>
                {/* <nav>
                    <div className="logo">
                        <a href="#"><i class="fas fa-arrow-left"></i></a>
                        <h2>Scrapify</h2>
                    </div>
                    <div className="search">
                        <input type="text" className="form-control" />
                        <a href="#"><i className="ri-search-line" /></a>
                    </div>
                </nav> */}
                <section className="team">
                    <div className="center">
                        <h1>Our Team</h1>
                    </div>
                    <div className="team-content">
                        <div className="box">
                            <img src={img1} alt='Person'/>
                            <h3>Niketan Swami</h3>
                            <h5>Full Stack Developer</h5>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/niketan-swami-b74491152/" target='_blank'><i className="ri-github-fill" /></a>
                                <a href="https://github.com/Niketan1604" target='_blank'><i className="ri-linkedin-fill" /></a>
                                <a href="https://www.instagram.com/_nik0091/" target='_blank'><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img2} alt='Person' />
                            <h3>Prakhar Kori</h3>
                            <h5>Jugaadu</h5>
                            <div className="icons">
                                <a href="#"><i className="ri-github-fill" /></a>
                                <a href="#"><i className="ri-linkedin-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img3} alt='Person'/>
                            <h3>Bhuwanesh Choudhary</h3>
                            <h5>E sala cup namde</h5>
                            <div className="icons">
                                <a href="#"><i className="ri-github-fill" /></a>
                                <a href="#"><i className="ri-linkedin-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img4} alt='Person'/>
                            <h3>Anshu Ranjan</h3>
                            <h5>CR and Tomperr</h5>
                            <div className="icons">
                                <a href="#"><i className="ri-github-fill" /></a>
                                <a href="#"><i className="ri-linkedin-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About
