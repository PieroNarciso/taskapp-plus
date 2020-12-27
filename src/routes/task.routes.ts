import { Router } from 'express';

import * as controller from '../controllers/task.controller';
import { authenticateJWT } from '../auth';


const router = Router();

router.get('/', authenticateJWT, controller.getAll);
router.post('/', authenticateJWT, controller.postCreateTask);
router.put('/:_id', authenticateJWT, controller.updateTaskById);
router.delete('/:_id', authenticateJWT, controller.deleteTaskById);

export default router;
