import React from 'react';
import Card from './Card';
import Imagen1 from '../img/leche.png';
import Imagen2 from '../img/queso.png';
import Imagen3 from '../img/huevo.png'; // Imagen de ejemplo

export default function Cards() {
  const productos = [
    { imagen: Imagen1, titulo: 'MES', descripcion: 'Plan para un MES' },
    { imagen: Imagen2, titulo: 'AÑO', descripcion: 'Plan para un año' },
    { imagen: Imagen3, titulo: 'VIP', descripcion: 'Plan VIP para un año.' },
  ];

  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {productos.map((producto, index) => (
          <div className='col-md-4' key={index}>
            <Card imagen={producto.imagen} titulo={producto.titulo} descripcion={producto.descripcion} />
          </div>
        ))}
      </div>
    </div>
  );
}
