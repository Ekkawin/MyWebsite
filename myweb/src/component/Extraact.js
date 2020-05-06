import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import act1 from '../image/Act1.png';

class Extraact extends Component {
  state = {
    path: '/',
  };

  render() {
    let userroute = this.state.path == '/';

    return <p>hi</p>;
  }
}

export default Extraact;
