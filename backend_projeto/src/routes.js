import { Router } from 'express';
import salaController from './controllers/salaController.js';
import horarioController from './controllers/horarioController.js';
import professorController from './controllers/professorController.js';

const router = Router();

// Rotas para sala
router.post('/sala/criar', salaController.criarSala);
router.get('/sala/mostrar', salaController.mostrarSala);
router.patch('/sala/modificar', salaController.modificarSala);
router.delete('/sala/deletar', salaController.deletarSala);

// Rotas para professor
router.post('/professor/criar', professorController.criarProfessor);
router.get('/professor/mostrar', professorController.mostrarProfessor);
router.patch('/professor/modificar', professorController.modificarProfessor);
router.delete('/professor/deletar', professorController.deletarProfessor);
router.post('/professor/autenticar', professorController.gerarTokenAcesso);

// Rotas para Horario
router.post('/horario/criar', horarioController.criarHorario);
router.get('/horario/mostrar', horarioController.mostrarHorario);
router.patch('/horario/modificar', horarioController.modificarHorario);
router.delete('/horario/deletar', horarioController.deletarHorario);

export default router;