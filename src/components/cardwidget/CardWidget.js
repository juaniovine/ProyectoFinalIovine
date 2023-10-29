import React, {useState, useContext} from 'react'
import { collectionContext } from '../../context/CollectionContext';
import '../cardwidget/styles.css'

export default function CardWidget() {
  
  const [cantidadItems, setCantidadItems] = useState(0); 

  const {collection, setCollection} = useContext(collectionContext)

  return (
    <div className="carrito-container">
      <p>🛒</p>
      {/* <p>{collectionContext.length}</p> */}
      {cantidadItems >= 0 && <span className="notification">{cantidadItems}</span>}
    </div>
  )
}
