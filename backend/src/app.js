import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.router.js"


//la funcion express() devuelve un objeto
const app = express();

app.use(morgan('dev')); //da mensajes de las peticiones que le llegan al backend
app.use(express.json()); //interpreta el json de las peticiones

app.use(authRoutes);
export default app;
