import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#222",
        padding: "1rem",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* LOGO */}
        <h2 style={{ margin: 0 }}>Mi Tienda</h2>

        {/* MENÚ */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>

          {/* Cuando NO hay usuario */}
          {!user && (
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
              Login
            </Link>
          )}

          {/* Cuando HAY usuario */}
          {user && (
            <>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
              <Link to="/productos" style={{ color: "white", textDecoration: "none" }}>Productos</Link>
              <Link to="/carrito" style={{ color: "white", textDecoration: "none" }}>Carrito</Link>
              <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>

              {/* NUEVO → Agregar producto */}
              <Link to="/add-product" style={{ color: "white", textDecoration: "none" }}>
                Agregar Producto
              </Link>

              {/* Bienvenida */}
              <span style={{ color: "#ccc", fontStyle: "italic" }}>
                Bienvenida, {user.email}
              </span>

              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "1px solid white",
                  padding: "0.3rem 0.7rem",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
