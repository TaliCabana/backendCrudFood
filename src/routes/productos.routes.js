import {Router} from 'express';
import { prueba } from '../controllers/productos.controllers.js';

/*
GET
POST crea
PATH O PUT modifica
DELET
*/

const router = Router();

router.route('/test').get(prueba)

export default router;