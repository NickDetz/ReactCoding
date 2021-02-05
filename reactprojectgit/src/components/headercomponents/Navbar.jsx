import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap';
import PropTypes from 'prop-types'


class Navingbar extends Component {

    static defaultProps = {
        title: 'I did not load in correctly'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return (
            <Navbar bg="dark">
                <i className="fas fa-diagnoses fa-4x" style={{color : 'green'}}></i>
                <h1 style={{color : 'gray'}}>{this.props.title}</h1>
            </Navbar>
        )
    }
}

export default Navingbar;