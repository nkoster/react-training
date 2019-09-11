import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('Persons.js] getDerivedStateFromProps', props)
    //     return state
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     const update =
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     console.log('Persons.js] shouldComponentUpdate', update)
    //     return update
    // }

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
                isAuth={this.props.isAuthenticated}
            />
        )
    }
}

export default Persons
