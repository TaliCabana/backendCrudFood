import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
    const errores =validationResult (req) // errores es un objeto
    // isEmpty = no ocurrio algo + ! = no => !errores.isEmpty() = ocurrio un error en la validación?
    if (!errores.isEmpty()){ // objeto.metodo
        return res.status(400).json(errores.array())
    }
    // continuar ejecución
    next()
}

export default resultadoValidacion