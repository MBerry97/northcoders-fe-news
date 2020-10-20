
import React, { Component } from 'react';
import CommentsById from './commentsById';
import PostComment from './postComment';
const axios = require('axios');

class ArticleByID extends Component {
  state = {
    article: {},
    newComment: {}
  }

componentDidMount () {
  axios.get(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}`).then(({data}) => {
    console.log(data)
    this.setState({article: data.article})
  })
}  

sendComment = (comment) => {
  axios.post(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}/comments`, comment).then((res) => {
    
    this.setState({newComment: res.data.comment})
  })
  
}

  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
        <span>Author: {this.state.article.author}</span> <br/>
        <span>Comments: {this.state.article.comment_count}</span>
        <PostComment loggedUser={this.props.loggedUser} sendComment={this.sendComment}/>
        <CommentsById article_id={this.props.article_id} sendComment={this.state.newComment}/>
        
      </div>
    );
  }
}

export default ArticleByID;