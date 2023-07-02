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
        const token = await creaciontoken({id: Usersaved._id})
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
        console.log(error); //puede cambiar por...  res.status(500).json({message:error.message})
    }
};

export const login = async(req, res) => {   //pide cedula y contraseña, verifica que este la cedula y luego con el id de usuario verifica la contraseña
    const {cedula, contrasena} = req.body
     try{
        const userfound = await User.findOne({cedula});
        if(!userfound) return res.status(404).json({message: "Documento no encontrado"});

        const match = await bcrypt.compare(contrasena, userfound.contrasena);
        if(!match) return res.status(404).json({message: "Contraseña incorrecta"});
 
         //creacion del token, para mostrar el token es como res.json({token})
         const token = await creaciontoken({id: userfound._id});
         //creacion de una cookie 
         res.cookie("token", token);
         
         res.json({
             id:userfound._id,
             nombres:userfound.nombres,
             apellidos:userfound.apellidos,
             correo:userfound.correo
         })
         console.log(req.body);
     }catch (error){
         console.log(error); //puede cambiar por...  res.status(500).json({message:error.message})
     }
 };

export const logout = (req, res) => {
    res.cookie('token', "", { expires:new Date(0),});
    res.json({message: "logout"});
    return res.sendStatus(200);
};

export const perfil = (req, res) => {
    console.log(req.usuario);
    res.send('perfil')};