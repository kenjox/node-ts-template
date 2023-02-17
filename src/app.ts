import express, { Express, Request, Response } from 'express';
import routeNotFoundException from './middlewares/routeNotFound';

const app: Express = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  return res.sendStatus(200);
});

/** Handles 404 routes for all http methods */
app.all('*', routeNotFoundException);

export default app;
