import { Router } from 'express';
import salaController from '../controllers/salaController.js';

const router = Router();

router.get('/status', salaController.apiStatus);

export default router;