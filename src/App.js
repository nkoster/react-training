import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'Niels', age: 50 },
      { id: 'b', name: 'Laury', age: 48 },
      { id: 'c', name: 'Henk', age: 41 }
    ],
    showPersons: false
  }

  updateName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
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
                key={person.id}
                changed={event => this.updateName(event, person.id)}
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
