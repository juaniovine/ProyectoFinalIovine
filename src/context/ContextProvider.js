import React, { useEffect, useState } from "react";
import { collectionContext } from './CollectionContext'


export default function ContextProvider({children}) {

    const [collection, setCollection] = useState([]);
    const [cart, setCart] = useState([]);

  return (
    <div>
        <collectionContext.Provider value={{cart, collection, setCart}}>
        {children}
        </collectionContext.Provider> 
    </div>
  )
}
