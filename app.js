
const express = require('express');

const app = express()

const Productos = require('./api/productos')

const server = require('http').Server(app)

let productos = new Productos()

//motor de plantillas

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res)=> {
    res.render("index", {titulo: "Inicio"});    
})

app.get('/carrito', (req, res) => {
    res.render("carrito", {tituloCarrito: "Carrito de compras"});
});


//routers

app.use(express.static('public'))

const router = express.Router()

app.use('/api', router)

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/productos/listar', (req,res) => {
    res.json(productos.listarAll())
})

router.get('/productos/listar/:id', (req,res) => {
    let { id } = req.params
    res.json(productos.listar(id))
})

router.post('/productos/guardar', (req,res) => {
    let producto = req.body
    productos.guardar(producto)
    res.json(producto)
})

router.put('/productos/actualizar/:id', (req,res) => {
    let { id } = req.params
    let producto = req.body
    productos.actualizar(producto,id)
    res.json(producto)
})

router.delete('/productos/borrar/:id', (req,res) => {
    let { id } = req.params
    let producto = productos.borrar(id)
    res.json(producto)
})


//confirguracion del puerto

const PORT = 8080
const srv = server.listen(PORT, function() {
    console.log('Servidor HTTP con WebSockets escuchando en el puerto: ', PORT);
}) 
srv.on('error', error => console.log('Error en servidor: ', error))