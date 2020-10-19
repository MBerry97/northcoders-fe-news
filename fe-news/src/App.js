import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import NavBar from './Components/NavBar';
import { Router } from '@reach/router';
import Articles from './Components/Articles';

class App extends Component {
  state = {
    topic: '',
  };

  updateTopic = (topic) => {
    console.log(topic);
    this.setState({ topic: topic });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <NavBar updateTopic={this.updateTopic} />
        <Router>
          <Articles path='/' topic={this.state.topic} />
        </Router>
      </div>
    );
  }
}

export default App;
