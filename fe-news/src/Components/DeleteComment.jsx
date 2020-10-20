
import React from 'react';
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
  return <p>Dont forget to vote!</p>
}
}

export default DeleteComment