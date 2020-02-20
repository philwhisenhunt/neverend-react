import React from 'react'

const Instructions = ({ instructions }) => {
  return (
    <div class="blue-box">
      <center><h1>How it Works</h1></center>
      {instructions.sort(
          function(a, b){
              return a.stepNumber - b.stepNumber;
          }
      ).map((instruction) => (

        <div class="card">
                  

          <div class="card-body">
            <h5 class="card-title">{instruction.id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{instruction.stepNumber}</h6>
            <p class="card-text">{instruction.versionContent[0].title}</p>
            <p class="card-text">{instruction.versionContent[0].body}</p>
            <p class="card-text">{instruction.versionContent[0].effectiveDate}</p>

          </div>
          </div>
          
      ))}
    </div>
  )
};

export default Instructions