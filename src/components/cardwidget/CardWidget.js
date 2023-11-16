import React, {useState, useContext} from 'react'
import { collectionContext } from '../../context/CollectionContext';
import '../cardwidget/styles.css'
import { Link } from 'react-router-dom';

export default function CardWidget() {
  
  const {collection} = useContext(collectionContext)

  return (
    <div className="carrito-container">
      <Link to={"/cart"}>🛒</Link>
      {collection.length >= 0 && <span className="notification">{collection.length}</span>}
    </div>
  )
}
