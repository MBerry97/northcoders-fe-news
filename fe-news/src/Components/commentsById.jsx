import React, { Component } from 'react';
import { getComments } from '../api';
import DeleteComment from './DeleteComment';

class CommentsById extends Component {
  state = {
    comments: [],
    deletedComment: false
  }

  componentDidMount() {
    getComments(this.props.article_id)
    .then(({data}) => {
      this.setState({comments: data.comments})
    })
  }

  componentDidUpdate(prevProps, prevState) {
  if (prevProps.sendComment.body !== this.props.sendComment.body || prevState.deletedComment !== this.state.deletedComment) {
    getComments(this.props.article_id)
    .then(({data}) => {
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
      <div className='comments_container'>
        
        {this.state.comments.map((comment) => {
        return (
        <div key={comment.comment_id} className='comments_article'>
          <div className='comment-info'>
         <p key={comment.article_id}> {comment.body} </p>
         <span key={comment.author}>{comment.author}</span>
         </div>
         
          <DeleteComment loggedUser={this.props.loggedUser} authorOfComment={comment.author} handleDelete={this.handleDelete} commentId={comment.comment_id} commentVoteHandler={this.commentVoteHandler} currentVotes={comment.votes}/>
          </div>
        )
        })}
      </div>
    );
  }
}

export default CommentsById;