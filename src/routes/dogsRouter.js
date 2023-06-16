import express from 'express';
import * as dogsController from '../controllers/dogsController.js';

export const dogsRouter = express.Router();

dogsRouter.get('/', dogsController.getAllDogsController);
