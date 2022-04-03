import express from 'express';
import { json } from 'express';
import cors from 'cors';
import router from './routes/statusRoute.js';

const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());

app.use(json());

app.use(router);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});