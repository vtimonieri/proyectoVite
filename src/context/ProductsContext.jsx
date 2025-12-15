import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const API_URL = "https://693b1aa09b80ba7262cc70dc.mockapi.io/Productos";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener productos
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Agregar producto (POST + estado)
  const addProduct = async (product) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const nuevo = await res.json();
      setProducts((prev) => [...prev, nuevo]);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, loading, addProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
