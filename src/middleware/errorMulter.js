const errorMulter = (err, _req, res, next) => { // "_" indica que el parámetro no se va a utilizar
    if (err && err.code === 'LIMIT_FILE_SIZE'){
        return res.status(400).json({mensaje: 'La imagen no puede superar los 2MB'})
    }
    next()
};

export default errorMulter