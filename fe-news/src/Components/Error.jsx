import React from 'react';
import errorIMG from '../images/error-display-image.jpg'

const ErrorDisplay = (props) => {
    return (
      <div className='error-text'>
        <p>Oops! That looks like an error {props.status}: {props.message}. Please return home using the icon above.</p>
        <img src={errorIMG} alt='error' />
      </div>
    );
}

export default ErrorDisplay;