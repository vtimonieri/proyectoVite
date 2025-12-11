import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const API_URL = "https://693b1aa09b80ba7262cc70dc.mockapi.io/Productos";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.precio || !form.descripcion) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (isNaN(form.precio) || Number(form.precio) <= 0) {
      setError("El precio debe ser un número válido mayor a 0");
      return;
    }

    setError("");

    const nuevoProducto = {
      nombre: form.nombre,
      precio: Number(form.precio),
      descripcion: form.descripcion,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      });

      if (!res.ok) throw new Error("Error en la API");

      setSuccess("Producto agregado correctamente!");
      setForm({ nombre: "", precio: "", descripcion: "" });

      setTimeout(() => {
        navigate("/productos");
      }, 1000);

    } catch (error) {
      console.error(error);
      setError("Hubo un problema al guardar el producto.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Agregar Producto</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="precio"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
        />

        <textarea
          name="descripcion"
          placeholder="Descripción del producto"
          value={form.descripcion}
          onChange={handleChange}
        />

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

