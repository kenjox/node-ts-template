import express, { Express, Request, Response } from 'express';
import routeNotFoundException from './middlewares/routeNotFound';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app: Express = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  return res.sendStatus(200);
});

/** Handles 404 routes for all http methods */
app.all('*', routeNotFoundException);

/** Globally handle errors/exception thrown */
app.use(globalErrorHandler);

export default app;
