import React from 'react'
import './Trick.css'

const Trick = ({ id, name, obstacle, stance, tutorial }) => {

    return (
        <div id={id} className='trick'>
            <h2>{stance} {name}</h2>
            <p>Obstacle: {obstacle}</p>
            <p>Link to tutorial:</p>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default Trick