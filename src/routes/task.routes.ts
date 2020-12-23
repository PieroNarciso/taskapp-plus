import { Router } from 'express';

import * as controller from '../controllers/task.controller';


const router = Router();

router.get('/', controller.getAllByUserId);
router.post('/', controller.postCreateTask);
router.put('/:_id', controller.updateTaskById);
router.delete('/:_id', controller.deleteTaskById);

export default router;
