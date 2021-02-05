import React, {Fragment, Component} from 'react';
import './App.css';

class App extends Component {

  foo2 = () => {
    return "Shirshkabob";
  } 

  render(){

    const name = 'John Doe';

    const foo = () => {
      return 1+2;
    }

    const loading = false;

    // if(loading === false) {
    //   return(
    //     <h1>Loading right now</h1>
    //   )
    // }
    
    return (
      <Fragment>
      <div className="App">
      <h1> Hello React </h1>
      <h2>My H2 title {name.toUpperCase()} {name.toLowerCase()} {name}</h2>
      <h3>{foo()}</h3>
      <h4>{this.foo2()}</h4>
      {loading ? <h5>Trains</h5> : <h1>I am Loading</h1>}
      </div>
      </Fragment>
    );

  }
 
}

export default App;
