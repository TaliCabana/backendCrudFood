export const prueba = (req, res) => {
    console.log('Desde el controlador de prueba');

    res.send('Prueba desde el controlador');
}

export const crearProducto = (req, res) => {
    res.send('Aquí tenemos que crear el producto');
}