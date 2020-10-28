
import React from 'react';
import { deleteComment } from '../api';

const DeleteComment = (props) => {

  //send a delete request and then invoke handleDelete which changes state in commentsById
  const sendDelete = () => {
    deleteComment(props.commentId)
    .then((res) => {
      props.handleDelete()
    })
  }

  
  return (
    props.loggedUser === props.authorOfComment && (
    <div className='comment-deleteButton'>
      <button onClick={sendDelete}>Delete comment</button>
    </div>
    )
    )
}

export default DeleteComment