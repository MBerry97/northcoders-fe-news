
import React, { Component } from 'react';
import { getArticleByID, postComment} from '../api';
import CommentsById from './CommentsById';
import ErrorDisplay from './Error';
import PostComment from './PostComment';

class ArticleByID extends Component {
  state = {
    article: {},
    newComment: {},
  }

//fetches specific article when component is loaded and sets an error in state if there is one
componentDidMount () {
  getArticleByID(this.props.article_id)
  .then(({data}) => {
    this.setState({article: data.article})
  }).catch(({response}) => {
    this.setState({error: {
      status: response.status,
      message: response.data.msg
    }})
  })
}  

//sends comment and article id of the comment in a post axios req and sets the new comment response in state, which causes a re-render of the component
sendComment = (comment) => {
  postComment(this.props.article_id, comment)
  .then((res) => {
    this.setState({newComment: res.data.comment})
  })
  
}

  render() {
    if(this.state.error) {
      return (<ErrorDisplay {...this.state.error}/>)
    }
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <div className='article-paragraph'>
        <p >{this.state.article.body}</p>
        </div>
        <span>Author: {this.state.article.author}</span> <br/>
        
        <PostComment loggedUser={this.props.loggedUser} sendComment={this.sendComment}/>
        <CommentsById article_id={this.props.article_id} sendComment={this.state.newComment} loggedUser={this.props.loggedUser}/>
      </div>
    );
  }
}

export default ArticleByID;