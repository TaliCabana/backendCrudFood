import Producto from "../models/productos.js";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");

  res.send("Prueba desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    // 1- Verificar que lleguen los datos validados
    // 2- Pedir al modelo Producto crear el objeto en la BD
    //console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json("El producto fue creado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el producto" });
  }
};

export const listarProductos = async (req, res) => {
  try {
    // 1- Buscar la collection de productos
    const productos = await Producto.find()
    // 2- Enviar la respuesta al front
    res.status(200).json(productos)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al listar los productos" });
  }
};

