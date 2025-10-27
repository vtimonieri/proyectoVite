

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd'
    }}>
      <Link to="/">🏠 Inicio</Link>
      <Link to="/productos">🛍️ Productos</Link>
      <Link to="/carrito">🛒 Carrito</Link>
    </nav>
  )
}
