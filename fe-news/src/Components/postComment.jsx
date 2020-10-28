import React from 'react';

const PostComment = (props) =>  {

  //Gets the value of the input (comment), refactors it into an object the back-end server accepts as a request and passes the new object as an arguement to be then sent to the back-end server
  const submitComment = (event) => {
    event.preventDefault()

    const commentValue = event.target.comment.value
    
    const commentObj = {
      body: commentValue,
      username: props.loggedUser
    }
    
    props.sendComment(commentObj)
  }
    return (
      <div className='commentinput_container'>
        <form className='comment_form' onSubmit={submitComment} >
           <input minlength='10' className='commentinput_textbox' type='text' name='comment' placeholder='Reply to article here...' ></input>
           <input className='postcomment_button' type='submit' value='Post comment'></input>
           <span className='postcomment_span'>Logged in as: {props.loggedUser}</span>
        </form>
      </div>
    );
  }

export default PostComment;