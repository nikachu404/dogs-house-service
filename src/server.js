import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { dogsRoute, dogRoute, pingRoute } from './routes/index.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(cors());

app.use('/dogs', dogsRoute);
app.use('/dog', dogRoute);
app.use('/ping', pingRoute);

app.listen(PORT);
