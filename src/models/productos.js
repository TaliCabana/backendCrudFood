import mongoose, { Schema } from "mongoose";

const productosSchema = new Schema({
  nombreProducto: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 100,
    max: 1000000,
  },
  categoria: {
    type: String,
    required: true,
    enum: [
      "Acompañamientos",
      "Bebidas",
      "Ensaladas",
      "Hamburguesas",
      "Postres",
      "Pizzas",
      "Sandwiches y Wraps",
      "Veggie/Veganas",
    ],
  },
  descripcion_breve: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 250,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
          valor
        );
      },
    },
  },
}
, { timestamps: true });

const Producto = mongoose.model("producto", productosSchema);

export default Producto;