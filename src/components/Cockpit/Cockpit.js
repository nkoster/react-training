import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = props => {

    const assignedClasses = []
    let btnClass = ''
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            //alert('aap')
        }, 1000)
    }, [props.persons]) // Use empty array for first time only
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
