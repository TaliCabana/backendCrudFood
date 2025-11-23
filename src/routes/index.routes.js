import { Router } from "express";
import productosRoutes from "./productos.routes.js";
import usuarioRouter from "./usuario.routes.js";

const router = Router();
// http://localhost:3000/api/productos
router.use('/productos',productosRoutes)
router.use('/usuarios',usuarioRouter)


export default router;