import React, { Component } from 'react';

class ArticleByID extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.article_id)}
      </div>
    );
  }
}

export default ArticleByID;