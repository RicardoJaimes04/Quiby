import User from '../models/user.model.js';

export const register = async(req, res) => {
   const {nombres, apellidos, correo, tipo_cedula, cedula, contrasena} = req.body
    try{
        const newUser = new User({
            nombres,
            apellidos,
            correo,
            tipo_cedula,
            cedula,
            contrasena
        })
        await newUser.save(); //es asincrono por ende lleva un await y lleva un async todo lo que lo qu elo contenga en este caso la linea 3
        res.send("Registrando");
        console.log(req.body);
    }catch (error){
        console.log(error);
    }
}
export const login = (req, res) => res.send("login");