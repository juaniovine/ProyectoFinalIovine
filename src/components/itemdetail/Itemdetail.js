import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../cards-productos/Cards';
import { db } from "../..";
import { collection, getDocs } from "firebase/firestore";
import './styles.css'

export default function Itemdetail() {
  const [productos, setProductos] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    document.title = "Bazar Tech - Producto";

    const callFSDocs = async () => {
      try {
        const itemsCollection = collection(db,"notebooks");
        const res = await getDocs(itemsCollection);
        const items = res.docs.map((elm) => ({ id: elm.id, ...elm.data() }));

        const selectedProduct = items.filter((item) => item.id === productId);

        setProductos(selectedProduct);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    callFSDocs();
  }, [productId]);

  return (
    <>
      <div className='item-title'>
        <h2>{productos.length > 0 ? productos[0].nombre : 'Cargando...'}</h2>
      </div>      
      <div className="page-container">
        {productos.length > 0 && (
          <Cards
            key={productos[0].id}
            nombre={productos[0].nombre}
            marca={productos[0].marca}
            precio={productos[0].precio}
            categoria={productos[0].categoria}
            descripcion={productos[0].descripcion}
            imagen={productos[0].imagen}
            altimg={productos[0].altimg}
          />
        )}
      </div>
    </>
  );
}
