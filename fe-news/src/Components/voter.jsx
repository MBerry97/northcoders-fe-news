import React, { Component } from 'react';
import { patchVotes } from '../api';

class Voter extends Component {
  state = {
    votedPlus : false,
    votedDown : false
  }

  handleVote = (vote, updateVoteFn, section_id, section) => {
      if (vote === 1) {
         this.setState({votedPlus: true})
    } else if (vote === -1) {
         this.setState({votedDown: true})
}
    let voteObj = {
      inc_votes: vote
    }

    updateVoteFn(section_id, vote)

    patchVotes(section, section_id, voteObj)
    .catch(() => {
      updateVoteFn(section_id, -vote)
    })

  }
  render (){
    return (
      <div className='vote_container'>
        <button disabled={this.state.votedPlus} type="submit" onClick={() => this.handleVote(1, this.props.voteFunc, this.props.id, this.props.section)}>+</button>
        <span>Vote</span>
        <button disabled={this.state.votedDown} onClick={() => this.handleVote(-1, this.props.voteFunc, this.props.id, this.props.section)}>-</button>
      </div>
    );
    }
}

export default Voter;