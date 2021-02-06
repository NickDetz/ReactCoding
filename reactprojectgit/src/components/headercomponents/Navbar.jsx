import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import PropTypes from 'prop-types'


const Navingbar = (props) => {
        return (
            <Navbar bg="dark">
                <i className="fas fa-diagnoses fa-4x" style={{color : 'green'}}></i>
                <h1 style={{color : 'gray'}}>{props.title}</h1>

                <Nav.Link href="/" >Search</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Navbar>
        )
    
}

Navingbar.defaultProps = {
    title: 'I did not load in correctly'
}

Navingbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navingbar;