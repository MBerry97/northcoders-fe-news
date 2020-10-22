import React from 'react';

const ErrorDisplay = (props) => {
    return (
      <div>
        <p>Error {props.status}: {props.message}</p>
      </div>
    );
}

export default ErrorDisplay;