import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const Cockpit = props => {
    const assignedClasses = []
    let btnClass = ''
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('aap')
        }, 1000)
        return () => {  // functional component cleanup way
            console.log('[Cockpit.js] Cleaning lady')
        }
    }, []) // Use empty array for first time only
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect in action')
        return () => {
            console.log('[Cockpit.js] 2nd cleanup')
        }
    })
    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.personsLength <=2 ) assignedClasses.push(classes.red)
    if (props.personsLength <=1 ) assignedClasses.push(classes.bold)
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

export default React.memo(Cockpit)
