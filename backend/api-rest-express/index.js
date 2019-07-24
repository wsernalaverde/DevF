const { app, PORT } = require('./server')
require('./db')

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`))