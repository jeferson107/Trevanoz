import { connect } from "mongoose";

const connection = async()=>{
    try {
        await connect("mongodb://localhost:27017/db_trevanoz")
        console.log("conexion exitosa a la base de datos 🗄")
    } catch (error) {
        console.log("No se pudo conectar a la base de datos")
        throw new error("No se ha podido conectar a la base de datos!")
    }
}

export default connection;