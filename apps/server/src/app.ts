import express from 'express';

import './db/mysql.js';
import { exampleRouter } from './routes/example.js';
import { healthRouter } from './routes/health.js';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/health', healthRouter);
  app.use('/api/example', exampleRouter);

  app.use((_req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
}
