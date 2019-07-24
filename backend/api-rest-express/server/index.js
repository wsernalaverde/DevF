const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('¡Hola Mundo!')
})

module.exports = { app, PORT }
