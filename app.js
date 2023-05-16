const express = require('express')
const app = express()
const hbs = require('hbs')
require('dotenv').config()


const port = process.env.PORT


//HANDLEBARS

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use( express.static('public') )

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  })
})


app.get('*', function (req, res) {
  res.send('404 | Page not found')
})


app.listen(port)