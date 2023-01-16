const path = require ('path');
const express = require('express')
const router = express.Router()
const productsData = require('../api/productos');

router.get('/', (req, res) => {
    const viewsData = {
        products: productsData.products
    }
    res.sendFile(path.join(rootDir, 'views', 'index.ejs'))
} )