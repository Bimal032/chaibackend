require('dotenv').config()
const express = require('express')
const app = express()
// console.log(process.env) 
const port = 4000
// console.log(app)
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})