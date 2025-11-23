import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
    try {
        const token = req.headers['x-token'] // así extraigo del encabezado el token
         // si no hay token
        if(!token){
            return res.status(401).json({mensaje: 'No hay token en la petición.'})
        }
        // si si hay token
        const payload =jwt.verify(token, process.env.SECRETJWT)
        // puedo extraer la información de payload:
        req.usuario = payload.usuario
        next()
    } catch (error) {
        console.error(error);
        res.status(401).json({mensaje: 'Token no válido', error: error.message})
    }
}

export default verificarJWT