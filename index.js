const express = require('express')
const app = express()
const compression = require('compression')
const res = require('express/lib/response')
require('dotenv').config()
const PORT = process.env.PORT || 8080

const fs = require('fs')
const req = require('express/lib/request')


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
  // const body = response.json(request.body)
  console.log(request.body)
  const path = './public/jason.json'

  // Check if jason exists, otherwise return error
  fs.access(path, fs.F_OK, (err) => {
    console.error('file does not exist', err)
    return
  })

  //Local instance of database aka sketchy JSON files
  return await fs.writeFile(path, JSON.stringify({ userId: request.body.studentId, userData: request.body }), (err, result) => {
    if (err) return console.log('error at writing', err)
    return response.render('confirm')
  })
})

app.listen(PORT, () => {
  console.log(`app listening to localhost:${PORT}`)
})