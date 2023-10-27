import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Cards from "../cards-productos/Cards";

export default function Notebooks() {  
  const [notebooks, setNotebooks] = useState([{
    nombre: "MacBooks Air 15",
    marca:"Apple",
    precio:"$1.900.000",
    categoria:"Notebooks",
    descripcion:"M1 16gb ram 1TB SSD",
},
{
    nombre: "Google Pixel 7 Pro",
    marca:"Google",
    precio:"$700.000",
    categoria:"Notebooks",
    descripcion:"Intel Celeron N4500 4GB de ram, 128GB SSD, Intel UHD Graphics (Jasper Lake 16 EU) 1920x1080px ",
},
{
    nombre: "Samsung S23",
    marca:"Samsung",
    precio:"$830.000",
    categoria:"Notebooks",
    descripcion:"Ryzen 7 7730, 16GB de ram, 1TB SSD, Panel IPS",
}])
  
  return (
    <div className="page-container">
      {notebooks.map((elm) => {
        return (
          <Cards
            nombre={elm.nombre}
            marca={elm.marca}
            precio={elm.precio}
            categoria={elm.categoria}
            descripcion={elm.descripcion}
            imagen={elm.imagen}
          />
        );
      })}
    </div>
  );
}
