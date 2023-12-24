
import express, { static as expressStatic, json } from 'express';
import cors from 'cors'; 

import { readFileSync, writeFileSync } from 'fs';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());


app.get('/fechas', (req, res) => {
    const fechas = obtenerFechas();
    res.json(fechas);
});

app.post('/fechas', (req, res) => {
    const fecha = req.body.fecha;

    if (fecha) {
        const fechas = obtenerFechas();
        fechas.push({ fecha });
        guardarFechas(fechas);
        console.log('Fecha guardada con éxito.');
        res.json({ success: true, message: 'Fecha guardada con éxito.' });
    } else {
        res.status(400).json({ success: false, message: 'Fecha no proporcionada.' });
    }
});

function obtenerFechas() {
    const contenido = readFileSync('fechas.json', 'utf-8');
    return JSON.parse(contenido);
}

function guardarFechas(fechas) {
    const jsonString = JSON.stringify(fechas, null, 2);
    writeFileSync('fechas.json', jsonString, 'utf-8');
}

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
