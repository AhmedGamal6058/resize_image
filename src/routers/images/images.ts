import express from 'express';
import logger from '../../utilities/logger';
const image  = express();
image.get('/',logger, (req, res) => {
    setTimeout(() => {
        res.sendFile(`src/resize/filename=${req.query.filename}&width=${req.query.width}&height=${req.query.height}.jpg`, {root: process.cwd()})
       }, 1000);
});

export default image;