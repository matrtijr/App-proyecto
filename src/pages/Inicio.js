// src/pages/Inicio.js
import React from 'react';
import Cards from '../components/Cards'; // Importa el componente de tarjetas

const Inicio = () => {
    return (
        <div className="inicio">
            <h1>PLANET FITNES</h1>
            <p>No pain no gain.</p>
            <div className="productos-destacados">
                <h2>Planes</h2>
                <Cards /> {/* Inserta las tarjetas de productos aquí */}
            </div>
        </div>
    );
};

export default Inicio;

