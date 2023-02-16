import 'dotenv/config';
import http from 'node:http';
import config from 'config';
import { Express } from 'express';

import logger from './utils/logger';
import app from './app';

const PORT = Number(config.get('app.port')) || 5000;

async function startServer(app: Express) {
  try {
    const server = http.createServer(app);
    server.listen(PORT, () => logger.info(`Server running on port: ${PORT}`));
  } catch (e) {
    logger.error(e);
  }
}

startServer(app);
