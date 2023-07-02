import jwt from 'jsonwebtoken';
import {token_secreto} from '../config.js';

export const authRequired =(req, res, next) => { //informacion de la peticion, metodos para enviar, y continua si hay un token

    //console.log("validando token");
    //console.log(req.headers);  muestra por consola todo el headers (entre esos el token)
    const {token} = req.cookies;  //la otra forma es req.headers.cookie **** pero no sale solo la cookie sino el token="..." y tocaba separarlo con string y cosas asi
    if(!token) return res.status(401).json({message: "token no encontrado"}); 

    jwt.verify(token, token_secreto, (err, usuario) => {
        if(err) return res.status(403).json({message: "token invalido"});
        req.usuario = usuario;
        next();
        })
}