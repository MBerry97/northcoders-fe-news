import React, { Component } from 'react';
import { patchVotes } from '../api';

class Voter extends Component {
  state = {
    votedPlus : false,
    votedDown : false
  }

  //Changes state dependant on vote value
  //constructs an object in the format the back-end server will accept
  //send information the above component needs in order to update state and re-render the new vote
  //Send the voteObj in a patch request to axios
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
        <div className='vote-buttons-container'>
        <button className='vote-buttons --plusButton' disabled={this.state.votedPlus} type="submit" onClick={() => this.handleVote(1, this.props.voteFunc, this.props.id, this.props.section)}><i className="fas fa-arrow-up"></i></button>
        <span>{this.props.currentVotes}</span>
        <button className='vote-buttons --minusButton' disabled={this.state.votedDown} onClick={() => this.handleVote(-1, this.props.voteFunc, this.props.id, this.props.section)}><i className="fas fa-arrow-down"></i></button>
        </div>
      </div>
    );
    }
}

export default Voter;