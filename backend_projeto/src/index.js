import express from 'express';
import { json } from 'express';
import cors from 'cors';
//chamando as rotas dos controllers
import router from './routes.js'

const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());

app.use(json());

app.use(router);

app.listen(port, () => {
    console.log(`Server Iniciou no Port: ${port}`);
});