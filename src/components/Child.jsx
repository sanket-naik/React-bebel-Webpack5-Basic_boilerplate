import React from 'react'
import Img from '../assets/images/bird.jpg'

export default function Child({title}) {
    return (
        <div>
            Hello this is a child component 
            <br/>
            Props:{title}
            <br/>
            Image: <img src={Img} height="50px"/>
            <div>------------------------------</div>
        </div>  
    )
}
