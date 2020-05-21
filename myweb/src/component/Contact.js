import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Contact extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="background">
        <div className="pagecontent">
          <h2>Ekkawin Viriyapak</h2>
          <h5>E-mail: ekkawin.v@gmail.com</h5>
          <h5>Tel: 087-500-5777</h5>
          <h5>line: aekviriya</h5>
          <h5>Facebook: Aek Viriyapak</h5>
        </div>
      </div>
    );
  }
}
