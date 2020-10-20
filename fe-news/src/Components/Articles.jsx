import { Link } from '@reach/router';
import React, { Component } from 'react';
import SortBy from './sortBy'
const axios = require('axios');
class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: ''
  };

  componentDidMount() {
    axios
      .get('https://nc-news-api-fe.herokuapp.com/api/articles')
      .then((res) => {
        console.log(res.data.articles)
        this.setState({
          articles: res.data.articles,
          isLoading: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic || prevState.sort_by !== this.state.sort_by) {
      axios
        .get('https://nc-news-api-fe.herokuapp.com/api/articles', {
          params: { topic: this.props.topic, sort_by: this.state.sort_by },
        })
        .then((res) => {
          this.setState({
            articles: res.data.articles,
          });
        });
    }
  }

sortHandler = (event) => {
  const sortByOption = event.target.value
  this.setState(({sort_by: sortByOption}))
}

  render() {
    return this.state.isLoading ? (
      <p>Loading articles...</p>
    ) : (
       <div>
         <SortBy sort_by={this.sortHandler} />
        {this.state.articles.map((article) => {
          return (
            <div key={article.article_id} className='article_div'>
              <Link to={`/article/${article.article_id}`}>
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
              <span key={article.created_at}>Date: {article.created_at}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
