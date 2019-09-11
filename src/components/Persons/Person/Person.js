import React, { Component } from 'react'
import classes from './Person.module.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        this.inputElRef.current.focus()
        console.log(this.context.authenticated)
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                {
                    this.context.authenticated ?
                        <p>AUTHENTICATED</p> : <p>Please login</p>
                }
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age}
                    {this.props.children ? ` (${this.props.children})` : ''}
                </p>,
                <input
                    type="text"
                    // ref={el => { this.inputEl = el}}
                    ref={this.inputElRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)
