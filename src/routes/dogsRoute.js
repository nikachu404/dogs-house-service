import express from 'express';
import * as dogsController from '../controllers/dogsController.js';

export const dogsRoute = express.Router();

dogsRoute.get('/', dogsController.getAllDogsController);
