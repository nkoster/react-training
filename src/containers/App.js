import React, { Component } from 'react'
import classes from './App.module.css'
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
      persons = (
        <div>
          <h3>okay</h3>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.updateName} />
        </div>
      )
      btnClass = classes.Red
    }

    let assignedClasses = []
    if (this.state.persons.length <=2 ) assignedClasses.push(classes.red)
    if (this.state.persons.length <=1 ) assignedClasses.push(classes.bold)

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>Appp!</p>
        <button
          onClick={this.toggle}
          className={btnClass}
        >Switch Name</button>
        {persons}
      </div>
    )

  }
}

export default App
