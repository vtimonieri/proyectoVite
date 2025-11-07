import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'

//function App() {
  //return (
  //  <>
   //   {/* Barra de navegación */}
   //   <Navbar />

     // {/* Rutas de la aplicación */}
     // <Routes>
     //   <Route path="/" element={<Home />} />
     //   <Route path="/productos" element={<Productos />} />
     //   <Route path="/carrito" element={<Carrito />} />
     // </Routes>
    //</>
  
//}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🐾 ¡Hola Vilma! Tu proyecto Vite + React funciona 🐾</h1>
      <p>Si ves esto, todo está correcto 🎉</p>
    </div>
  )
}

export default App


//export default App

