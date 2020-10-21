import React from 'react';
const axios = require('axios');

const Voter = (props) => {

  const handleVote = (vote, func, id, section) => {
    let voteObj = {
      inc_votes: vote
    }
    func(id, vote)
    axios.patch(`https://nc-news-api-fe.herokuapp.com/api/${section}/${id}`, voteObj).catch(() => {
      func(id, -vote)
    })

  }
    return (
      <div className='vote_container'>
        <button type="submit" onClick={() => handleVote(1, props.voteFunc, props.id, props.section)}>+</button>
        <span>Vote</span>
        <button  onClick={() => handleVote(-1, props.voteFunc, props.id, props.section)}>-</button>
      </div>
    );
  
}

export default Voter;