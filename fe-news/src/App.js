import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import NavBar from './Components/NavBar';
import { Router } from '@reach/router';
import Articles from './Components/Articles';
import ArticleByID from './Components/ArticleByID';
import ErrorDisplay from './Components/Error';
import HomeNav from './Components/HomeNav';
import ArticlesByTopic from './Components/ArticlesByTopic';

class App extends Component {
  state = {
    topic: '',
    loggedInUser: 'jessjelly'
  };

  returnHomeDefault = () => {
    this.setState({topic: ''})
  }

  

  render() {
    return (
      <div className='App'>
        <HomeNav home={this.returnHomeDefault}/>
        <Header />
        <NavBar />
        <Router className='router'>
          <Articles path='/' topic={this.state.topic} loggedUser={this.state.loggedInUser}/>
          <ArticlesByTopic path='/:topic/articles'/>
          <ArticleByID path='/article/:article_id' loggedUser={this.state.loggedInUser}/>
          <ErrorDisplay default status={404} message='This page does not exist' />
        </Router>
      </div>
    );
  }
}

export default App;
