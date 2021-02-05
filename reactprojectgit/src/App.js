import React, {Fragment, Component} from 'react';
import './App.css';

class App extends Component {

  render(){

    const name = 'John Doe';

    
    return (
      <Fragment>
      <div className="App">
      <h1> Hello React </h1>
      <h2>My H2 title {name.toUpperCase()} {name.toLowerCase()} {name}</h2>
      </div>
      </Fragment>
    );

  }
 
}

export default App;
