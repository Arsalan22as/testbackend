require('dotenv').config()
const express = require('express')

const app = express()
 
const port = 4000

const githubData = {
  "login": "Arsalan22as",
  "id": 107760152,
  "node_id": "U_kgDOBmxKGA",
  "avatar_url": "https://avatars.githubusercontent.com/u/107760152?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Arsalan22as",
  "html_url": "https://github.com/Arsalan22as",
  "followers_url": "https://api.github.com/users/Arsalan22as/followers",
  "following_url": "https://api.github.com/users/Arsalan22as/following{/other_user}",
  "gists_url": "https://api.github.com/users/Arsalan22as/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Arsalan22as/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Arsalan22as/subscriptions",
  "organizations_url": "https://api.github.com/users/Arsalan22as/orgs",
  "repos_url": "https://api.github.com/users/Arsalan22as/repos",
  "events_url": "https://api.github.com/users/Arsalan22as/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Arsalan22as/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Arsalan Siddiqui",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": "Arsalan22as",
  "public_repos": 15,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2022-06-18T14:03:38Z",
  "updated_at": "2025-12-01T14:52:27Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=> {
  res.send('arsalandotcom')
})

app.get('/login', (req,res) => {
  res.send('<h1>please login at coding</h1>')
})

app.get('/youtube', (req,res) => {
  res.send('<h2>Welcome to my youtube channel</h2>')
})

app.get('/github', (req,res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})