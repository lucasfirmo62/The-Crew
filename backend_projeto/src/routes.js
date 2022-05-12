import { Router } from 'express';
import authMiddleware from './middlewares/authMiddleware.js'
import salaController from './controllers/salaController.js';
import horarioController from './controllers/horarioController.js';
import professorController from './controllers/professorController.js';

const router = Router();

//não utiliza middleware
router.get('/horario/mostrar', horarioController.mostrarHorario);
router.get('/sala/mostrar', salaController.mostrarSala);
router.post('/professor/criar', professorController.criarProfessor);
router.post('/professor/autenticar', professorController.gerarTokenAcesso);

//utiliza middleware
router.use(authMiddleware);
// Rotas para Horario
router.post('/horario/criar', horarioController.criarHorario);
router.patch('/horario/modificar', horarioController.modificarHorario);
router.delete('/horario/deletar', horarioController.deletarHorario);

/*acrecentarmiddleware aqui*/
// Rotas para sala
router.post('/sala/criar', salaController.criarSala); //bloquear função para não SU
router.patch('/sala/modificar', salaController.modificarSala); //bloquear função para não SU
router.delete('/sala/deletar', salaController.deletarSala); //bloquear função para não SU

// Rotas para professor
router.get('/professor/mostrar', professorController.mostrarProfessor); //bloquear função para não SU
router.patch('/professor/modificar', professorController.modificarProfessor); //autorizar somente a si
router.delete('/professor/deletar', professorController.deletarProfessor);  //bloquear função para não SU

export default router;