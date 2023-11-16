import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../cards-productos/Cards";
import { db } from "../..";
import {collection, getDoc, getDocs} from "firebase/firestore"

export default function Notebooks() {
  
  const [notebooks, setNotebooks] = useState([]);
  const {} = useParams()

  useEffect(() => {
    document.title = 'Bazar Tech - Notebooks';
  }, []);

  const callFSDocs = async ()=> {
    const itemsCollection = collection (db,"notebooks");
    const res = await getDocs(itemsCollection);
    const items = res.docs.map((elm) => ({...elm.data()}));
    setNotebooks(items);
  }
  
  useEffect(()=> {
    callFSDocs()
  },[])

    return (
    <div className="page-container">
      {notebooks.map((elm) => {
        return (
          <Cards
            id={elm.id}
            nombre={elm.nombre}
            marca={elm.marca}
            precio={elm.precio}
            categoria={elm.categoria}
            descripcion={elm.descripcion}
            imagen={elm.imagen}
            altimg={elm.altimg}
          />
        );
      })}
    </div>
  );
}
