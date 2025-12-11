import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // LOGIN con validación real
  const login = (email, password) => {
    // Usuario “de prueba”
    if (email === "admin@mail.com" && password === "1234") {
      setUser({ email });
      localStorage.setItem("authToken", "token-demo");
      return true;  // <-- ¡IMPORTANTE!
    }

    return false; // si no coincide, el login.jsx muestra "credenciales incorrectas"
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
