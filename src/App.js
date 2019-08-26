import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Niels', age: 50 },
      { name: 'Laury', age: 48 },
      { name: 'Henk', age: 41 }
    ],
    otherState: 'some value'
  })
  console.log(personsState)
  const switcher = () => {
    setPersonsState({
      persons: [
        { name: 'Niels', age: 50 },
        { name: 'Laury', age: 48 },
        { name: 'Petra', age: 41 }
      ],
      otherState: personsState.otherState
    })
  }  
  return (
    <div className="App">
      <h1>Aap!</h1>
      <button onClick={switcher}>Switch Name</button>
      <h3>okay</h3>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>programmer</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  )
}

export default app
