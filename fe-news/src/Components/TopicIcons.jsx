import React from 'react';

const TopicIcons = (props) => {
  if(props.topic === 'football') {
    return <i class="fas fa-futbol"></i>
  } else if (props.topic === 'coding') {
    return <i class="fas fa-code"></i>
  } else if (props.topic === 'cooking') {
    return <i class="fas fa-pizza-slice"></i>
  }
  }


export default TopicIcons;