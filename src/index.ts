import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});