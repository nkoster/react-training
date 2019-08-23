import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aap!</h1>
        <h1>okay</h1>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Aaaap!'))
  }
}

export default App
