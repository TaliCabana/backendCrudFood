import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controllers.js";


const router = Router();

router.route("/").post(crearUsuario).get(listarUsuarios); // Cuando haga un post, que invoque al controlador que aun no tengo (---)
router.route('/login').post(login)


export default router;