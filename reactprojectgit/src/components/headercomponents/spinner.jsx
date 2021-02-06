import React from 'react'
import {Spinner} from 'react-bootstrap'

 function Spinners() {
    return (
        <div className='text-center'>
            <Spinner animation="border" role="status" style={{color: 'blue', width: '10rem', height: '10rem'}} >
         <span className="sr-only" >Loading...</span>
            </Spinner>
        </div>
    )
}

export default Spinners;
