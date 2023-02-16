import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  return res.sendStatus(200);
});

export default app;
