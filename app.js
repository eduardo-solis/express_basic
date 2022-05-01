// Importando la dependencia de express
const express = require('express')

// Creando la app express
const app = express()

// Indicando el puerto de conexion a la app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhosto:3000
app.get('/', (req, res) => {

    res.send('Hello World !!!')

})

// Inicializamos la app
app.listen(port, () => {
    console.log(`Servidor activo en el puerto: ${port}`)
})