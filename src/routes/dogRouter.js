import express from 'express';
import * as dogsController from '../controllers/dogsController.js';

export const dogRouter = express.Router();

dogRouter.post('/', dogsController.createDogController);
