const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const app = express();

// Configuración de middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Configura CORS antes de las rutas
app.use(bodyParser.json()); // Middleware para analizar JSON en las solicitudes

// Configuración de rutas
app.use('/api', routes);

// Configuración del puerto
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en el puerto ${port}`);
});
