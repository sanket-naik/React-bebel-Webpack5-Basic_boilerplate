import React, { useState } from 'react'
import Child from './Child'

export default function App() {

    const [state, setstate] = useState({
        title:"This is a hook"
    })

    return (
        <div>
            {state.title}
            <div>
                <button onClick={()=>alert("This is a event")}>Click here for an event</button>
            </div>
            <Child title={state.title}/>
            <Child title={state.title}/>
        </div>
    )
}
