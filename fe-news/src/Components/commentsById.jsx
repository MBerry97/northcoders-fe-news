import React, { Component } from 'react';
const axios = require('axios');

class CommentsById extends Component {
  state = {
    comments: []
  }

  componentDidMount() {
    axios.get(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}/comments`).then(({data}) => {
      
      this.setState({comments: data.comments})
    })
  }
  render() {
    return (
      <div>
        {this.state.comments.map((comment) => {
        return (
        <div className='comments_article'>
         <p key={comment.article_id}> {comment.body} </p>
         <span key={comment.author}>{comment.author}</span>

          </div>
        )
        })}
      </div>
    );
  }
}

export default CommentsById;