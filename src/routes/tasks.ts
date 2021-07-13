import { Router, Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import axios from 'axios';
const router = Router();

// Model
import Task from '../models/Task';

router.post(
  '/create',
  async (req: Request, res: Response, next: NextFunction) => {
    const { fileSizeBytes, url } = req.body;
    const url_api = 'https://random.dog/woof.json';

    await fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
      })
      .then((file) => {
        return res.status(201).json(file);
      });
  }
);

//   const task = new Task({ fileSizeBytes, url });
//   await task.save();
//   res.status(201).json(task);

router.get('/list', async (req: Request, res: Response) => {
  const url_api = 'https://random.dog/woof.json';
  try {
    const imageData = await axios.get(url_api);
    res.status(200).render('tasks/list', {
      data: imageData.data,
    });
  } catch (error) {
    console.log(error.message);
  }
  // const tasks = await Task.find().sort({fileSizeBytes: 1});
  // return res.status(200).json(tasks);
});

router.post('/delete/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;
  const deletedItem = await Task.findByIdAndDelete(_id);
  res.status(200).json(deletedItem);
});

// router.post('/deleteAll', async (req: Request, res: Response) => {
//   const task = await Task.find(item => {
//     return item = [];
//   });
//   console.log(task);
//   res.status(200).json(task);
// });

router.post('/list', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await Task.findByIdAndUpdate(id, {
    title,
    description,
  });
  res.redirect('/tasks/list');
});

export default router;
