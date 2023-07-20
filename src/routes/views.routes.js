import { Router } from 'express';
import controller from '../controllers/views.controller.js';

const router = Router();

router.get('/', controller.home);
router.get('/employee/id/:id', controller.employee)
router.get('/gestion-vendedores', controller.employeesOffice);

export default router;
