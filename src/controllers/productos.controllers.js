import subirImagenACloudinary from "../helpers/cloudinaryUploader.js";
import Producto from "../models/productos.js";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");

  res.send("Prueba desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    let imagenUrl = "";

    if (req.file) {
      const resultado = await subirImagenACloudinary(req.file.buffer);
      /*       console.log(resultado) */
      imagenUrl = resultado.secure_url;
    } else {
      imagenUrl =
        "https://images.pexels.com/photos/126790/pexels-photo-126790.jpeg"; // imagen provisoria
    }

    /* Una forma: 
/*      req.body.imagen = imagenUrl
        const productoNuevo = new Producto(req.body); */

    /* Otra forma */
    const productoNuevo = new Producto({
      ...req.body,
      imagen: imagenUrl,
    });
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
    const productos = await Producto.find();
    // 2- Enviar la respuesta al front
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al listar los productos" });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró el producto buscado" });
    }
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener el productos" });
  }
};

export const borrarProductoPorId = async (req, res) => {
  try {
    const productoBuscado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró el producto buscado" });
    }
    res
      .status(200)
      .json({ mensaje: "El producto fue eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo borrar el productos" });
  }
};

export const editarProductoPorId = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id, req.body);
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró el producto buscado" });
    }

    const productoActualizado = {...req.body, imagen: productoBuscado.imagen}

 /*    // Con esto se mantiene la imagen actual por defecto:
    let imagenUrl = productoBuscado.imagen; // Conservame del producto que encontré su imagen */

    // Si hubiera una imagen nueva => subir a Cloudinary
    if (req.file) {
      const resultado = await subirImagenACloudinary(req.file.buffer);
      productoActualizado.imagen = resultado.secure_url;
    }

    await Producto.updateOne({_id: req.params.id}, {$set: productoActualizado})

    
/*       // Actualizo los campos
    productoBuscado.nombreProducto = req.body.nombreProducto;
    productoBuscado.precio = req.body.precio;
    productoBuscado.descripcion_breve = req.body.descripcion_breve;
    productoBuscado.descripcion_amplia = req.body.descripcion_amplia;
    productoBuscado.categoria = req.body.categoria;
    productoBuscado.imagen = imagenUrl;


    // Guardo
    await productoBuscado.save(); // para guardar los datos editados */

    res.status(200).json({ mensaje: "El producto fue editado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo editar el productos" });
  }
};
