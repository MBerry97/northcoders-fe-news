import React, { Component } from 'react';
const axios = require('axios');

class Voter extends Component {

  state = {
    votedPlus : false,
    votedDown : false
  }

  handleVote = (vote, func, id, section) => {
if (vote === 1) {
  this.setState({votedPlus: true})
} else if (vote === -1) {
  this.setState({votedDown: true})
}

    let voteObj = {
      inc_votes: vote
    }
    func(id, vote)
    axios.patch(`https://nc-news-api-fe.herokuapp.com/api/${section}/${id}`, voteObj).catch(() => {
      func(id, -vote)
    })

  }
  render (){
    return (
      <div className='vote_container'>
        <button disabled={this.state.votedPlus} id='votePlusButton' type="submit" onClick={() => this.handleVote(1, this.props.voteFunc, this.props.id, this.props.section)}>+</button>
        <span>Vote</span>
        <button disabled={this.state.votedDown} id='votePlusButton' onClick={() => this.handleVote(-1, this.props.voteFunc, this.props.id, this.props.section)}>-</button>
      </div>
    );
    }
}

export default Voter;