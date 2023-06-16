import express from 'express';
import * as dogsController from '../controllers/dogsController.js';

export const dogRoute = express.Router();

dogRoute.post('/', dogsController.createDogController);
