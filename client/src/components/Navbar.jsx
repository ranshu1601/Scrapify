/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im'
import './css/Navbar.css'
import { Navigate } from 'react-router-dom';

function Navbar({ setProduct }) {
  const [query, setQuery] = useState("");

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearchClick();
  })


  const handleSearchClick = () => {
    if (query !== "") {
      setProduct(query);
    };
  }
  return (
    <div className='shadow-lg'>
      <nav className="navbar bg-body-tertiary shadow-lg py-2">
        <div className="container-fluid d-flex justify-content-around">
          <a className="navbar-brand font1 fs-2 text">Scrapify</a>
          <form className="d-flex" role="search" action='search'>
            <input className="form-control me-2 rounded-5 py-2" type="search" placeholder="enter product name ..." aria-label="enter product name ..." onChange={(e) => setQuery(e.currentTarget.value)} />
            <Navigate to='/search' className='text-decoration-none'>
              <button className="btn bg-transparent p-0" type="submit" onClick={handleSearchClick} ><ImSearch /></button>
            </Navigate>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
