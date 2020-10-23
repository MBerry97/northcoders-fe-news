
import React from 'react';
import { deleteComment } from '../api';
import Voter from './Voter';

const DeleteComment = (props) => {

  const sendDelete = () => {
    deleteComment(props.commentId)
    .then((res) => {
      props.handleDelete()
    })
  }

  if (props.loggedUser === props.authorOfComment) {
  return (
    <div>
      <button onClick={sendDelete}>Delete comment</button>
    </div>
    )
} else {
  return <Voter id={props.commentId} voteFunc={props.commentVoteHandler} section={'comments'} currentVotes={props.currentVotes}/>
}
}

export default DeleteComment