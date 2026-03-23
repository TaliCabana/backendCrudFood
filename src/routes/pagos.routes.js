import { Router } from "express"
import { crearOrdenCarrito, recibirWebhook } from "../controllers/pagos.controllers.js";

const router = Router();

router.route('/crear-orden-carrito').post(crearOrdenCarrito) /* Es post porque genera una nueva entrada en el pedido */
router.route('/webhook').post(recibirWebhook)

export default router;