import React from 'react';

const TopicIcons = (props) => {
  if(props.topic === 'football') {
    return <i className="fas fa-futbol"></i>
  } else if (props.topic === 'coding') {
    return <i className="fas fa-code"></i>
  } else if (props.topic === 'cooking') {
    return <i className="fas fa-pizza-slice"></i>
  }
  }


export default TopicIcons;