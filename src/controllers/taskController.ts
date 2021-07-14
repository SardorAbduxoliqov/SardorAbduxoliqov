import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import Task from '../models/Task';

const getListOfImage = async (req: Request, res: Response, next: NextFunction) => {
  const url_api = 'https://random.dog/woof.json';
  try {
    const imageData = await axios.get(url_api);
    res.render('tasks/list', {data: imageData.data })
  } catch (error) {
    console.log(error.message);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const images = await Task.find();
    console.log(images);
    res.render('tasks/all', {data: images})
  } catch (error) {
    console.log(error.message);
  }
};

const postListOfImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url_api = 'https://random.dog/woof.json';
  try {
    const imageData = await axios.get(url_api);
    console.log(imageData.data, "post request is working!");
    res.status(200).json({ data: imageData.data });
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  getListOfImage,
  getAll,
  postListOfImage,
};
