
import React, { Component } from 'react';
import CommentsById from './commentsById';
const axios = require('axios');

class ArticleByID extends Component {
  state = {
    article: {}
  }

componentDidMount () {
  axios.get(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}`).then(({data}) => {
    console.log(data)
    this.setState({article: data.article})
  })
}  
  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
        <span>Author: {this.state.article.author}</span> <br/>
        <span>Comments: {this.state.article.comment_count}</span>
        <CommentsById article_id={this.props.article_id}/>
      </div>
    );
  }
}

export default ArticleByID;