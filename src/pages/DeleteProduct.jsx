import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { toast } from "react-toastify";

export default function DeleteProduct() {
  const { products, deleteProduct } = useProducts();
  const navigate = useNavigate();

  const [productoId, setProductoId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productoId) {
      toast.error("Seleccioná un producto");
      return;
    }

    const confirmar = window.confirm(
      "¿Seguro que querés eliminar este producto?"
    );

    if (!confirmar) return;

    try {
      await deleteProduct(productoId);

      toast.success("Producto eliminado correctamente");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error("Error al eliminar el producto");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Eliminar producto</h2>

      <form onSubmit={handleSubmit} className="mt-3 col-md-6">
        <select
          className="form-select mb-3"
          value={productoId}
          onChange={(e) => setProductoId(e.target.value)}
        >
          <option value="">Seleccione un producto</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre} - ${p.precio}
            </option>
          ))}
        </select>

        <button type="submit" className="btn btn-danger w-100">
          Eliminar producto
        </button>
      </form>
    </div>
  );
}
