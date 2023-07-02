import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombres:{
        type: String,
        require: true
        //trim: true   --- borra los espacios en blanco para que no los guarde
    },
    apellidos:{
        type: String,
        require:true
    },
    tipo_cedula:{
        type: String,
        require: true
    },
    cedula:{
        type: String,
        require: true,
        unique: true
    },
    correo:{
        type: String,
        require: true,
        unique: true
    },
    contrasena:{
        type: String,
        require: true
    }
},{
    timestamps:true //se crea dos nuevos atributos que guarda la fecha de creacion y de la actualizacion
})

export default mongoose.model('User', userSchema) //de acuerdo al esquema creado se usa User para ir guardando los usuarios 