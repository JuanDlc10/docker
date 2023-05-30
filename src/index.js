const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Personas = mongoose.model('Persona', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

mongoose.connect('mongodb://mongo/mydatabase')
app.get('/', async (_req, res) => {
    console.log('listando... personas...')
    const persona = await Personas.find();
    return res.send(persona)
  })
  app.get('/crear', async (_req, res) => {
    console.log('creando...')
    await Personas.create({ tipo: 'Juan', estado: 'Good' })
    return res.send('ok')
  })

app.listen(3000);
console.log('Server on port', 3000)