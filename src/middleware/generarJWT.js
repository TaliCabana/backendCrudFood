import jwt from "jsonwebtoken";

const generarJWT = (usuario, email) => {
  try {
    // Primero: genero el payload, es la zona del medio, la que lleva los datos
    const payload = { usuario, email };
    // esto quiere decir que me voy a crear una propiedad llamada usuario que tendra guardada el contenido de la variable llamada usuario => usuario: usuario === usuario
    // Segundo: construyo el token
    const token = jwt.sign(payload, process.env.SECRETJWT, { expiresIn: "2h" }); // el 3er valor es un objeto => va entre llaves
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar el token.");
  }
};

export default generarJWT;
