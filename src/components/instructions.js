import React from 'react'

const Instructions = ({ instructions }) => {
  return (
    <div class="blue-box">
      <center><h1>How it Works</h1></center>
      {instructions.sort(
          function(a, b){
              return a.stepNumber - b.stepNumber;
          }
      )
      .map((instruction) => (

        <div class="card">
                
    

            <div class="card-body">
              
              <center><h1 class="card-subtitle mb-2 text-muted">0{instruction.stepNumber}</h1></center>
              <center><p class="card-text">{instruction.versionContent.sort(
                function(a, b){
                  return new Date(b.effectiveDate) - new Date(a.effectiveDate);

                }
              )
                [0].title}</p></center>
             <center><p class="step-description">{instruction.versionContent[0].body}</p></center> 
            </div>
        
          </div>
          
      ))}
    </div>
  )
};

export default Instructions