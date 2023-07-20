import { Router } from 'express';
import controller from '../controllers/offices.controller.js';

const router = Router();

router.get('/', controller.findAll);
router.get('/id/:id', controller.findById);
router.get('/territory/jobtitle/:jobtitle', controller.findOfficesByJobTitle)

export default router;
