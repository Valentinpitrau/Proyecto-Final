const productsData =[title = "Producto 1", id="1", detalle = "este es el producto 1", precio = "1234", irlImg="https://i0.wp.com/logoroga.com/wp-content/uploads/2015/04/Stock.jpg?fit=800%2C600&ssl=1&w=640" ]

class Productos {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        let prod = this.productos.find(prod => prod.id == id)
        return prod || {error : 'producto no encontrado'}
    }

    listarAll() {
        return this.productos.length? this.productos : {error : 'no hay productos cargados'}
    }

    guardar(prod) {
        prod.id = ++this.id
        this.productos.push(prod)
    }

    actualizar(prod,id) {
        prod.id = Number(id)
        let index = this.productos.findIndex( prod => prod.id == id)
        this.productos.splice(index,1,prod)
    }

    borrar(id) {
        let index = this.productos.findIndex( prod => prod.id == id)
        return this.productos.splice(index,1)
    }

}

module.exports = {
    Productos,
productsData};