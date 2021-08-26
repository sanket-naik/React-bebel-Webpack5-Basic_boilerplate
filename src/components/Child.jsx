import React from 'react'

export default function Child({title}) {
    return (
        <div>
            Hello this is a child component 
            <br/>
            Props:{title}
            <div>------------------------------</div>
        </div>
    )
}
