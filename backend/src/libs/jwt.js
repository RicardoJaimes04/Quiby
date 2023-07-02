import jwt from 'jsonwebtoken';
import { token_secreto } from "../config.js";

export function creaciontoken(codigo){
    return new Promise ((resolve, reject)=>{
        jwt.sign(
            codigo,
            token_secreto,
        {
            expiresIn: "1h"
        },
        (err, token) =>{
            if (err) reject(err)
            resolve(token)
        });
    });
}


