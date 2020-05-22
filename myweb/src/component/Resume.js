import React, { Component } from 'react';
import '../App.css';
import resume from '../image/Ekkawin Viriyapak.png';
import ReactGA from 'react-ga';

class Header extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  state = {
    path: '/',
  };

  render() {
    let userroute = this.state.path == '/';

    return (
      <div class="resume">
        <img height="100%" src={resume}></img>
      </div>
    );
  }
}

export default Header;
