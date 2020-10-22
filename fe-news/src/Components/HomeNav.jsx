import { Link } from '@reach/router';
import React from 'react';

const HomeNav = () => {
    return (
      <div className='home'>
        <Link to='/'>
      <span> Return Home </span>
      </Link>
      </div>
    ); 
}

export default HomeNav;