import React from 'react'

const person = (props) => (
<div>
    <p onClick={props.click}>
        I'm {props.name} and I'm {props.age}
        {props.children ? ` (${props.children})` : '__'}
    </p>
    <input type="text" onChange={props.changed} value={props.name} />
</div>
)

export default person
