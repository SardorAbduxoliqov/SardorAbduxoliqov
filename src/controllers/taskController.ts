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

// eslint-disable-next-line consistent-return
const getAll = async (req: Request, res: Response) => {
    if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // Get all campgrounds from DB
       await Task.find({fileSizeBytes: regex}, function(err, url){
           if(err){
               console.log(err);
           } else {
              if(url.length < 1) {
                const message = "this size image not found"
              }
                res.render("tasks/all",{data: url});
           }
        });
    } else {
        // Get all campgrounds from DB
        await Task.find({}, function(err, allImages){
           if(err){
               console.log(err);
           } else {
              res.render("tasks/all",{data:allImages});
           }
        });
    }
  // try {
  //   const images = await Task.find().sort({ fileSizeBytes: 1 });
  //   console.log(images[1]);
  //   return res.render('tasks/all', { data: images, path: '/all' });
  // } catch (error) {
  //   console.log(error.message);
  // }
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
    return res.redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};


function escapeRegex(text: RegExpExecArray ) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

export default {
  getListOfImage,
  getAll,
  postListOfImage,
};
