const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const User = require('../models/User')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('¡Hola Mundo!')
})

app.get('/api/v1/users', (req, res) => {
  User.find()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(400).send(err))
})

app.post('/api/v1/users', (req, res) => {
  const newUser = new User(req.body)
  newUser.save()
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send(err))
})

module.exports = { app, PORT }
