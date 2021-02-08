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
import Alerts from './components/headercomponents/Alert';
import Userfront from './components/Usercomponents/Userfront'


class App extends Component {


  state = {
    users: [], 
    user: {},
    loading : false,
    alert : null
  }


    // async componentDidMount() {

      

      // this.setState({loading: true});

      // const res = await axios
      // .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&=client_secret=
      // ${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
      // // .then(res => console.log(res.data));
      // this.setState({users: res.data, loading: false});

      
    // }


    //Searching users from Github
    searchUsers = async search => {
      
      

      const res = await axios
      .get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&=client_secret=
      ${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
      // .then(res => console.log(res.data));
      this.setState({users: res.data.items, loading: false});

      console.log(res.data.items)

    }
    //Alert Functionality on the website
    clearUsers = () => this.setState({users: [],loading: false})

    setAlert = (msg, type) => {
      this.setState({ alert: {msg: msg, type: type}})

      setTimeout(() => this.setState({alert: null}), 5000)
    }  

    getUser = async (username) => {
      const res = await axios
      .get(`https://api.github.com/users${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&=client_secret=
      ${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
      // .then(res => console.log(res.data));
      this.setState({user: res.data, loading: false});

      console.log(res.data.items)
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
          <Alerts alert={this.state.alert}/>
        <Search searchUsers={this.searchUsers}  clearUsers={this.clearUsers}
        showClear={this.state.users.length > 0 ? true : false}
        setAlert={this.setAlert}/>
      <Container>
      <Users loading = {this.state.loading} users = {this.state.users} />
      </Container>
        </Fragment>

      )}></Route>

        <Route exact path='/about' component={About}/>
        <Route exact path='user/:login' render ={props => (
            <Userfront {...props} getUser={this.getUser} user={this.state.user} loading = {this.state.loading}/>
        )}/>
      </Switch>
       </Router>
      

      </Fragment>
    );

    }
 
}

export default App;
