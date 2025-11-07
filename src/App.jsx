import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'

function App() {
  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  )
}

export default App

