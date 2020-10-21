
import React from 'react';
import Voter from './voter';
const axios = require('axios');

const DeleteComment = (props) => {

  const sendDelete = () => {
    axios.delete(`https://nc-news-api-fe.herokuapp.com/api/comments/${props.commentId}`).then((res) => {
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
  return <Voter id={props.commentId} voteFunc={props.commentVoteHandler} section={'comments'}/>
}
}

export default DeleteComment