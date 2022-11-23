/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  const sharp = require('sharp');
  sharp(`src/images/${req.query.filename}.jpg`)
    .resize(parseInt(`${req.query.width}`), parseInt(`${req.query.height}`))
    .toFile(
      `src/resize/filename=${req.query.filename}&width=${req.query.width}&height=${req.query.height}.jpg`,
      (err: string, info: string) => {
        console.log('yes', err, info);
      }
    );
  next();
};
export default logger;
