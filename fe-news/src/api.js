import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-news-api-fe.herokuapp.com/api'
})

export const getTopics = () => {
  return instance 
      .get('/topics')
}

export const getArticles = (topic, sort_by) => {
  return instance 
       .get(`/articles/`, {params: {topic : topic, sort_by: sort_by}})
}

export const getArticleByID = (article_id) => {
  return instance 
      .get(`/articles/${article_id}`)
}

export const getComments = (article_id) => {
  return instance
     .get(`/articles/${article_id}/comments`)
}

export const postComment = (article_id, comment) => {
    return instance
       .post(`/articles/${article_id}/comments`, comment)
}

export const deleteComment = (comment_id) => {
   return instance
      .delete(`comments/${comment_id}`)
}

export const patchVotes = (section, id, voteObj) => {
  return instance
      .patch(`/${section}/${id}`, voteObj)
}

