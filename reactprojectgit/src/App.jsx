import React, {Fragment, Component} from 'react';
import Navingbar from './components/headercomponents/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPerson from './components/Usercomponents/UserPerson'

class App extends Component {



  render(){

   
    
    return (
      <Fragment>
        
      <div className="App">
      </div>
      <Navingbar title='My Github Finder'/>
      <UserPerson/>

      </Fragment>
    );

  }
 
}

export default App;
