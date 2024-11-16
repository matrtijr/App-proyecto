// src/pages/Inventario.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function Registrarse() {
  const productos = [
    { id: 1, nombre: 'Leche', categoria: 'Lácteos', precio: 20 },
    { id: 2, nombre: 'Queso', categoria: 'Lácteos', precio: 50 },
  ];

  return (
    <div>
      <h2>Inventario de Productos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>${producto.precio}</td>
              <td>
                <Button variant="warning" className="me-2">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Registrarse;
