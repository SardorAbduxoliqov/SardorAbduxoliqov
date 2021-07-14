import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const  getListOfImage = async (req: Request, res: Response,next: NextFunction) => {
  const url_api = 'https://random.dog/woof.json';
  try {
    const imageData = await axios.get(url_api);
    res.status(200).json({ data: imageData.data });
  } catch (error) {
    console.log(error.message);
  }
};

export default { getListOfImage };