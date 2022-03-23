const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const puerto = 8080;


const productos = [{
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfider.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    id: uuidv4()
},
{
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'http://cdn3.iconfider.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: uuidv4()
},
{
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'http://cdn3.iconfider.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    id: uuidv4()
}]

const servidor = http.createServer((pet, resp) => {
    resp.end('Hola Mundo');
});

const srv = app.listen(puerto, () => {
    console.log('Server listo, escuchando en el puerto', puerto)
});

app.get('/', (req, res) => {
    res.json({
        mensaje: 'HOLA DESDE LA RUTA PRINCIPAL'
    })
})

app.get('/productos', (req, res) => {
    const myfilePath = path.resolve(__dirname, './productos.txt')
    res.sendFile(myfilePath)
})

app.get('/productosRandom', (req, res) => {
    const random = productos[Math.floor(Math.random() * productos.length)];
    res.json(random)
})