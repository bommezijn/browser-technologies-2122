const express = require('express')
const app = express()
const compression = require('compression')
require('dotenv').config()
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(__dirname + '/public'))
app.use(compression({level: 6}))

app.get('/', async (request, response) => {
  response.render('index')
})

app.listen(PORT, ()=>{
  console.log(`app listening to localhost:${PORT}`)
})