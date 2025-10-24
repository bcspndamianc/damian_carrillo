// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint principal
app.get('/', (req, res) => {
  res.send('Hola desde la app de Damian Carrillo 🚀');
});

// Endpoint adicional para prueba de integración
app.get('/suma/:a/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({ resultado: a + b });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor ejecutándose en puerto ${PORT}`));
}

module.exports = app;
