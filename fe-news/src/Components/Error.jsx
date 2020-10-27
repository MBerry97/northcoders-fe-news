import React from 'react';
import errorIMG from '../images/error-display-image.jpg'

const ErrorDisplay = (props) => {
    return (
      <div className='error-textcontainer'>
        <p className='error-text'>Oops! That looks like an error {props.status}: {props.message}. Please return home using the icon above.</p>
        <img className='error-image' src={errorIMG} alt='error' />
      </div>
    );
}

export default ErrorDisplay;