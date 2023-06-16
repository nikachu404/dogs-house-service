import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { dogsRouter, dogRouter, pingRouter } from './routes/index.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(cors());

app.use('/dogs', dogsRouter);
app.use('/dog', dogRouter);
app.use('/ping', pingRouter);

app.listen(PORT);
