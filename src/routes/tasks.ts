import { Router } from 'express';
import controller from '../controllers/taskController';

const router = Router();

router.get('/all', controller.getAll);
router.get('/search', controller.getSearchResult);
router.post('/', controller.postListOfImage);
router.get('/', controller.getListOfImage);

export default router;
