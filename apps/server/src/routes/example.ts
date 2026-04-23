import { Router } from 'express';

export const exampleRouter = Router();

exampleRouter.get('/', (_req, res) => {
  res.json({ message: 'example placeholder' });
});
