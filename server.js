const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;

// Security and performance
app.use(helmet());
app.use(compression());

// Serve static assets with caching
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d', etag: false }));

app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde el backend!' });
});

// Health check for monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
