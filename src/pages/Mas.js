// src/pages/AgregarProducto.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Mas() {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para enviar los datos al backend o actualizar el estado.
    console.log({ nombre, categoria, precio });
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombreProducto">
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="categoriaProducto">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoría del producto"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="precioProducto">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio del producto"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar Producto
        </Button>
      </Form>
    </div>
  );
}

export default Mas;
