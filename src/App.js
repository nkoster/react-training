import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Niels', age: 50 },
      { name: 'Laury', age: 48 },
      { name: 'Henk', age: 41 }
    ],
    showPersons: false
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

  deletePerson = (personIndex) => {
    // const persons = [...this.state.persons]
    // persons.splice(personIndex, 1)
    this.setState({
      persons: [...this.state.persons].slice(personIndex, 1)
    })
  }

  toggle = () => {
    this.setState({showPersons:!this.state.showPersons})
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <h3>okay</h3>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePerson(index)}
                name={person.name}
                age={person.age}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Appp!</h1>
        <button
          onClick={this.toggle}
          style={style}
        >Switch Name</button>
        {persons}
      </div>
    )

  }
}

export default App
