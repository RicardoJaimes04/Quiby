import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {creaciontoken} from '../libs/jwt.js';

export const register = async(req, res) => {
   const {nombres, apellidos, correo, tipo_cedula, cedula, contrasena} = req.body
    try{

        const contHash = await bcrypt.hash(contrasena, 5)

        const newUser = new User({
            nombres,
            apellidos,
            correo,
            tipo_cedula,
            cedula,
            contrasena: contHash, //sirve para encriptar la contraseña. pero no funciona (utiliza npm i bcrypt)--- YA lo encontre, sale en la respuesta mas no en la terminal consola.
        })
        const Usersaved = await newUser.save(); //es asincrono por ende lleva un await y lleva un async todo lo que lo qu elo contenga en este caso la linea 3

        //creacion del token, para mostrar el token es como res.json({token})
        const token = await creaciontoken({id:Usersaved.id})
        //creacion de una cookie 
        res.cookie("token", token);
        
        //res.json(Usersaved); para que salga todos los datos en la respuesta --- el siguiente es para que salga solo algunos
        res.json({
            id:Usersaved._id,
            nombres:Usersaved.nombres,
            apellidos:Usersaved.apellidos,
            correo:Usersaved.correo
        })
        console.log(req.body);
    }catch (error){
        console.log(error);
    }
}
export const login = (req, res) => res.send("login");