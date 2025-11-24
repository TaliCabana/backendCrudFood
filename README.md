- # Backend CRUD Food 😋

Backend del proyecto `crudFood`. Esta es una API RESTful construida con Node.js y Express para gestionar productos de un menú de comida y la autenticación de usuarios.

## ✨ Características

- **Gestión de Productos:**
    - Crear, leer, actualizas y eliminar productos (CRUD).
    - Validación de datos para la creación y edición de productos
    - Búsqueda de productos por ID.
- **Gestión de Usuarios:**
    - Regitro de nuevos usuarios con contraseña encriptada.
    - Login de usuarios.
    - Generación de JSON Web Token (JWT) para autenticación.
- **Seguridad:**
    - Rutas protegidas que requieren un token JWT válido para operaciones sensibles.
    - Encriptación de contraseñas de usuarios usando `bcrypt`.

## 🚀Tecnologías Utilizadas
- **Backend:**
    - Node.js - Entorno de ejecución de JavaScript.
    - Express.js - Framework para construir la API.
    - MongoDB - Base de datos NoSQL.
    - Mongoose - ODM para modelar los datos de la aplicación para MongoDB.
- **Autenticación y Validación:**
    - JSON Web Token (JWT) - Para sesiones de usuarios seguras.
    - bcrypt - para el hasheo de contraseñas
    - express-validator - Para la validación de los datos de entrada.
- **Herramientas de Desarrollo:**
    - morgan - Logger de peticiones HTTP.
    - cors - Para habilitar Cross-Origin Resource Sharing.

## 📝 Prerequisitos

 Antes de comenzar, asegurate de tener instalado lo siguiente:

- Node.js (versión 18.x o duperior recomendada)
- npm (usualmente viene con Node.js)
- Una instancia de MongoDB (local o en la nube como MongoDB Atlas)

## ⚙ Instalación y Configuración

1.   **Clona el repositorio:**
    ```bash
    git clone <https://github.com/TaliCabana/crudFood.git>
    cd 21-backendcrudfood
    ```

2. **Instalá las dependencias:**
    ```bash
    npm install
    ```
3. **Configurá las variables de entorno:** Crea un archivo `.env` en la raiz del proyecto y añade las siguientes variables. El script `dev` lo cargará automáticamente.

```env
    # URL de conexión a tu base de datos MongoDB
MONGODB_URI=mongodb://127.0.0.1:27017/crudFoodDB

    # Clave secreta para firmar los JSON Web Tokens
SECRETJWT=tuClaveSecretaSuperSegura123!
```

** 📜 Scripts Disponibles

En el `package.json`, encontrarás los siguientes scripts:

- **Para iniciar el servidor de modo producción:**
    ```bash
    npm start
    ```
- **Para iniciar el servidor en modo desarrollo con auto-recarga:**
    Este script utiliza la bandera `--watch` de Node.js para reiniciar el servidor automáticamente uando detecta cambios en los archivos.
    ```bash
    npm run dev
    ```

## 📍 Endpoints de la API

A continuación se detallan los endpoints disponibles en la API: [Documentación](https://documenter.getpostman.com/view/49093290/2sB3dHWD9p)

## ✒️ Autor

[Tali Cabana](https://www.linkedin.com/in/paula-cabana-ingenieraindustrial/)





    

