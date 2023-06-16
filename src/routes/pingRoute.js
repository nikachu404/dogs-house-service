import express from 'express';

export const pingRoute = express.Router();

pingRoute.get('/', (_req, res) => {
  res.send('Dogshouseservice.Version1.0.1');
});
