import React, { useEffect, useState } from "react";
import { collectionContext } from './CollectionContext'


export default function ContextProvider({children}) {

    const [cart, setCart] = useState([]);

    // Obtener la colección del localStorage al cargar la aplicación
    const storedCollection = JSON.parse(localStorage.getItem('cart')) || [];
    const [collection, setCollection] = useState(storedCollection);

    // Actualizar el localStorage cuando cambia la colección
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(collection));
    }, [collection]);

  return (
    <div>
        <collectionContext.Provider value={{collection, setCollection, cart, setCart}}>
        {children}
        </collectionContext.Provider> 
    </div>
  )
}
