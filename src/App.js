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

  switcher = (newName) => {
    console.log('CLICK')
    this.setState({
      persons: [
        { name: newName, age: 50 },
        { name: 'Laury', age: 48 },
        { name: 'Petra', age: 30 } 
      ]
    })
  }

  nameSwitch = e => {
    this.setState({
      persons: [
        { name: 'Niels', age: 50 },
        { name: 'Laury', age: 48 },
        { name: e.target.value, age: 30 } 
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Aap!</h1>
        <button onClick={() => this.switcher('Gijs')}>Switch Name</button>
        <h3>okay</h3>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>programmer
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switcher.bind(this, 'Apekop')}
          changed={this.nameSwitch} />
      </div>
    )

  }
}

export default App
