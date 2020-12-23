import { Router } from 'express';

import * as controller from '../controllers/user.controller';


const router = Router()

router.get('/', controller.getList);
router.post('/', controller.createUser);
router.get('/:_id', controller.getById);
router.delete('/:_id', controller.deleteById);

export default router;
