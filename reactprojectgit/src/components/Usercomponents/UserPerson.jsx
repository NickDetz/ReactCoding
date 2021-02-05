import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap';

 class UserPerson extends Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         id: 'id',
    //         login : 'mumbojumbo',
    //         avatar_url :  "https://avatars.githubusercontent.com/u/1?v=4",
    //         html_url :  "https://github.com/mojombo"
    //     }
    // }

    // state = {
    //          id: 'id',
    //          login : 'mumbojumbo',
    //          avatar_url :  "https://avatars.githubusercontent.com/u/1?v=4",
    //          html_url :  "https://github.com/mojombo"
    
    // };


    render() {
        const {login, avatar_url, html_url} = this.props.user;
        return (
            <div className='d-flex justify-content-center'>
              <Card style={{width: '18rem'}}  >
              <Card.Img variant="top" src={avatar_url} />
              <Card.Body>
                    <Card.Title>User Name  {login} </Card.Title>
                    <Button variant="outline-primary" href = {html_url}>Find {login}</Button>

              </Card.Body>
              </Card>
            </div>
        )
    }
}
export default UserPerson;