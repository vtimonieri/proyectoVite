import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#222', padding: '1rem' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Inicio</Link>
      <Link to="/productos" style={{ color: '#fff', marginRight: '1rem' }}>Productos</Link>
      <Link to="/carrito" style={{ color: '#fff' }}>Carrito</Link>
    </nav>
  )
}
