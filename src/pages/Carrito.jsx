import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  console.log("CARRITO ACTUAL:", cart);

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p className="mt-3">El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mt-3">
            {cart.map((p, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{p.nombre}</strong>
                  <div>Cantidad: {p.cantidad}</div>
                </div>

                <div>
                  <div>${p.precio}</div>
                  <strong>${p.precio * p.cantidad}</strong>
                </div>
              </li>
            ))}
          </ul>

          <h4 className="mt-3">Total: ${total}</h4>

          {/* ✅ BOTÓN VACÍAR CARRITO */}
          <button
            className="btn btn-danger mt-3"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
