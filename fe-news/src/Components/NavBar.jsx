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

  handleClick = (event) => {
    const topic = event.target.name;
    this.props.updateTopic(topic);
  };

  render() {
    return (
      <div className='navbar'>
        {this.state.topics.map((topic) => {
          const capitalFirst =
            topic.slug[0].toUpperCase() + topic.slug.slice(1);
          return (
            <button
              name={topic.slug}
              onClick={this.handleClick}
              key={topic.slug}
            >
              {capitalFirst}
            </button>
          );
        })}
      </div>
    );
  }
}

export default NavBar;
