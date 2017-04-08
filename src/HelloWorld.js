import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

  log() {
    console.log("Lol");
  }

  render() {
    return (
      <div className="HelloWorld">
        Hello {this.props.name}!
        <button onClick={this.log()}>Frenchify</button>
      </div>
    );
  }
};


export default HelloWorld;
