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

    state = {
             id: 'id',
             login : 'mumbojumbo',
             avatar_url :  "https://avatars.githubusercontent.com/u/1?v=4",
             html_url :  "https://github.com/mojombo"
    
    };


    render() {
        const {login, avatar_url, html_url} = this.state;
        return (
            <div>
              <Card style={{width: '18rem'}}>
              <Card.Img variant="top" src={this.state.avatar_url} />
              <Card.Body>
                    <Card.Title>User Name  {this.state.login} </Card.Title>
                    <Button variant="outline-primary" href = {this.state.html_url}>Find {this.state.login}</Button>

              </Card.Body>
              </Card>
            </div>
        )
    }
}
export default UserPerson;