import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import NavBar from './Components/NavBar';
import { Router } from '@reach/router';
import Articles from './Components/Articles';
import ArticleByID from './Components/ArticleByID';
import ErrorDisplay from './Components/Error';
import HomeNav from './Components/HomeNav';


class App extends Component {
  //hard coded and can be changed
  state = {
    loggedInUser: 'jessjelly'
  };

  render() {
    return (
      <div className='App'>
        <HomeNav />
        <Header />
        <NavBar />
        <Router className='router'>
          <Articles path='/' topic={this.state.topic} loggedUser={this.state.loggedInUser}/>
          <Articles path='/:topic/articles' loggedUser={this.state.loggedInUser}/>
          <ArticleByID path='/article/:article_id' loggedUser={this.state.loggedInUser}/>
          <ErrorDisplay default status={404} message='This page does not exist' />
        </Router>
      </div>
    );
  }
}

export default App;
