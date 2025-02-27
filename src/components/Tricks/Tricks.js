import React from 'react'
import Trick from '../Trick/Trick'
import './Tricks.css'

const Tricks = ({tricks}) => {
    const trickBoxes = tricks.map((trick) => <Trick key={trick.id} id={trick.id} name={trick.name} obstacle={trick.obstacle} stance={trick.stance} tutorial={trick.tutorial}/>)
    
    return (
        <div className='tricksContainer'>
            {trickBoxes}
        </div>
    )
}

export default Tricks