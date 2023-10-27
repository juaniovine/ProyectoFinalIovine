import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../cards-productos/Cards'

export default function Celulares() {
    const [celulares, setCelulares] = useState([{
        nombre: "iPhone 15 Pro",
        marca:"Apple",
        precio:"$900.000",
        categoria:"Celulares",
        descripcion:"AMD Ryzen 7 6800H, 16GB de ram, 512 SSD, Nvidia geforce RTX 3060, 144Hz, 2560x1440 ",
    },
    {
        nombre: "Google Pixel 7 Pro",
        marca:"Google",
        precio:"$700.000",
        categoria:"Celulares",
        descripcion:"Intel Celeron N4500 4GB de ram, 128GB SSD, Intel UHD Graphics (Jasper Lake 16 EU) 1920x1080px ",
    },
    {
        nombre: "Samsung S23",
        marca:"Samsung",
        precio:"$830.000",
        categoria:"Celulares",
        descripcion:"Ryzen 7 7730, 16GB de ram, 1TB SSD, Panel IPS",
    }])


  return (
    <div className='page-container'>
        {celulares.map((elm) => {
            return <Cards nombre = {elm.nombre} marca = {elm.marca} precio = {elm.precio} categoria = {elm.categoria} descripcion = {elm.descripcion} imagen = {elm.imagen}/>
        })}
    </div>
  )
}


