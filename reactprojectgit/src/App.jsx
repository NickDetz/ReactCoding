import React, {Fragment, Component} from 'react';
import Navingbar from './components/headercomponents/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Usercomponents/Users'

class App extends Component {



  render(){

   
    
    return (
      <Fragment>
        
      <div className="App">
      </div>
      <Navingbar title='My Github Finder'/>
      <Users/>

      </Fragment>
    );

  }
 
}

export default App;
