import express from 'express';
import prosses from '../../utilities/prosses';
const image  = express();
image.get('/',(req, res) => {
    const error:string= prosses(`${req.query.filename}`,`${req.query.width}`,`${req.query.height}`)
    console.log(error)
    setTimeout(() => {
        res.sendFile(`/src/resize/filename=${req.query.filename}&width=${req.query.width}&height=${req.query.height}.jpg`, {root: process.cwd()})
       }, 1000);
});
export default image;