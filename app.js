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

// path "launchx" => Respondiendo texto
app.get('/launchx', (req, res) => {
    res.send('Bienvenido a LaunchX')
})

// path "explorer" => regresa un objeto
app.get('/explorers', (req, res) => {
    
    const explorer = { id: 1, name : 'Explorer', msg : 'Hello' }
    res.send(explorer)

})

// path "explorerName" => resive Query Params
app.get('/explorers/:explorerName', (req, res) => {

    res.send(req.params)

})


// Inicializamos la app
app.listen(port, () => {
    console.log(`Servidor activo en el puerto: ${port}`)
})