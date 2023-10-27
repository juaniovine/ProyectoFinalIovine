import React from 'react';
import '../cards-productos/styles.css';
import Notebooks from '../notebooks/Notebooks';

export default function Cards({nombre,marca,precio,categoria,descripcion,imagen}) {
  return (
    <div className='Card-container'>
        <h2>{nombre}</h2>
        <p>{precio}</p>
        <p>Marca: {marca}</p>
        <p>{descripcion}</p>
        <p>{imagen}</p>
    </div>
  )
}
