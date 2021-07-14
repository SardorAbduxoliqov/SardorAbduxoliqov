import { Router, Request, Response, NextFunction } from 'express';
import controller from '../controllers/taskController';
const router = Router();

// Model
import Task from '../models/Task';

router.get('/', controller.getListOfImage);

export default router;
