import image from './images/images';
import express, { Request, Response } from 'express';
const routers = express();
routers.get('/', (req: Request, res: Response): void => {
  res.send('hellow sir');
});
routers.use('/image', image);
export default routers;
