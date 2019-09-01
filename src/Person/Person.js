import React from 'react'
import './Person.css'

const person = props => (
<div className="Person">
    <p onClick={props.click}>
        I'm {props.name} and I'm {props.age}
        {props.children ? ` (${props.children})` : ''}
    </p>
    <input type="text" onChange={props.changed} value={props.name} />
</div>
)

export default person
