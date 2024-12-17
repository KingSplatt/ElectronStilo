import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

const app = express();
const puerto = 3002;
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/hola', (_req, res) => {
    res.send('Hola Mundo');
});
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
