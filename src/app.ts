import express, { Application, Request, Response } from 'express';

const app: Application = express();

import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middleware/globalErrorHandler';

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Bike Servicing Server...');
});
app.use(globalErrorHandler);

export default app;
