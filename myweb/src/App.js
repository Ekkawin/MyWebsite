import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Homepage from './component/Homepage';
import Extraact from './component/Extraact';
import Resume from './component/Resume';
import ItProj from './component/ItProj';
import Intern from './component/Intern';
import Contact from './component/Contact';
import firstpage from './component/firstpage';
import Result from './component/Result';
import Summary from './component/Summary';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-167342033-1');

class App extends Component {
  render() {
    const resume = () => <h1>resume</h1>;
    return (
      <div>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/extraactivities" component={Extraact} />
        <Route path="/itproject" component={ItProj} />
        <Route path="/internship" component={Intern} />
        <Route exact path="/contactme" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/miniproj" component={firstpage} />
        <Route exact path="/store" component={Result} />
        <Route exact path="/summary" component={Summary} />
      </div>
    );
  }
}

export default App;
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
