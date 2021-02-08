import React from 'react'
import {Card, Button, Container, Row, Col, Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


 const UserPerson = ({user: {login, avatar_url, html_url, id} }) => {

        
        return (
             <div className='d-flex justify-content-center'>
            
              <Card style={{width: '18rem'}}  >
              <Card.Img variant="top" src={avatar_url} />
              <Card.Body>
                    <Card.Title> {login} </Card.Title>
                    <Button href={html_url}>Go to Repository</Button>
              </Card.Body>
              </Card>
                

            </div>
        )
    
}

UserPerson.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserPerson;