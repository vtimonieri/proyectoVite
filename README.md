# Tienda de Mascotas - Proyecto - TALENTO TECH - 2025

Este proyecto es una **tienda de accesorios para mascotas**, desarrollado en **React**, que permite gestionar productos, agregarlos al carrito, y administrar un dashboard para usuarios/admin. Utiliza **MockAPI** para simular la persistencia de datos.

---

## Tecnologías

- React 18  
- JavaScript (ES6+)  
- React Router DOM  
- Context API  
- CSS / Tailwind  
- MockAPI (para almacenamiento de productos)  

---



## Estructura del proyecto

src/
 ├─ components/        # Componentes reutilizables (Navbar, ProtectedRoute, etc.)
 ├─ context/           # Contextos de React (ProductsContext, CartContext)
 ├─ pages/             # Páginas del proyecto (Home, Productos, Carrito, Dashboard, Login)
 ├─ App.jsx            # Componente principal con rutas
 └─ main.jsx           # Entry point
##Funcionalidades

Visualizar productos disponibles

Agregar productos al carrito

Editar o eliminar productos (Dashboard/admin)

Login y rutas protegidas

Persistencia de datos mediante MockAPI

Mensajes de éxito/error al realizar acciones

Carrito de compras dinámico 

##Uso

Ingresar a la página principal para ver productos.

Agregar productos al carrito y revisar total.

Acceder al Dashboard como admin para agregar, editar o eliminar productos.

El login permite rutas protegidas para funciones administrativas.