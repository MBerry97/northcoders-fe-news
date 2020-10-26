
import React from 'react';
import { deleteComment } from '../api';

const DeleteComment = (props) => {

  const sendDelete = () => {
    deleteComment(props.commentId)
    .then((res) => {
      props.handleDelete()
    })
  }

  if (props.loggedUser === props.authorOfComment) {
  return (
    <div className='comment-deleteButton'>
      <button onClick={sendDelete}>Delete comment</button>
    </div>
    )
} else {
  return <div></div>
}
}

export default DeleteComment