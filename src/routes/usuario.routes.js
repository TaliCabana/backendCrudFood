import { Router } from "express";
import { crearUsuario, listarUsuarios } from "../controllers/usuarios.controllers.js";


const router = Router();

router.route("/").post(crearUsuario).get(listarUsuarios); // Cuando haga un post, que invoque al controlador que aun no tengo 

export default router;