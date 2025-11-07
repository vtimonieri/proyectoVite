import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

// Datos de ejemplo
const productos = [
  { id: 1, nombre: "Collar antipulgas", precio: 2500 },
  { id: 2, nombre: "Juguete mordedor", precio: 1800 },
  { id: 3, nombre: "Cama para perro", precio: 8500 }
];

// Endpoint
app.get("/productos", (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`🐶 Servidor backend en http://localhost:${PORT}`);
});
