/* eslint-disable @typescript-eslint/no-var-requires */
const prosses = (filename: string, width: string, height: string): string => {
  const sharp = require('sharp');
  let error = '';
  sharp(`${process.cwd()}/src/images/${filename}.jpg`)
    .resize(parseInt(`${width}`), parseInt(`${height}`))
    .toFile(
      `${process.cwd()}/src/resize/filename=${filename}&width=${width}&height=${height}.jpg`,
      (err: string): void => {
        error = err;
      }
    );
  return error;
};
export default prosses;
