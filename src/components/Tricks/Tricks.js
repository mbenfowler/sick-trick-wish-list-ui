import React from 'react'

const Tricks = ({tricks}) => {

    const trickNames = tricks.map(trick => trick.name)
    return (
        <div>
            {trickNames}
        </div>
    )
}

export default Tricks