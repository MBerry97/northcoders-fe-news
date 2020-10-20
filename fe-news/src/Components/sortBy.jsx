import React, { Component } from 'react';

class SortBy extends Component {
  render() {
    return (
         <div className="article_sortby">
           <form onChange={this.props.sort_by}>
          <label htmlFor="sort">Sort articles:</label>
          <select name='sort'>
            <option value=''>None</option>
            <option value='created_at'>Date</option>
            <option value='comment_count'>Number of comments</option>
            <option value='votes'>Number of votes</option>
          </select>
          </form>
         </div>
    );
  }
}

export default SortBy;