import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const Cockpit = props => {

    const authContext = useContext(AuthContext)
    console.log('AUTHENTICATED:', authContext.authenticated)

    const toggleButtonRef = useRef(null)

    const assignedClasses = []
    let btnClass = ''
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        setTimeout(() => {
            alert('aap')
            toggleButtonRef.current.click()
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
                ref={toggleButtonRef}
                onClick={props.toggle}
                className={btnClass} >
            Switch Name</button>
            <button onClick={authContext.login} >Login</button>
        </div>
    )
}

export default React.memo(Cockpit)
