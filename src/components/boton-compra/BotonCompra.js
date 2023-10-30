import React from 'react'
import "./styles.css"
import Notebooks from '../notebooks/Notebooks';

export default function BotonCompra(key) {
        const buyProducts = () => {
          console.log([key]);
        // actualizarContador();
        };
      
        return (
            <div>
          <button className='boton-comprar' onClick={() => buyProducts()}>Agregar al carrito</button>
          </div>
        );
      }
