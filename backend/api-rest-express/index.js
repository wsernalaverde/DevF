const { app, PORT } = require('./server')

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`))