import { Router } from 'express';
import controller from '../controllers/employees.controller.js';

const router = Router();

router.get('/sales-managers', controller.findSalesManagers);
router.get('/id/:id', controller.findById);

export default router;
