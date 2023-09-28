const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const routes = require('./routes')

app.use(express.static('public')) 
app.use(
    express.urlencoded({
      extended: true,
    })
  );

const basePath = path.join(__dirname, 'templates')

app.use('/',routes)


app.listen(port,() =>{
    console.log(`App rodando na porta ${port}`)
})