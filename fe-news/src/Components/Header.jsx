
import React from 'react';

import logo from '../images/NC-logo.png'

const Header = () => {
    return (
      <div className='header'>
        <img className='header-NClogo' src={logo} alt='NC-logo'></img>
        <i class="far fa-newspaper"></i>
      </div>
      )
}

export default Header;
