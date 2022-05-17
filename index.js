const express = require('express')
const app = express()
const compression = require('compression')
require('dotenv').config()
const { saveUser, doesFileExist } = require('./helpers/localjson')
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json()) //Built-in body parser express 4.16+
app.use(express.urlencoded({ extended: true })) //Parse URL-encoded bodies 

app.use(express.static(__dirname + '/public'))
app.use(compression({ level: 6 }))

app.get('/', async (request, response) => {
  response.render('index')
})

app.post('/submitSurvey', async (request, response) => {
  console.log(request.body)
  doesFileExist('./public/jason.json')
  saveUser({ userId: request.body.studentId, userData: request.body }) ? response.render('confirm') : console.log('fek something went wrong')

})

app.listen(PORT, () => {
  console.log(`app listening to localhost:${PORT}`)
})