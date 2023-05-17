import { React, useState } from 'react'
import { ImSearch } from 'react-icons/im'
import { Link } from 'react-router-dom';

import camera from './img/camera.jpg'
import mobile from './img/mobile.jpg'
import AC from './img/AC.jpg'
import fridge from './img/fridge.jpg'
import laptop from './img/laptop.jpg'
import tablet from './img/tablet.jpg'


function Home({ setProduct, setAmazonData, setFlipkartData }) {
    const [query, setQuery] = useState("");

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSearchClick();
    })


    const handleSearchClick = () => {
        if (query !== "") {
            setAmazonData(null);
            setFlipkartData(null);
            setProduct(query)
        };
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='text-center font1 fs-1 p-5' >
                    Scrapify
                </div>
                <form className="d-flex justify-content-center">
                    <input
                        type="search"
                        className="form-control-lg form-control rounded w-50 "
                        placeholder="Enter product name"
                        aria-label="Enter product name"
                        aria-describedby="search-addon"
                        onChange={(e) => setQuery(e.currentTarget.value)}
                    />
                    <Link to='/search' className='text-decoration-none'>
                        <button className="btn bg-transparent" type="submit" onClick={handleSearchClick}><ImSearch style={{ height: '3vh', width: '3vw' }} /></button>
                    </Link>
                </form>
                <div className="container text-center py-5">
                    <h4 className='text-start px-4 pt-5'>Top Searches</h4>
                    <div className="row justify-content-around gx-5">
                        <div className=" col-auto py-2 my-4 bg-light rounded" >
                            <Link to="/search" className='text-decoration-none' onClick={() => setProduct("Mobiles")}>
                                <img src={mobile} className="rounded img-thumbnail img-center mx-auto" alt="..." style={{ height: '70px', width: '70px' }} />
                                <p className='pt-3 text-black'>Mobiles</p>
                            </Link>
                        </div>
                        <div className=" col-auto py-2 my-4 bg-light rounded" >
                            <Link to="/search" className='text-decoration-none' onClick={() => setProduct("Laptops")}>
                                <img src={laptop} className="rounded img-thumbnail img-center mx-auto" alt="..." style={{ height: '70px', width: '70px' }} />
                                <p className='pt-3 text-black'>Laptops</p>
                            </Link>
                        </div>
                        <div className=" col-auto py-2 my-4 bg-light rounded" >
                            <Link to="/search" className='text-decoration-none' onClick={() => setProduct("Tablets")}>
                                <img src={tablet} className="rounded img-thumbnail img-center mx-auto" alt="..." style={{ height: '70px', width: '70px' }} />
                                <p className='pt-3 text-black'>Tablets</p>
                            </Link>
                        </div>
                        <div className=" col-auto py-2 my-4 bg-light rounded" >
                            <Link to="/search" className='text-decoration-none' onClick={() => setProduct("Camera")}>
                                <img src={camera} className="rounded img-thumbnail img-center mx-auto" alt="..." style={{ height: '70px', width: '70px' }} />
                                <p className='pt-3 text-black'>Camera</p>
                            </Link>
                        </div>
                        <div className=" col-auto py-2 my-4 bg-light rounded" >
                            <Link to="/search" className='text-decoration-none' onClick={() => setProduct("Refrigerator")}>
                                <img src={fridge} className="rounded img-thumbnail img-center mx-auto" alt="..." style={{ height: '70px', width: '70px' }} />
                                <p className='pt-3 text-black'>Refrigerator</p>
                            </Link>
                        </div>
                        <div className=" col-auto py-2 my-4 bg-light rounded" >
                            <Link to="/search" className='text-decoration-none' onClick={() => setProduct("AC")}>
                                <img src={AC} className="rounded img-thumbnail img-center mx-auto" alt="..." style={{ height: '70px', width: '70px' }} />
                                <p className='pt-3 text-black'>Air-Conditioner</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
