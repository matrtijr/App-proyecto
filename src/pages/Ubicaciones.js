// src/pages/Pedidos.js
import React from 'react';
import { Table } from 'react-bootstrap';

function Ubicaciones() {
  const pedidos = [
    { id: 1, cliente: 'Juan Pérez', total: 150 },
    { id: 2, cliente: 'Ana López', total: 300 },
  ];

  return (
    <div>
      <h2>Ubicaciones</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.cliente}</td>
              <td>${pedido.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Ubicaciones;
