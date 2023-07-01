import mongoose from "mongoose";

export const conexionDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost/quiby");
        console.log("base de datos conectada");
    }catch (error) {
        console.log(error);
    }
};