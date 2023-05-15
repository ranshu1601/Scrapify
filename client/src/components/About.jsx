/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './css/About.css'

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
                            <img src="./img/01.png" alt='Person'/>
                            <h3>Steph Jobs</h3>
                            <h5>Artist</h5>
                            <div className="icons">
                                <a href="#"><i className="ri-github-fill" /></a>
                                <a href="#"><i className="ri-linkedin-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src="./img/02.png"alt='Person' />
                            <h3>Steph Jobs</h3>
                            <h5>Artist</h5>
                            <div className="icons">
                                <a href="#"><i className="ri-github-fill" /></a>
                                <a href="#"><i className="ri-linkedin-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src="./img/03.png" alt='Person'/>
                            <h3>Steph Jobs</h3>
                            <h5>Artist</h5>
                            <div className="icons">
                                <a href="#"><i className="ri-github-fill" /></a>
                                <a href="#"><i className="ri-linkedin-fill" /></a>
                                <a href="#"><i className="ri-instagram-fill" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <img src="./img/04.png" alt='Person'/>
                            <h3>Steph Jobs</h3>
                            <h5>Artist</h5>
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
