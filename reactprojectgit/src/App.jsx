import React, {Fragment, Component} from 'react';
import Navingbar from './components/headercomponents/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Usercomponents/Users'
import {Container} from 'react-bootstrap';
import axios from 'axios';

class App extends Component {


  state = {
    users: [], 
    loading : false
  }


    async componentDidMount() {

      this.setState({loading: true});

      const res = await axios
      .get('https://api.github.com/users')
      // .then(res => console.log(res.data));
      this.setState({users: res.data, loading: false});

      console.log(res.data);
    }

  

   
    render() {
    return (
      <Fragment>
        
      <div className="App">
      </div>
      <Navingbar title='My Github Finder'/>
      <Container>
      <Users loading = {this.state.loading} users = {this.state.users} />
      </Container>
      

      </Fragment>
    );

    }
 
}

export default App;
