import React from 'react';

export default function Card({ imagen, titulo, descripcion }) {
  return (
    <div className='card text-center bg-dark'>
      <img src={imagen} alt="Producto" className='imagenes' />
      <div className='card-body text-light'>
        <h4 className='card-title'>{titulo}</h4>
        <p className='card-text text-secondary'>{descripcion}</p>
        <a href='#' className='btn btn-outline-secondary rounded-4'>
          Ver más
        </a>
      </div>
    </div>
  );
}
