import React, { Component } from 'react';
import '../App.css';
import resume from '../image/Resume.png';

class Header extends Component {
  state = {
    path: '/',
  };

  render() {
    let userroute = this.state.path == '/';

    return (
      <div>
        <img src={resume}></img>
      </div>
    );
  }
}

export default Header;
