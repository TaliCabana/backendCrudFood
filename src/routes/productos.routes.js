import {Router} from 'express';
import { borrarProductoPorId, crearProducto, editarProductoPorId, listarProductos, obtenerProducto, prueba } from '../controllers/productos.controllers.js';
import validacionProducto from '../middleware/validacionProducto.js';
import validacionIdProducto from '../middleware/validacionIdProducto.js';
import verificarJWT from '../middleware/verificarToken.js';

/*
GET
POST crea
PATH O PUT modifica
DELET
*/

const router = Router();

router.route('/test').get(prueba)
router.route('/').post(verificarJWT, validacionProducto, crearProducto).get(listarProductos)
router.route('/:id').get(validacionIdProducto, obtenerProducto).delete(borrarProductoPorId).put([validacionIdProducto, validacionProducto], editarProductoPorId)

export default router;