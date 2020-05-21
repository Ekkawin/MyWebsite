import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  state = {
    path: '/',
  };

  render() {
    let userroute = this.state.path == '/';

    return (
      <nav className="nav-background">
        <div className="my-nav">
          <a href="/">Ekkawin</a>
          <a href="/contactme">Contact me</a>
          <a href="/resume">Resume</a>
        </div>
      </nav>
    );
  }
}

export default Header;
