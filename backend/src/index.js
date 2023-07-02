import app from './app.js';
import { conexionDB } from './db.js';

conexionDB(); //primero inicia la base de datos
app.listen(3000)
console.log('servidor puerto', 3000)