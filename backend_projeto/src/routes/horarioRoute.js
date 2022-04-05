import { Router } from 'express';
import horarioController from '../controllers/horarioController.js';

const router = Router();

router.post('/status', horarioController.criarHorario);

export default router;