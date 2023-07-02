import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.router.js"

//la funcion express() devuelve un objeto
const app = express();

app.use(morgan('dev')); //da mensajes de las peticiones que le llegan al backend
app.use(express.json()); //interpreta el json de las peticiones
app.use(cookieParser()); // interpreta las cookies de la cabecera

app.use(authRoutes);  //puedo escribir... app.use("api", authRoutes) .... para no escribir en todas las rutas api
export default app;
