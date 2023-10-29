import React from 'react'
import "./styles.css"

export default function BotonCompra(actualizarContador) {
        const handleClick = () => {
          // Realiza alguna acción al hacer clic en el botón, como agregar el producto al carrito.
        actualizarContador();
        };
      
        return (
            <div>
          <button onClick={handleClick}>Agregar al carrito</button>
          </div>
        );
      }
