import {Router} from 'express';
import { borrarProductoPorId, crearProducto, listarProductos, obtenerProducto, prueba } from '../controllers/productos.controllers.js';

/*
GET
POST crea
PATH O PUT modifica
DELET
*/

const router = Router();

router.route('/test').get(prueba)
router.route('/').post(crearProducto).get(listarProductos)
router.route('/:id').get(obtenerProducto).delete(borrarProductoPorId)

export default router;