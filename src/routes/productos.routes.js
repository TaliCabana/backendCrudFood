import {Router} from 'express';

/*
GET
POST crea
PATH O PUT modifica
DELET
*/

const router = Router();

router.route('/test').get((req, res) => {
    console.log('Desde el controlador de prueba');

    res.send('Prueba desde el controlador');



})

export default router;