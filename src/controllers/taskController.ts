/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import axios from 'axios';
import Task from '../models/Task';

const URL_API = 'https://random.dog/woof.json';

// eslint-disable-next-line consistent-return
const getListOfImage = async (req: Request, res: Response) => {
  try {
    const imageData = await axios.get(URL_API);
    return  res.render('tasks/list', {data: imageData.data })
  } catch (error) {
    console.log(error.message);
  }
};

// eslint-disable-next-line consistent-return
const getAll = async (req: Request, res: Response) => {
  try {
    const images = await Task.find().sort({ "fileSizeBytes": 1 } );
    console.log(images[1]);
    return res.render('tasks/all', {data: images})
  } catch (error) {
    console.log(error.message);
  }
};

const postListOfImage = async (
  req: Request,
  res: Response
// eslint-disable-next-line consistent-return
) => {
  // eslint-disable-next-line no-undef
   try {
    const imageData = await axios.get(URL_API);
    console.log(imageData, 'post request is working!');
    await Task.insertMany(imageData.data);
    return res.redirect("/");
    // return res.status(201).render('tasks/list', {data: imageData});
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  getListOfImage,
  getAll,
  postListOfImage,
};
