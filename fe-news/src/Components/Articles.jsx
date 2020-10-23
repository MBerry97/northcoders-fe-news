import { Link } from '@reach/router';
import React, { Component } from 'react';
import ErrorDisplay from './Error';
import SortBy from './SortBy'
import Voter from './Voter';
import {getArticles} from '../api'

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: '',
    sortByName: ''
  };

  componentDidMount() {
    getArticles(this.props.topic)
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          isLoading: false,
        });
      }).catch(({response}) => {
          this.setState({error: {
          status: response.status,
          message: response.data.msg
    }})
  })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic || prevState.sort_by !== this.state.sort_by) {
      this.setState({isLoading: true})
        getArticles(this.props.topic, this.state.sort_by )
        .then((res) => {
          this.setState({
            articles: res.data.articles,
            isLoading: false,
          });
        });
    }
  }

sortHandler = (event) => {
  const sortByOption = event.target.value
  let sortByName = ''
    if(event.target.value === 'created_at') {
      sortByName = 'sorted by - Date'
    } else if (event.target.value === 'comment_count') {
      sortByName = 'sorted by - Comments'
    } else if (event.target.value === 'votes'){
      sortByName = 'sorted by - Votes'
    } else if (event.target.value === '') {
       sortByName = 'sorted by - None'
    }
  this.setState({sort_by: sortByOption, sortByName: sortByName})
}

voteHandler = (article_id, vote) => {
  this.setState((prevState) => {
    const updatedArticles = prevState.articles.map((article) => {
    const articleCopy = {...article}
      if (articleCopy.article_id === article_id) {
        articleCopy.votes = articleCopy.votes + vote
      }
      return articleCopy
    })
    return {articles: updatedArticles}
  })
}

  render() {
    if(this.state.error) {
      return (<ErrorDisplay {...this.state.error}/>)
    }
    return this.state.isLoading ? (
      <p>Loading articles...</p>
    ) : (
       <div className='articles_container'>
         <section>
         <SortBy sort_by={this.sortHandler} sortByName={this.state.sortByName} />
         </section>
        {this.state.articles.map((article) => {
          const splitDate = article.created_at.split('T')
          return (
            
            <div key={article.article_id} className='article_div'>
              <Link className='article-title' to={`/article/${article.article_id}`}>
              <span key={article.title}>{article.title}</span> -{' '}
              </Link>
              <span key={article.author}>{article.author}</span>
              <br />
              <span key={article.comment_count}>
                Number of comments: {article.comment_count}
              </span>
              <br />
              <span key={article.votes}>Votes: {article.votes}</span>
              <br />
              <span key={article.created_at}>Date: {splitDate[0]}</span>
              <Voter id={article.article_id} voteFunc={this.voteHandler} section={'articles'} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
