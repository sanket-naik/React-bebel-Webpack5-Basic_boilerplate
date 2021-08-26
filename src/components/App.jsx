import React, { useState } from 'react'

export default function App() {

    const [state, setstate] = useState({
        name:"sanket"
    })

    return (
        <div>
            Test app swsws {state.name}
        </div>
    )
}
