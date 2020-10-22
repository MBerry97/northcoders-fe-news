
import React, { Component } from 'react';
import Articles from './Articles';

class ArticlesByTopic extends Component {
  state = {
    newTopic : false
  }



componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      // this.setState({isLoading: true})
      
          this.setState({
            newTopic: !this.state.newTopic,
            // isLoading: false,
          });
        
    }
  }

  render() {
    return (
        <Articles topic={this.props.topic}/>
    );
  }
}

export default ArticlesByTopic;