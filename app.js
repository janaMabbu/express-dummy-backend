'use strict'
const express = require('express')
const app = express()
const routes = require('./routes')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*' )
  res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'HEAD', 'DELETE'])
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,If-Modified-Since, Pragma,Cache-Control')
  // mock Delay for all the routes can be set here
  setTimeout(() => next(), 10)
})

app.use(express.static('static'))

routes.addRoutes(app)
module.exports = app
