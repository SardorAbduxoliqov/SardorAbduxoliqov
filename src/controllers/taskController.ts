/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import axios from 'axios';
import Task from '../models/Task';

const URL_API = 'https://random.dog/woof.json';

// eslint-disable-next-line consistent-return
const getListOfImage = async (req: Request, res: Response) => {
  try {
    const imageData = await axios.get(URL_API);
    return res.render('tasks/list', { data: imageData.data, path: '/' });
  } catch (error) {
    console.log(error.message);
  }
};


const getAll = async (req: Request, res: Response) => {
  try {
    const images = await Task.find().sort({ fileSizeBytes: 1 });
    console.log(images[1]);
    return res.render('tasks/all', { data: images, path: '/all' });
  } catch (error) {
    console.log(error.message);
  }
};

const postListOfImage = async (req: Request, res: Response) => {
  try {
    const imageData = await axios.get(URL_API);
    console.log(imageData, 'post request is working!');
    await Task.insertMany(imageData.data);
    return res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};

const getSearchResult = async (req: Request, res: Response) => {
  try {
    await Task.find({$or:[{fileSizeBytes:{'$regex': req.query.search}}, {url:{'$regex':req.query.search}}]}, (err,data)=>{
      if(err){
            console.log(err);
        }else{
            res.render('tasks/all',{ data, path: "/all" });
        }
    })
  } catch (error) {
     console.log(error);
  }
}
  
export default {
  getListOfImage,
  getAll,
  postListOfImage,
  getSearchResult,
}