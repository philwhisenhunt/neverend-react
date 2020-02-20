import React, { Component } from 'react';
import Contacts from './components/contacts';
import Instructions from './components/instructions';

class App extends Component {

  state = {
    contacts: [],
    instructions: []
    
  }

 
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)


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
      <Instructions instructions={this.state.instructions} />
    )
    // return (
    //   <Contacts contacts={this.state.contacts}/>

    // )

   

  }
  



}
export default App

