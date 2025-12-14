import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  height: 100%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
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
    return <p className="p-4">Cargando productos...</p>;
  }

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos disponibles</h2>

      {/* 🔍 Barra de búsqueda */}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Si no hay productos */}
      {productosFiltrados.length === 0 && (
        <div className="mt-4">
          <p>No hay productos que coincidan.</p>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard")}
          >
            Ir a Dashboard
          </button>
        </div>
      )}

      {/* 🧱 Grilla responsive */}
      <div className="row">
        {productosFiltrados.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ProductCard>
              <div>
                <h5>{p.nombre}</h5>
                <p className="fw-bold">${p.precio}</p>
              </div>

              <button className="btn btn-primary mt-2">
                <FaShoppingCart /> Agregar
              </button>
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
}
