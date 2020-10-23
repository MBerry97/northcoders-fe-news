import { Link } from '@reach/router';
import React from 'react';

const HomeNav = () => {
    return (
      <div className='home'>
        <Link className='home-link' to='/'>
      <span> <i class="fas fa-home"></i></span>
      </Link>
      </div>
    ); 
}

export default HomeNav;