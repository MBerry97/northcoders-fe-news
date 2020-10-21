import { Link } from '@reach/router';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>

      <h1 className='title'>NorthCoders News.</h1>
      <Link className='home' to='/'>
      <span  onClick={this.props.home}> Return Home </span>
      </Link>
      </div>
      )
  }
}

export default Header;
