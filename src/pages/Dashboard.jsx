import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Bienvenida</h1>
      <h2 style={{ marginTop: 0 }}>Hola, {user?.email} 👋</h2>

      <p>Este es tu panel privado.</p>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* ➕ Agregar producto */}
        <Link to="/add-product">
          <button>Agregar Producto</button>
        </Link>

        {/* ❌ Eliminar producto */}
        <Link to="/delete-product">
          <button style={{ backgroundColor: "orange" }}>
            Eliminar Producto
          </button>
        </Link>

        {/* 👀 Ver productos */}
        <Link to="/productos">
          <button>Ver Productos</button>
        </Link>

        {/* 🚪 Logout */}
            <Link to="/login"></Link>
        <button
    
          onClick={handleLogout}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
