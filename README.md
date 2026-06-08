# Ya Sabes Donde

Landing page para un negocio de comida rápida en Manta. La página permite revisar el menú, filtrar por categoría, agregar productos a un pedido, cambiar cantidades, dejar notas y enviar el pedido armado por WhatsApp.

También dejé el proyecto preparado para desplegarlo en Google Cloud Run y Azure Web App.

## Tecnologías

- React
- TypeScript
- Vite
- CSS
- Node.js
- Express
- Docker
- GitHub Actions

## Funciones principales

- Menú filtrable.
- Carrito lateral.
- Control de cantidades.
- Notas por producto.
- Cálculo automático del total.
- Pedido generado para WhatsApp.
- Secciones de información, reseñas y ubicación.
- Diseño adaptable a celular y computadora.
- Ruta `/health` para comprobar el servidor.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

La aplicación se abre normalmente en:

```text
http://localhost:8080
```

## Revisar y construir

```bash
npm run typecheck
npm run lint
npm run build
```

## Ejecutar como producción

```bash
npm run build
npm start
```

Para comprobar el servidor:

```text
http://localhost:8080/health
```

## Probar con Docker

```bash
docker build -t ya-sabes-donde .
docker run --rm -p 8080:8080 -e PORT=8080 ya-sabes-donde
```

## Datos que debo cambiar antes de entregar

Los datos principales están en `src/config/site.ts`.

También se pueden configurar con variables de entorno:

```env
VITE_WHATSAPP_NUMBER=593XXXXXXXXX
VITE_MAPS_URL=ENLACE_DE_GOOGLE_MAPS
VITE_INSTAGRAM_URL=ENLACE_DE_INSTAGRAM
```

El número de WhatsApp debe tener el código de Ecuador, sin `+`, espacios ni guiones.

## Deploy

La guía está en `docs/DEPLOY.md`.

## Autor

Carlos Ortiz — estudiante de Ingeniería en Software.
