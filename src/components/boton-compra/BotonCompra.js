import React from 'react'
import "./styles.css"
import Notebooks from '../notebooks/Notebooks';

export default function BotonCompra() {
        const buyProducts = () => {
          console.log("estoy comprado este producto");
        // actualizarContador();
        };
      
        return (
            <div>
          <button className='boton-comprar' onClick={() => buyProducts()}>Agregar al carrito</button>
          </div>
        );
      }
