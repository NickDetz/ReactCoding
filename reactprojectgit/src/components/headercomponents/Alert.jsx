import React from 'react'
import {Alert} from 'react-bootstrap'

 const Alerts = ({alert}) => {
    return (
        alert !== null && (
            <Alert  variant='danger'>Please Enter something in the searchbar or a new search if you have cleared previous one</Alert>
            
        )
    )
}

export default Alerts