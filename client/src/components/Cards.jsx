import React from 'react'

function Cards({data}) {
    return (
        <div className='py-2 px-3'>
            {data.map((item, i) => {
                return (
                    <div className="card py-2 my-4 ">
                        <img src={item.img} className="card-img-top rounded img-thumbnail img-center mx-auto" alt="..." style={{height:'100px' , width:'100px'}} />

                        <div className="card-body">
                            <h5 className="card-title">{item.details}</h5>
                            <p className="card-text">Price : {item.price}</p>
                            <a href={item.link} className="btn btn-primary" target={'_blank'}>Go somewhere</a>
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




