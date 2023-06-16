import express from 'express';

export const pingRouter = express.Router();

pingRouter.get('/', (_req, res) => {
  res.send('Dogshouseservice.Version1.0.1');
});
