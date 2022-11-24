/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response } from 'express';
import prosses from '../../utilities/prosses';
const image = express();
image.get('/', (req: Request, res: Response): void => {
  function promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }
  async function asyncCall() {
    console.log('calling');
    const fs = require('fs');
    const path =`/src/resize/filename=${req.query.filename}&width=${req.query.width}&height=${req.query.height}.jpg`;
    try {
      if (fs.existsSync(`${process.cwd()}/${path}`)) {
        res.sendFile(
            `/src/resize/filename=${req.query.filename}&width=${req.query.width}&height=${req.query.height}.jpg`,
            { root: process.cwd() }
          );
      }
      else{
        prosses(
            `${req.query.filename}`,
            `${req.query.width}`,
            `${req.query.height}`
          );
      }
    } catch (err) {
      console.error("err");
    }
    const result = await promise();
    console.log(result);
    res.sendFile(
      `/src/resize/filename=${req.query.filename}&width=${req.query.width}&height=${req.query.height}.jpg`,
      { root: process.cwd() }
    );
  }
  asyncCall();
});
export default image;
