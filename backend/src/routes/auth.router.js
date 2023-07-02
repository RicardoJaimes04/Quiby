import { Router } from "express";
import {login, logout, register, perfil} from "../controllers/auth.controllers.js";
import {authRequired} from "../middleware/validartoken.js";

const router = Router();

router.post('/api/registro', register);
router.post('/api/login', login);
router.post('/api/logout', logout);
router.get('/api/perfil',authRequired, perfil); //authrequired para porteger la ruta

export default router;