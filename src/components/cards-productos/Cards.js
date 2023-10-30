import React, { useContext } from 'react';
import { collectionContext } from '../../context/CollectionContext';
import '../cards-productos/styles.css';
import BotonCompra from '../boton-compra/BotonCompra';
import Notebooks from '../notebooks/Notebooks';

export default function Cards({key,nombre,marca,precio,categoria,descripcion,imagen}) {

  const {collection, setCollection} = useContext(collectionContext)

  return (
    <div className='Card-container'>
        <p>{key}</p>
        <h2>{nombre}</h2>
        <p>Precio: ${precio}</p>
        <p>Marca: {marca}</p>
        <p>{descripcion}</p>
        <p>{imagen}</p>
        <BotonCompra/>          
    </div>
  )
}
