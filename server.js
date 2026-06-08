import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const distPath = path.join(__dirname, "dist");
const port = Number(process.env.PORT) || 8080;

app.disable("x-powered-by");
app.use(
  express.static(distPath, {
    maxAge: "1h",
    etag: true,
  }),
);

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok", service: "ya-sabes-donde" });
});

app.use((_request, response) => {
  response.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Ya Sabes Donde ejecutándose en el puerto ${port}`);
});
