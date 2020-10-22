
import React from 'react';
import Articles from './Articles';

const ArticlesByTopic = (props) => {
    return (
        <Articles topic={props.topic}/>
    );
  
}

export default ArticlesByTopic;