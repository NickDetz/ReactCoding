import React from 'react'
import {Card, Button, Container, Row, Col, Image} from 'react-bootstrap';
import PropTypes from 'prop-types';

 const UserPerson = ({user: {login, avatar_url, html_url} }) => {

        
        return (
             <div className='d-flex justify-content-center'>
            
              <Card style={{width: '18rem'}}  >
              <Card.Img variant="top" src={avatar_url} />
              <Card.Body>
                    <Card.Title> {login} </Card.Title>
                    <Button variant="outline-primary" href = {html_url}>Find {login}</Button>

              </Card.Body>
              </Card>
                

            </div>
        )
    
}

UserPerson.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserPerson;