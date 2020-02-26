import React from 'react'
import photoz from '../images/photo-couch_2x.jpg'


const Mainline = ({ instructions }) => {
    return (
      <div>
            <div class="navigator">Endless</div>
                <div class="hero-image">
                    <img src={photoz} class="hero-image"/>

                    <div class="hero-text">
                        <h4>New Games & Accessories</h4>
                        <h1>Monthly Packages</h1>
                        <h1>Excitement Delivered Daily</h1>

                    <p>What’s the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.</p>
                    <button id="get-started">GET STARTED</button>
                    </div>
                </div>
       
      </div>
    )
  };
  
  export default Mainline