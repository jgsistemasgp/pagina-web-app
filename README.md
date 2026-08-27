# Página Web App

Una aplicación web básica con frontend en HTML/CSS/JS y backend en Node.js usando Express.

## Instrucciones

1. Instala las dependencias:

```bash
npm install
```

2. Arranca el servidor:

```bash
npm start
```

3. Abre tu navegador en:

```text
http://localhost:3000
```

## Estructura del proyecto

- `server.js` - Servidor Express que entrega el frontend y una API simple.
- `public/index.html` - Página principal.
- `public/styles.css` - Estilos de la página.
- `public/script.js` - Lógica cliente para consumir la API.

## API de ejemplo

- `GET /api/hello` devuelve un mensaje JSON.

## Producción y despliegue

### Render (recomendado para esta app)

Este proyecto funciona muy bien directamente en Render porque es una app Node.js con Express.

1. Crea un nuevo Web Service en Render.
2. Conecta el repositorio GitHub.
3. Usa estos valores:

```text
Build Command: npm install
Start Command: node server.js
```

4. La app incluye `GET /health` para health checks.

Ejemplo de configuración para añadir en el repositorio:

```yaml
services:
  - type: web
    name: jgsistemas-web
    env: node
    plan: free
    buildCommand: npm install
    startCommand: node server.js
    healthCheckPath: /health
    envVars:
      - key: NODE_ENV
        value: production
```

### Vercel

Vercel puede servir esta app, pero necesita una adaptación a Node serverless o un wrapper compatible. Con la estructura actual, la opción más simple es seguir con Render.

Ejemplo conceptual:

```json
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "server.js" }]
}
```

### Netlify

Netlify es ideal para frontend estático; para una app Express hace falta convertir la API a funciones serverless o dejar el frontend estático y mover el backend a una API aparte.

Ejemplo conceptual:

```toml
[build]
  publish = "public"
  command = "npm install"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

### Ejecutar localmente (producción)

```powershell
npm install
npm start
```

### Ejecutar en modo desarrollo

```powershell
npm install
npm run dev
```

### Docker

```bash
docker build -t pagina-web-app .
docker run -p 3000:3000 pagina-web-app
```

o con `docker-compose`:

```bash
docker-compose up --build
```

El servidor expone `GET /health` para comprobaciones de estado.
