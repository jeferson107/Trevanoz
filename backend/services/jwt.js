import jwt from "jsonwebtoken";

//Clave secreta
const secret = "SECRET_KEY_proye_laBonneReceTTe@"

//--- creacion del token----//
export const createToken = (user) => {

    const payload = {
        id: user._id,
        name: user.name,
        email: user.email
    }

    return jwt.sign(payload, secret, {
        expiresIn: "15d"
    })

}

// ---Verificar token----//
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'El token ha expirado' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token inválido o modificado' });
        } else {
            return res.status(500).json({ message: 'Error al verificar token' });
        }
    }
}