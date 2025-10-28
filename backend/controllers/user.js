import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createToken } from "../services/jwt.js";

export const register = async (req, res) => {
    try {
        //-----Obtenemos los datos enviados por el cliente desde el cuerpo de la petición (req.body)-----//
        let params = req.body;

        // Validaciones: verificamos que los datos obligatorios estén presentes
        if (!params.name || !params.email || !params.password || !params.address || !params.phone) {
            return res.status(400).json({
                status: "error",
                message: "Falta datos por enviar"
            });
        }

        // Crear una instancia del modelo User con los datos validados
        let userToSave = new User(params);

        // Buscar si ya existe un usuario con el mismo email
        const existingUser = await User.findOne({
            or: [{ email: userToSave.email.toLowerCase() }]
        })

        // Si encuentra un usuario, devuelve un mensaje indicando que ya existe
        if (existingUser) {
            return res.status(409).json({
                status: "error",
                message: "Este correo ya esta en uso"
            })
        }

        // Cifrar contraseña
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(userToSave.password, salt)
        userToSave.password = hasedPassword

        // Guardar el usuario en la base de datos
        await userToSave.save()

        // Devolver respuesta exitosa y el usuario registrado 
        return res.status(201).json({
            status: "created",
            message: "usuario registrado con éxito",
            user: {
                id: userToSave.id,
                name: userToSave.name,
            }
        })

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: "Error en registro de usuarios"
        })
    }

}

//----- Método para autenticar usuarios (login) ------//
export const login = async (req, res) => {
    try {
        let params = req.body

        // verificamos que los datos requerido en el formulario este completo y correcto a la cuenta creada 
        if (!params.email || !params.password) {

            return res.status(400).json({
                status: "error",
                message: "Faltan datos por enviar"
            })

        }

        // verificamos que esa cuenta exista en la base de datos 
        const user = await User.findOne({
            email: params.email.toLowerCase()
        })

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: "La cuenta no existe. Verifica tu correo o nombre de usuario."
            })
        }

        // Comprobar si el password recibido es igual al que está almacenado en la BD
        const validPasword = await bcrypt.compare(params.password, user.password)

        if (!validPasword) {
            return res.status(401).json({
                status: "error",
                message: "Contraseña incorrecta"
            })
        }

        //generamos el token de autenticacion 
        const token = createToken(user)

        return res.status(200).json({
            status: "succes",
            message: "login existoso",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        })

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: "Error en el login del usuarioER"
        })
    }
}