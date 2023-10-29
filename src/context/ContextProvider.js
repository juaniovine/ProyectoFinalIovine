import React, { useEffect, useState } from "react";
import { collectionContext } from './CollectionContext'


export default function ContextProvider({children}) {

    const [collection, setCollection] = useState()

  return (
    <div>
        <collectionContext.Provider value={{collection, setCollection}}>
        {children}
        </collectionContext.Provider> 
    </div>
  )
}
