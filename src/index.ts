/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response } from 'express';
import routers from './routers/api';
const app = express();
const port = 2000;
app.get('/', (_req: Request, res: Response): void => {
  res.send(
    `<div style="font-size:20px;text-align: center;font-family: sans-serif;font-weight: 600;letter-spacing: 1px;">
    example of path :
    <br> http://localhost:3000/api/image?filename=fjord&width=100&height=100
    </div>
    `
  );
});
app.use('/api', routers);
app.listen(port, (): void => {
  console.log(`server started at http://localhost:${port}`);
});
export default app;
