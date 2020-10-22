import React from 'react';

const SortBy = (props) => {
  

  const handleSortBy = (event) => {
     props.sort_by(event)
  }

  
    return (
         <div className="article_sortby">
           <form onChange={handleSortBy}>
          <label htmlFor="sort">Sort articles:</label>
          <select name='sort'>
            <option value=''>{props.sortByName}</option>
            <option value=''>None</option>
            <option value='created_at' name='Date'>Date</option>
            <option value='comment_count' name='comments'>Number of comments</option>
            <option value='votes' name='votes'>Number of votes</option>
          </select>
          </form>
         </div>
    );
  
}

export default SortBy;