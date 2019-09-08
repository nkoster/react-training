import React, { Component } from 'react'
import classes from './Person.module.css'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return [

                <p key="p" onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age}
                    {this.props.children ? ` (${this.props.children})` : ''}
                </p>,
                <p key="p2" >{this.props.children}</p>,
                <input
                    key="input"
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />

        ]
    }
}

export default Person
