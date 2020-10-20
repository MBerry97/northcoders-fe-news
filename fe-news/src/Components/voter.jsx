import React, { Component } from 'react';
const axios = require('axios');

class Voter extends Component {

  handleVote = (event) => {
    event.preventDefault()
    let vote;
    
    if(event.target.value === 'plus') {
      vote = 1
    } else {
      vote = -1
    }
    let voteObj = {
      inc_votes: vote
    }
    axios.patch(`https://nc-news-api-fe.herokuapp.com/api/articles/${this.props.article_id}`, voteObj).then((res) => {
      this.props.voteHandler(vote)
    })
  }

  render() {
    return (
      <div className='vote_container'>
        <button value='plus' onClick={this.handleVote}>+</button>
        <span>Vote</span>
        <button value='minus' onClick={this.handleVote}>-</button>
      </div>
    );
  }
}

export default Voter;