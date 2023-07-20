import { Router } from 'express';
import controller from '../controllers/offices.controller.js';

const router = Router();

router.get('/', controller.findAll);
router.get('/id/:id', controller.findById);

export default router;
