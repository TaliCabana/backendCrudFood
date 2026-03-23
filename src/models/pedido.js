import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  // Array para almacenar múltiples productos en un solo pedido
  productos: [{
    producto: {
      type: Schema.Types.ObjectId, /* Mandame el id de un documento de mogo */
      ref: "producto",
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  paymentId: { /* Es el id del prod que me va a dar MP */
    type: String,
    unique: true, /* Cada pedido tiene un id único */
    sparse: true, /* Esto permite que sea nulo en algún momento, o sea antes del que pedido sea como tal */
  },
  total: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Pendiente", "Aprobado", "Rechazado", "Fallido"],
  },
}, { timestamps: true }); /* Me da la fecha de creación y actualización */

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;
