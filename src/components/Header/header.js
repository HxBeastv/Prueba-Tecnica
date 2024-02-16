import React from 'react';
import './header.css'; 

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="header-text">
          <h1>ESTRENOS HD</h1>
        </div>
        <div className="header-buttons">
          <div className="login-button">
            <button>Inicia Sesion</button>
          </div>
          <div className="trial-button">
            <button>Registro Gratuito</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;