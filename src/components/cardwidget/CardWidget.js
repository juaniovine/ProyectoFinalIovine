import React, {useState, useContext} from 'react'
import { collectionContext } from '../../context/CollectionContext';
import '../cardwidget/styles.css'
import { Link } from 'react-router-dom';

export default function CardWidget() {
  
  const [cantidadItems, setCantidadItems] = useState(0); 

  const {collection, setCollection} = useContext(collectionContext)

  return (
    <div className="carrito-container">
      <Link to={"/cart"}>🛒</Link>
      {/* <p>{collectionContext.length}</p> */}
      {cantidadItems >= 0 && <span className="notification">{cantidadItems}</span>}
    </div>
  )
}
