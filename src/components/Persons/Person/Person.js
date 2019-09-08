import React, { Component, Fragment } from 'react'
// import classes from './Person.module.css'
// import Aux from '../../../hoc/Aux'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Fragment>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age}
                    {this.props.children ? ` (${this.props.children})` : ''}
                </p>,
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

export default Person
