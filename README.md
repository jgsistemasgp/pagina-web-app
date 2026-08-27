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

Opciones rápidas:

- Ejecutar localmente (producción):

```powershell
npm install
npm start
```

- Ejecutar en modo desarrollo (recarga automática):

```powershell
npm install
npm run dev
```

- Docker (construir y ejecutar):

```bash
docker build -t pagina-web-app .
docker run -p 3000:3000 pagina-web-app
```

o con `docker-compose`:

```bash
docker-compose up --build
```

El servidor expone `GET /health` para comprobaciones de estado.
