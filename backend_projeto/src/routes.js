import { Router } from 'express';
import authMiddleware from './middlewares/authMiddleware.js'
import admMiddleware from './middlewares/admMiddleware.js'
import salaController from './controllers/salaController.js';
import horarioController from './controllers/horarioController.js';
import professorController from './controllers/professorController.js';

const router = Router();

// Rotas para Horario
router.post('/horario/criar', authMiddleware, horarioController.criarHorario);
router.get('/horario/mostrar', horarioController.mostrarHorario);
router.patch('/horario/modificar', authMiddleware, horarioController.modificarHorario);
router.delete('/horario/deletar', authMiddleware, horarioController.deletarHorario);

// Rotas para sala
router.post('/sala/criar', admMiddleware, salaController.criarSala);
router.get('/sala/mostrar', salaController.mostrarSala);
router.patch('/sala/modificar', admMiddleware, salaController.modificarSala);
router.delete('/sala/deletar', admMiddleware, salaController.deletarSala);

// Rotas para professor
router.post('/professor/criar', professorController.criarProfessor);
router.get('/professor/mostrar', admMiddleware, professorController.mostrarProfessor);
router.patch('/professor/modificar', admMiddleware, professorController.modificarProfessor);
router.delete('/professor/deletar', admMiddleware, professorController.deletarProfessor);
router.post('/professor/autenticar', professorController.gerarTokenAcesso);

export default router;