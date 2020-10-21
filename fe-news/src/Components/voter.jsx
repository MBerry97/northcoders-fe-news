import React, { Component } from 'react';
const axios = require('axios');

class Voter extends Component {

  handleVote = (vote) => {
    let voteObj = {
      inc_votes: vote
    }
    this.props.voteHandler(this.props.article_id, vote)
    axios.patch(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}`, voteObj).catch(() => {
      this.props.voteHandler(this.props.article_id, -vote)
    })
  }

  render() {
    return (
      <div className='vote_container'>
        <button type="submit" onClick={() => this.handleVote(1)}>+</button>
        <span>Vote</span>
        <button  onClick={() => this.handleVote(-1)}>-</button>
      </div>
    );
  }
}

export default Voter;