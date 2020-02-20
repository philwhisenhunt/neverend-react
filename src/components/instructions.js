import React from 'react'

const Instructions = ({ instructions }) => {
    return(
        <div>
            <center><h1>Instructions</h1></center>
            {instructions.map((instruction) => (
                <p>{instruction.id}</p>
            ))}
        </div>
    )
}

export default Instructions