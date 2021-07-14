import { Router } from 'express';
import controller from '../controllers/taskController';

const router = Router();

// Model

router.get('/all', controller.getAll);
router.post('/', controller.postListOfImage);
router.get('/', controller.getListOfImage);

export default router;
