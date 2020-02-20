import React, { Component } from 'react';

class App extends Component {

  state = {
    contacts: []
  }
  ...
}

import React, { Component } from 'react';

class App extends Component {
 
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}