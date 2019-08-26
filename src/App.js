import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Niels', age: 50 },
      { name: 'Laury', age: 48 },
      { name: 'Henk', age: 41 }
    ]
  }
  switcher = () => {
    console.log('CLICK')
  }
  render() {
    return (
      <div className="App">
        <h1>Aap!</h1>
        <button onClick={this.switcher}>Switch Name</button>
        <h3>okay</h3>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].name}>programmer</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
      </div>
    );
    // Under the hat:
    // return React.createElement('div', {className: 'App'},
    //        React.createElement('h1', null, 'Aaaap!'))
  }
}

export default App
