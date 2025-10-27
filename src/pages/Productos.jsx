import { useState } from 'react'

export default function Productos() {
  const [productos] = useState([
    { id: 1, nombre: 'Collar para perro', precio: 1500 },
    { id: 2, nombre: 'Cama para gato', precio: 5500 },
    { id: 3, nombre: 'Juguete mordedor', precio: 1200 },
  ])

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map(p => (
          <li key={p.id} style={{ margin: '10px 0' }}>
            <strong>{p.nombre}</strong> — ${p.precio}
            <button style={{ marginLeft: '10px' }}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
