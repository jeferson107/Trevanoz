import connection from "./database/connection.js";
import express from "express"
import cors from 'cors'
import routerUser from "./router/user.js";


// Llama a la función que establece la conexión con la base de datos
connection()

//Crea una instancia de la aplicación Express, que usaremos para configurar rutas, middlewares y otras opciones
const app = express();

// Puerto donde se ejecutará el servidor
const port = 3900;

//Configurar cors para permite que las peticiones se hagan correctamente cliente y servidor
app.use(cors())

app.use(express.json());

// Configurar rutas
app.use('/api/user', routerUser);

// Inicia el servidor Express y lo pone a escuchar en el puerto especificado.
// Cuando se establece correctamente, se muestra un mensaje en consola.
app.listen(port,()=>{
    console.log("Conexion correcta al Servidor 🌐")
})