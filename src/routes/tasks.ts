import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import controller from '../controllers/task'
const router = Router();

// Model
import Task from '../models/Task';


router.get('/list', controller.getListOfImage);


export default router;
