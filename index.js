require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Login', (req,res) =>{
    res.send("<h1>Welcome to RoXD Page!!</h1>")
})

app.get('/home',(req,res) => {
    res.send("<h1>Barter portal</h1>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
