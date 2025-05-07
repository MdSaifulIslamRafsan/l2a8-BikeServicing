import express, { Application, Request, Response } from 'express';

const app: Application = express();

import cors from 'cors';
import router from './routes';

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Bike Servicing Server...');
});

export default app;
