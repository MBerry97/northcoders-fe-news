import React, { Component } from 'react';
import DeleteComment from './DeleteComment';
const axios = require('axios');

class CommentsById extends Component {
  state = {
    comments: [],
    deletedComment: false
  }

  componentDidMount() {
    axios.get(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}/comments`).then(({data}) => {
      
      this.setState({comments: data.comments})
    })
  }

componentDidUpdate(prevProps, prevState) {
  if (prevProps.sendComment.body !== this.props.sendComment.body || prevState.deletedComment !== this.state.deletedComment) {
    axios.get(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}/comments`).then(({data}) => {
      console.log(data)
      this.setState({comments: data.comments})
    })
  }
}

   handleDelete = () => {
   this.setState({deletedComment: !this.state.deletedComment})
}
  
  render() {
    return (
      <div>
        <span>Comments: {this.state.comments.length}</span>
        {this.state.comments.map((comment) => {
        return (
        <div key={comment.comment_id}className='comments_article'>
         <p key={comment.article_id}> {comment.body} </p>
         <span key={comment.author}>{comment.author}</span>
          <DeleteComment loggedUser={this.props.loggedUser} authorOfComment={comment.author} handleDelete={this.handleDelete} commentId={comment.comment_id}/>
          </div>
        )
        })}
      </div>
    );
  }
}

export default CommentsById;