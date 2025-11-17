import { body } from "express-validator";
import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const saltos = bcrypt.genSaltSync(10);
    const passwordEncriptado = bcrypt.hashSync(req.body.password, saltos);
    req.body.password = passwordEncriptado;
    const usuarioNuevo = new Usuario(req.body);

    await usuarioNuevo.save();
    res.status(201).json({ mensaje: "Usuario creado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo crear el usuario." });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error, no se pudo listar los usuarios." });
  }
};

export const login = async (req, res) => {
try {
  const {email, password} = req.body
  // verificar el email
  const usuarioBuscado = await Usuario.findOne({email}) // ({email: req.body.email}) = ({email: email}) => si nombre de propiedad = nombre de variable que contiene el valor => puedo poner email
  if(!usuarioBuscado){
    return res.status(404).json({mensaje:'El usuario no existe.'})
  }
  // checkear el password con ayuda de bcrypt
  const passwordValido = bcrypt.compareSync(password, usuarioBuscado.password)
  if(!passwordValido){
    return res.status(401).json({mensaje: 'Contraseña incorrecta'})
  }
  res.status(200).json({mensaje: 'Usuario logueado correctamente', usuario:usuarioBuscado.nombreUsuario})
} catch (error){
  console.error(error)
  res.status(500).json({mensaje: 'Ocurrió un error al intentar loguear un usuario.' })
}
}

