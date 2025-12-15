import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function Carrito() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className="mt-3">El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mt-3">
            {cart.map((p) => (
              <li
                key={p.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{p.nombre}</strong>
                  <div className="text-muted">
                    Cantidad: {p.quantity}
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <span>
                    ${p.precio * p.quantity}
                  </span>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(p.id)}
                    aria-label="Eliminar producto del carrito"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h4>Total: ${total}</h4>

            <button
              className="btn btn-outline-danger"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
}
