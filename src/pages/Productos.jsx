import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

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

  // 👉 SOLO para verificar que el carrito se actualiza
  console.log("🛒 Carrito actual:", cart);

  if (loading) {
    return <p className="p-4">Cargando productos...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Productos disponibles</h2>

      {productos.length === 0 && (
        <div>
          <p>No hay productos cargados.</p>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard")}
          >
            Ir a Dashboard
          </button>
        </div>
      )}

      <div className="row">
        {productos.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">${p.precio}</p>

                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => {
                    addToCart(p);
                    toast.success("Producto agregado al carrito");
                  }}
                >
                  <FaShoppingCart className="me-2" />
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
