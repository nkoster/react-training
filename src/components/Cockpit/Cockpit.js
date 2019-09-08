import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = props => {

    const assignedClasses = []
    let btnClass = ''
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
    })
    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.persons.length <=2 ) assignedClasses.push(classes.red)
    if (props.persons.length <=1 ) assignedClasses.push(classes.bold)
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>{props.title}</p>
            <button
            onClick={props.toggle}
            className={btnClass}
            >Switch Name</button>
        </div>
    )
}

export default Cockpit
