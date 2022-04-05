import { Router } from 'express';
import professorController from '../controllers/professorController.js';

const router = Router();

router.post('/status', professorController.criarProfessor);

export default router;