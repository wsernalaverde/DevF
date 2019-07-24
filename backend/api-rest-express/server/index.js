const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

module.exports = { app, PORT }
