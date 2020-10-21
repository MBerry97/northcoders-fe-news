import React, { Component } from 'react';

class ErrorDisplay extends Component {
  render() {
    return (
      <div>
        <p>Error {this.props.status}: {this.props.message}</p>
      </div>
    );
  }
}

export default ErrorDisplay;