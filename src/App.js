import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   // comment
    //   <div className="App">
    //     <h1>Aap!</h1>
    //   </div>
    // );
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Aaaap!'))
  }
}

export default App;
