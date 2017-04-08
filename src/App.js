import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { saludos: ['raquel', 'emma', 'hugo', 'hisco'] }
  }

  capitalize = (str) =>
    str[0].toUpperCase() + str.slice(1, str.length)

  getSaludos = () =>
    this.state.saludos.map(name => (
      <HelloWorld key={name} name={this.capitalize(name)}/>
    )
  )

  render() {
    return (
      <div className="App">
      { this.getSaludos() }
      </div>
    );
  }

}

export default App;
