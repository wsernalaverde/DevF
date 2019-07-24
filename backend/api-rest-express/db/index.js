const mongoose = require('mongoose')
const db_url = 'mongodb+srv://user-exercises:abcd1234@cluster0-imbkw.mongodb.net/api-express?retryWrites=true&w=majority'

mongoose.connect(
  db_url,
  { useNewUrlParser: true },
  () => console.log('Conexión éxitosa con base de datos')
)