import { Link } from '@reach/router';
import React, { Component } from 'react';
import { getTopics } from '../api';


class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    getTopics()
    .then((res) => {
      this.setState({ topics: res.data.topics });
    });
  }

  render() {
    return (
      <div className='navbar'>
        
        {this.state.topics.map((topic) => {
          const capitalFirst =
            topic.slug[0].toUpperCase() + topic.slug.slice(1);
          return (
            <Link className='nav-link' key={topic.description} to={`${topic.slug}/articles`}>
            <button className='nav-button'
              name={topic.slug}
          
              key={topic.slug}
            >
              {capitalFirst}
              
            </button>
            </Link>
          );
        })}
        
      </div>
    );
  }
}

export default NavBar;
