import React, { useContext } from 'react';
import { collectionContext } from '../../context/CollectionContext';
import '../cards-productos/styles.css';
import BotonCompra from '../boton-compra/BotonCompra';

export default function Cards({key,nombre,marca,precio,categoria,descripcion,imagen,altimg}) {

  const {collection, setCollection} = useContext(collectionContext)

  return (
    <div className='card-container'>
        <p className='card-key'>{key}</p>
        <h2 className='card-name'>{nombre}</h2>
        <p className='card-price'>Precio: ${precio}</p>
        <p className='card-brand'>Marca: {marca}</p>
        <p className='card-desc'>{descripcion}</p>
        <img classname='card-img' src={imagen} alt={altimg}></img>
        <BotonCompra/>          
    </div>
  )
}
