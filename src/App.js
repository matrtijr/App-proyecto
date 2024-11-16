import React, { useState } from 'react';
import './App.css';
import Inicio from './pages/Inicio';
import Registrarse from './pages/Registrarse';
import Mas from './pages/Mas';
import Ubicaciones from './pages/Ubicaciones';
import logo from '../src/img/logo.jpg'

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('Inicio');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setMostrarLogin(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Inicio':
        return <Inicio />;
      case 'Registrarse':
        return isAuthenticated ? <Registrarse /> : <p>Inicia sesión para ver el inventario.</p>;
      case 'Agregar Producto':
        return isAuthenticated ? <Mas /> : <p>Inicia sesión para agregar productos.</p>;
      case 'Pedidos':
        return isAuthenticated ? <Ubicaciones /> : <p>Inicia sesión para ver los pedidos.</p>;
      default:
        return <Inicio />;
    }
  };

  // Para comprobar si el evento onClick se dispara
  const handleIconClick = () => {
    console.log("Se hizo clic en el icono de usuario");
    setMostrarLogin(true);
  };

  return (
    <div id="root">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <button onClick={() => setCurrentPage('Inicio')}>Inicio</button>
        <button onClick={() => setCurrentPage('Registrate')}>Registrarse</button>
        <button onClick={() => setCurrentPage('Ubicaciones')}>Ubicaciones</button>
        <button onClick={() => setCurrentPage('Mas')}>Mas</button>
        <span onClick={handleIconClick} className="icono-usuario">Login 👤</span>
      </nav>

      <div className="pagina-inicio">
        {renderPage()}
      </div>

      {/* Aplicamos la clase 'show' cuando el modal debe estar visible */}
      <div className={`modal ${mostrarLogin ? 'show' : ''}`}>
        <div className="modal-content">
          <h2>Iniciar Sesión</h2>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button onClick={handleLogin}>Iniciar Sesión</button>
          <button onClick={() => setMostrarLogin(false)}>Cerrar</button>
        </div>
      </div>

      <footer className="footer">
        Datos de Contacto | Tel: 558303012 | Email: planetfitnes@gmail.com | KRELBOYNES-DEVS®
      </footer>
    </div>
  );
}

export default App;
