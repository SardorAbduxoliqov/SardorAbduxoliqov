import { Router, Request, Response, NextFunction } from 'express';
import controller from '../controllers/taskController';
const router = Router();

// Model
import Task from '../models/Task';

router.get('/list', controller.getListOfImage);

export default router;
