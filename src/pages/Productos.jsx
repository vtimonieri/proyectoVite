import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_URL = "https://693b1aa09b80ba7262cc70dc.mockapi.io/Productos";

  useEffect(() => {
    async function cargarProductos() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarProductos();
  }, []);

  if (loading) {
    return <p style={{ padding: "2rem" }}>Cargando productos...</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Productos disponibles</h2>

      {/* Si no hay productos */}
      {productos.length === 0 && (
        <div style={{ marginTop: "20px" }}>
          <p>No hay productos cargados.</p>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            Ir a Dashboard
          </button>
        </div>
      )}

      <ul>
        {productos.map((p) => (
          <li key={p.id} style={{ margin: "10px 0" }}>
            <strong>{p.nombre}</strong> — ${p.precio}
            <button style={{ marginLeft: "10px" }}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
