import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap';

class Navingbar extends Component {
    render() {
        return (
            <Navbar bg="dark">
                <i class="fas fa-diagnoses fa-4x" style={{color : 'green'}}></i>
                <h1 style={{color : 'gray'}}>Hello From Navbar</h1>
            </Navbar>
        )
    }
}

export default Navingbar;