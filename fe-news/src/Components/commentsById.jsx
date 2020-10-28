import React, { Component } from 'react';
import { getComments } from '../api';
import DeleteComment from './DeleteComment';
import Voter from './Voter';

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

  //re-renders the component if the boolean value of deletedComment changes or a comment has been posted 
  componentDidUpdate(prevProps, prevState) {
  if (prevProps.sendComment.body !== this.props.sendComment.body || prevState.deletedComment !== this.state.deletedComment) {
    getComments(this.props.article_id)
    .then(({data}) => {
      this.setState({comments: data.comments})
    })
  }
}

//changes the boolean value in state which determins if a comment has been deleted of not
  handleDelete = () => {
   this.setState({deletedComment: !this.state.deletedComment})
}

//updates the comment vote value of a comment by finding the correct comment id of already loaded comments in state
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
         <DeleteComment loggedUser={this.props.loggedUser} authorOfComment={comment.author} handleDelete={this.handleDelete} commentId={comment.comment_id} commentVoteHandler={this.commentVoteHandler} currentVotes={comment.votes}/>
         </div>
          <Voter id={comment.comment_id} voteFunc={this.commentVoteHandler} section={'comments'} currentVotes={comment.votes}/>
          </div>
        )
        })}
      </div>
    );
  }
}

export default CommentsById;