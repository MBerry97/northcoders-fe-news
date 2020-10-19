import React, { Component } from 'react';
const axios = require('axios');

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    axios.get('https://nc-news-api-fe.herokuapp.com/api/topics').then((res) => {
      console.log(res.data);
      this.setState({ topics: res.data.topics });
    });
  }

  render() {
    return (
      <div>
        {this.state.topics.map((topic) => {
          return <li key={topic.slug}>{topic.slug}</li>;
        })}
      </div>
    );
  }
}

export default NavBar;
