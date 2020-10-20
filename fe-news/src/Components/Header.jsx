import { Link } from '@reach/router';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
      <h1>NorthCoders News.</h1>
      <Link to='/'>
      <span onClick={this.props.home}> Return Home </span>
      </Link>
      </div>
      )
  }
}

export default Header;
