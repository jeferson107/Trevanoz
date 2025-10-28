import { Router } from "express";
import { register, login } from "../controllers/user.js";

// Definir las rutas
const router = Router();

router.post('/register', register)
router.post('/login', login);

export default router;