import { Link } from '@reach/router';
import React, { Component } from 'react';

class HomeNav extends Component {
  render() {
    return (
      <div className='home'>
        <Link to='/'>
      <span> Return Home </span>
      </Link>
      </div>
    );
  }
}

export default HomeNav;