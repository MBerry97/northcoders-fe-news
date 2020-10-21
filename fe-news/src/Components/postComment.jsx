import React from 'react';

const PostComment = (props) =>  {
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
           <input type='submit' value='Post comment'></input>
           <span className='postcomment_span'>Logged in as: {props.loggedUser}</span>
        </form>
      </div>
    );
  }

export default PostComment;