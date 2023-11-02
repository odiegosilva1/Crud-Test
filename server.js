const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<a>Home</a>')

})

server.get('/messages', (req, res) => {

})

//Para subir o servidor usando o metudp listen
server.listen(8080, () => {
    console.log('Server em http://localhost:8080')
    console.log('Desligar server: ctrl + c')

})