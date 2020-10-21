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
  commentVoteHandler = (comment_id, vote) => {
    console.log(comment_id, vote)
    this.setState((prevState) => {
      const updatedComments = prevState.comments.map((comment) => {
        const commentCopy = {...comment}
        if (commentCopy.comment_id === comment_id) {
          commentCopy.votes = commentCopy.votes + vote
        }
        return commentCopy
      })
      return {comments: updatedComments}
    })
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
          <DeleteComment loggedUser={this.props.loggedUser} authorOfComment={comment.author} handleDelete={this.handleDelete} commentId={comment.comment_id} commentVoteHandler={this.commentVoteHandler}/>
          <span>{comment.votes}</span>
          </div>
        )
        })}
      </div>
    );
  }
}

export default CommentsById;