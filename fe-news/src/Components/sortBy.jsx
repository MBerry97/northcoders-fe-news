import React, { Component } from 'react';

class SortBy extends Component {
  state = {
    sortBy: 'None'
  }

  handleSortBy = (event) => {
     this.props.sort_by(event)
  }

  render() {
    return (
         <div className="article_sortby">
           <form onChange={this.handleSortBy}>
          <label htmlFor="sort">Sort articles:</label>
          <select name='sort'>
            <option value=''>{this.props.sortByName}</option>
            <option value=''>None</option>
            <option value='created_at' name='Date'>Date</option>
            <option value='comment_count' name='comments'>Number of comments</option>
            <option value='votes' name='votes'>Number of votes</option>
          </select>
          </form>
         </div>
    );
  }
}

export default SortBy;