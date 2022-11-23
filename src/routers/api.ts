import express from 'express';
import image from './images/images';
const routers  = express();
routers.get('/', (req, res) => {
   res.send("hellow sir");
});
routers.use("/image",image)
export default routers;