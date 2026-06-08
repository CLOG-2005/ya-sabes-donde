# Guía de despliegue

Antes de subir la aplicación reviso que todo funcione localmente:

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm start
```

La página queda disponible en `http://localhost:8080` y el estado del servidor se puede comprobar en `http://localhost:8080/health`.

## Google Cloud Run

La opción más sencilla es desplegar directamente desde el código fuente.

```bash
gcloud auth login
gcloud config set project TU_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com

gcloud run deploy ya-sabes-donde \
  --source . \
  --region southamerica-west1 \
  --allow-unauthenticated \
  --port 8080
```

Cloud Run utiliza el `Dockerfile` del proyecto, construye la imagen y entrega una URL pública.

Capturas recomendadas para el informe:

1. Proyecto seleccionado en Google Cloud.
2. Servicios habilitados.
3. Proceso de construcción.
4. Servicio de Cloud Run creado.
5. URL pública funcionando.
6. Ruta `/health` respondiendo correctamente.

## Azure Web App

Desde Azure Portal:

1. Crear un grupo de recursos.
2. Crear una nueva Web App.
3. Seleccionar publicación mediante código.
4. Elegir Linux y una versión LTS de Node.js.
5. Abrir Deployment Center.
6. Conectar GitHub.
7. Seleccionar este repositorio y la rama `main`.
8. Configurar el comando de inicio como `npm start`.

Si Azure no construye automáticamente el proyecto, agregar esta variable en la configuración de la Web App:

```text
SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

El proceso esperado es:

```bash
npm install
npm run build
npm start
```

Capturas recomendadas:

1. Grupo de recursos.
2. Web App creada.
3. Runtime y plan elegidos.
4. Deployment Center conectado a GitHub.
5. Ejecución de GitHub Actions.
6. Página publicada.
7. Ruta `/health` funcionando.

## Datos que debo confirmar

Antes de la entrega final tengo que revisar:

- Número oficial de WhatsApp.
- Enlace exacto de Google Maps.
- Instagram del negocio.
- Horarios reales.
- Productos y precios vigentes.
- Cobertura y costo del delivery.

## Explicación para la exposición

La interfaz está desarrollada con React y TypeScript. Vite genera los archivos optimizados dentro de `dist` y Express se encarga de servirlos usando el puerto entregado por la plataforma. Para Google Cloud Run se utiliza Docker y para Azure Web App se ejecuta como una aplicación Node.js conectada al repositorio de GitHub.
