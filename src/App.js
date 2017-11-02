import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import DD from './containers/DD';
class B extends Component {
    render() {
        return (
            <div>b</div>
        );
    }
}
class App extends Component {
  render() {
    return (

      <div className="App"><DD></DD>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.match.path}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Route path={`${this.props.match.url}b`} component={B}/>
      </div>

    );
  }
}

export default App;
