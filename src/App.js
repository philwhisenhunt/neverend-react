import React, { Component } from 'react';
//import Contacts from './components/contacts';
import Instructions from './components/instructions';
import Mainline from './components/mainline';
import SVG from './components/TelephoneIcon';
import Endless_Logo from './components/endless';

class App extends Component {

  state = {
 //   contacts: [],
    instructions: [],
    mainline: []
    
  }

 
  componentDidMount() {
    /*
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
    */


    //and now to access the instructions
    fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
    .then(res => res.json())
    .then((data) => {
      this.setState({ instructions: data })
    })
    .catch(console.log)
  }



  render() {

    return (
      <>
     
      <Mainline mainline = {this.state.mainline} />
      <Instructions instructions={this.state.instructions} />
      {/*
      Add this back to get logo stuff going again
      <SVG />
      <Endless_Logo /> */}
      </>
    )
    // return (
    //   <Contacts contacts={this.state.contacts}/>

    // )

   

  }
  



}
export default App

