/* eslint-disable @typescript-eslint/no-var-requires */
const prosses = (filename: string, width: string, height: string): number => {
  const sharp = require('sharp');
  const Width = parseInt(`${width}`);
  const Height = parseInt(`${height}`);
  sharp(`${process.cwd()}/src/images/${filename}.jpg`)
    .resize(Width, Height)
    .toFile(
      `${process.cwd()}/src/resize/filename=${filename}&width=${width}&height=${height}.jpg`
    );
  return Width * Height;
};
export default prosses;
