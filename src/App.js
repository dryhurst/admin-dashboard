import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

/**
 * componentDidMount() is invoked immediately after a component is mounted. 
 * Initialization that requires DOM nodes should go here. If you need to 
 * load data from a remote endpoint, this is a good place to instantiate 
 * the network request. Setting state in this method will trigger a 
 * re-rendering.
 */
  componentDidMount() {
    // this.setState({
    //   speed: 25
    // })
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
