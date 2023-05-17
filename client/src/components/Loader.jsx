import React from 'react'
import { ThreeCircles } from 'react-loader-spinner';
import'./css/Loader.css'
function Loader({ loader }) {

    return (
        <div className='mx-auto w-100 d-block load'>
            <ThreeCircles
                height="50vh"
                width="50vw"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass="d-flex justify-content-center py-5 my-5 front"
                visible={loader}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
}

export default Loader
