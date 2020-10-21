import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import NavBar from './Components/NavBar';
import { Router } from '@reach/router';
import Articles from './Components/Articles';
import ArticleByID from './Components/ArticleByID';
import ErrorDisplay from './Components/Error';

class App extends Component {
  state = {
    topic: '',
    loggedInUser: 'jessjelly'
  };

  returnHomeDefault = () => {
    this.setState({topic: ''})
  }

  updateTopic = (topic) => {
    console.log(topic);
    this.setState({ topic: topic });
  };

  render() {
    return (
      <div className='App'>
        <Header home={this.returnHomeDefault}/>
        <NavBar updateTopic={this.updateTopic} />
        <Router className='router'>
          <Articles path='/' topic={this.state.topic} loggedUser={this.state.loggedInUser}/>
          <ArticleByID path='/article/:article_id' loggedUser={this.state.loggedInUser}/>
          <ErrorDisplay default status={404} message='This page does not exist' />
        </Router>
      </div>
    );
  }
}

export default App;
