import React, { Component } from 'react'
import classes from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

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

  deletePerson = personIndex => {
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
    
    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.updateName} />
      btnClass = classes.Red
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          toggle={this.toggle}
          persons={this.state.persons}
        />
        {persons}
      </div>
    )

  }
}

export default App
