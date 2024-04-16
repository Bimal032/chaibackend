require('dotenv').config()
const express = require('express')
const app = express()
// console.log(process.env) 
const port = 4000
// console.log(app)
const githubData={
    "login": "Bimal032",
    "id": 106333911,
    "node_id": "U_kgDOBlaG1w",
    "avatar_url": "https://avatars.githubusercontent.com/u/106333911?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Bimal032",
    "html_url": "https://github.com/Bimal032",
    "followers_url": "https://api.github.com/users/Bimal032/followers",
    "following_url": "https://api.github.com/users/Bimal032/following{/other_user}",
    "gists_url": "https://api.github.com/users/Bimal032/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Bimal032/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Bimal032/subscriptions",
    "organizations_url": "https://api.github.com/users/Bimal032/orgs",
    "repos_url": "https://api.github.com/users/Bimal032/repos",
    "events_url": "https://api.github.com/users/Bimal032/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Bimal032/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Bimal kishor mondal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-05-26T15:30:10Z",
    "updated_at": "2024-03-13T02:32:47Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('bimalkishormondal')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please Login at chai aur code</h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})