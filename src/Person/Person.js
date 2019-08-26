import React from 'react'

const person = (props) => (
<div>
    <p>
        I'm {props.name} and I'm {props.age}
        {props.children ? ` (${props.children})` : '__'}
    </p>
</div>
)

export default person