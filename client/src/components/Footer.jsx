/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="d-flex flex-column h-100 ">
            <footer className="w-100 py-2 flex-shrink-0">
                <div className="container py-2">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-6 col-md-6">
                            <h5 className="h1 text-white">Scrapify</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary links" href="#">Scrapify.com</a></p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><Link to="/" className='links'>Home</Link></li>
                                <li><Link to="/about" className='links'>About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
