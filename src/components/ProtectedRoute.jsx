import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2 style={{ color: "red" }}>Acceso denegado</h2>
        <p>Debés iniciar sesión para acceder al Dashboard.</p>

        {/* Redirección al login */}
        <Navigate to="/login" state={{ from: location }} replace />
      </div>
    );
  }

  return children;
}

