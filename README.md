# Northcoders news.

## Important links

[View](https://nc-news-react-project.netlify.app/) the hosted version of NC News.

[View](https://nc-news-api-fe.herokuapp.com/) a hosted version of the Back-End.

[View](https://github.com/MBerry97/fe-nc-news-api.git) the back end repository provided.

## Description

NC News is a very similar to the popular website Reddit in its layout and purpose, however you will quickly find the data to be NorthCoders realted.


## User Stories

**As a user, I should be able to...**

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. delete my own comments (as a default logged in user. e.g. 'jessjelly').
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

**Error-handling: As a user, I should...**

10. see a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
11. see a 400 error if I go on a invalid article ID.
12. not be allowed to post a comment if I have not filled in all of the form boxes.

**As a hiring partner, I should be able to...**

13. use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
14. follow the readme instructions to easily run the project locally.
15. find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
16. find a link to the back-end repository of the project in the readme.
17. find a link to the hosted version of the back-end project in the readme.

## _If time, and if you have implemented it in your back-end API..._

**As a user, I should be able to...**

18. navigate over pages of articles (e.g. using pagination or infinite scroll).
19. navigate over pages of comments (e.g. using pagination or infinite scroll).

## Using this repo
* Clone the git repo `git clone https://github.com/MBerry97/northcoders-fe-news.git`
* Install the required packages run `npm install` in the terminal.
* To see the locally hosted app, run `npm start` in the terminal.
