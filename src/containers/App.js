import React, { Component } from 'react'
import classes from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
    this.state = {
      persons: [
        { id: 'a', name: 'Niels', age: 50 },
        { id: 'b', name: 'Laury', age: 48 },
        { id: 'c', name: 'Henk', age: 41 }
      ],
      showPersons: false,
      showCockpit: true,
      changeCount: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  updateName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCount: prevState.changeCount + 1
      }
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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {

    console.log('[App.js] render')
    
    let persons = null
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.updateName}
            isAuthenticated={this.state.authenticated} />
    }

    return (
      <Aux>
        <button onClick={() =>
          this.setState({showCockpit:!this.state.showCockpit})}>remove cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} >
          { 
            this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              toggle={this.toggle}
              personsLength={this.state.persons.length}
            /> : null
          }
          {persons}
        </AuthContext.Provider>
      </Aux>
    )

  }
}

export default withClass(App, classes.App)
