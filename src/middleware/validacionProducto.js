import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Producto from "../models/productos.js";

const validacionProducto = [
  body("nombreProducto")
    .notEmpty() // si aparece con cubito => es método => va con (); con el método notEmpty() checkeo que no esté vacío; pongo el puntito para agregar otro método,
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage(
      // es el que me permite mostrar un mensaje
      "El nombre del producto debe contener entre 2 y 100 caracteres"
    )
    .custom(async (valor, { req })=>{ // req tiene acceso al body, por eso lo invoco
      const productoExistente = await Producto.findOne({nombreProducto: valor}) // como no se puede crear productos con nombres repetidos, usamos la funcion findOne que busca UN prod del parametro del objeto nombreProd cuyo valor coincida con VALOR que es el dato que estamos ingresando
      // Quiero preguntar si no encontramos un prpd con el nombre del valor.
      if(!productoExistente){
        return true
      }
      // o sea: si no existe => true; pero si sí existe, tiramos un nuevo error:
      if(req.params?.id&&productoExistente._id.toString()===req.params.id){
        return true
      }
      throw new Error("Ya existe un producto con ese nombre")
    })
    ,
  body("precio")
    .notEmpty()
    .withMessage("El precio del producto es un campo obligatorio")
    .isNumeric()
    .withMessage("El precio del producto debe ser numérico.")
    .isFloat({ min: 100, max: 10000000 })
    .withMessage(
      "El precio del producto debe estar entre 100 y un millón de pesos argentinos."
    ),
  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripción breve del producto es un dato obligatorio")
    .isLength({ min: 5, max: 250 })
    .withMessage(
      "El nombre del producto debe contener entre 5 y 250 caracteres"
    ),
  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripción amplia del producto es un dato obligatorio")
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "El nombre del producto debe contener entre 10 y 500 caracteres"
    ),
  body("categoria")
    .notEmpty()
    .withMessage("La categoría del producto es un dato obligatorio")
    .isIn([
      "Acompañamientos",
      "Bebidas",
      "Ensaladas",
      "Hamburguesas",
      "Postres",
      "Pizzas",
      "Sandwiches y Wraps",
      "Veggie/Veganas",
    ])
    .withMessage(
      `La categoría debe ser uno de los siguientes términos: ["Acompañamientos", "Bebidas", "Ensaladas", "Hamburguesas", "Postres" "Pizzas", "Sandwiches y Wraps","Veggie/Veganas"]`
    ),
 /*  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio.")
    .matches(
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/
    )
    .withMessage(
      "La imagen debe cumplir con el formato de una url de imagen, terminada en alguno de los siguientes valores: jpg|jpeg|png|webp."
    ), */
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
