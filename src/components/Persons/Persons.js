import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('Persons.js] getDerivedStateFromProps', props)
    //     return state
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js] shouldComponentUpdate',
            nextProps.persons !== this.props.persons)
        // Only update when persons changed
        // Be careful, this comparison is "by reference"
        return nextProps.persons !== this.props.persons
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js] getSnapshotBeforeUpdate', prevProps, prevState)
        return { message: 'Snapshot!!!' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Person.js] Time to cleanup :)')
    }

    render() {
        console.log('[Persons.js] render', this.props.persons)
        return this.props.persons.map((person, index) => 
            <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
            />
        )
    }
}

export default Persons
