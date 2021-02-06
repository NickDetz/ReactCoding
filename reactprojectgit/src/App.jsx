import React, {Fragment, Component} from 'react';
import Navingbar from './components/headercomponents/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Usercomponents/Users'
import {Container} from 'react-bootstrap';
import axios from 'axios';
import Search from './components/Usercomponents/Search'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import About from './components/Pages/About';


class App extends Component {


  state = {
    users: [], 
    loading : false
  }


    async componentDidMount() {

      

      this.setState({loading: true});

      const res = await axios
      .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&=client_secret=
      ${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
      // .then(res => console.log(res.data));
      this.setState({users: res.data, loading: false});

      console.log(res.data);
    }

  

   
    render() {
    return (
      <Fragment>
        <Router>
        <div className="App">
      </div>
      <Navingbar title='My Github Finder'/>

      <Switch>
      <Route exact path='/' render={props =>(
        <Fragment>

<Search/>
      <Container>
      <Users loading = {this.state.loading} users = {this.state.users} />
      </Container>
        </Fragment>

      )}></Route>

        <Route exact path='/about' component={About}/>

      </Switch>
       </Router>
      

      </Fragment>
    );

    }
 
}

export default App;
