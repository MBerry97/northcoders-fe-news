import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import NavBar from './Components/NavBar';
import { Router } from '@reach/router';
import Articles from './Components/Articles';
import ArticleByID from './Components/ArticleByID';

class App extends Component {
  state = {
    topic: '',
    sort_by: ''
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
        <Router>
          <Articles path='/' topic={this.state.topic} />
          <ArticleByID path='/article/:article_id' />
        </Router>
      </div>
    );
  }
}

export default App;
