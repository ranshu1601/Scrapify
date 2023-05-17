import React from 'react'

function Cards({data}) {
    return (
        <div className='px-3'>
            {data.map((item, i) => {
                return (
                    <div className="bg-light py-2 my-4 d-flex flex-column justify-content-evenly px-4 rounded-pill " style={{height:'300px'}}>
                        <img src={item.img} className=" rounded img-thumbnail img-center mx-auto " alt="..." style={{height:'80px' , width:'100px'}} />

                        <div className="">
                            <h6 className="">{item.details}</h6>
                            <h5 className="">Price : {item.price}</h5>
                            <a href={item.link} className="btn btn-secondary" target={'_blank'}>Buy Now</a>
                        </div>
                    </div>
                )
            })}
            {/* <div className="card" aria-hidden="true">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6"></a>
                </div>
            </div> */}

        </div>
    )
}

export default Cards




