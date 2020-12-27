import { Router } from 'express';

import * as controller from '../controllers/user.controller';
import { authenticateJWT } from '../auth';


const router = Router()

router.get('/', authenticateJWT, controller.getList);
router.post('/', controller.createUser);
router.post('/login', controller.loginUser);
router.get('/:_id', authenticateJWT, controller.getById);
router.delete('/:_id', authenticateJWT, controller.deleteById);

export default router;
