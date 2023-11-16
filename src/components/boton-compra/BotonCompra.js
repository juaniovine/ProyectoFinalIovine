import React from 'react'
import "./styles.css"

export default function BotonCompra({addToCart}) {     
        return (
            <div>
          <button className='boton-comprar' onClick={() => addToCart()}>Agregar al carrito</button>
          </div>
        );
      }
