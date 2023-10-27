import React, {useState} from 'react'
import Cards from '../cards-productos/Cards'

export default function Accesorios() {
    const [accesorios, setAccesorios] = useState([{
        nombre: "Teclado",
        marca:"Asus",
        precio:"$40.000",
        categoria:"Accesorios",
        descripcion:"AMD Ryzen 7 6800H, 16GB de ram, 512 SSD, Nvidia geforce RTX 3060, 144Hz, 2560x1440 ",
    },
    {
        nombre: "Mouse Mx",
        marca:"Asus",
        precio:"$80.000",
        categoria:"Accesorios",
        descripcion:"Intel Celeron N4500 4GB de ram, 128GB SSD, Intel UHD Graphics (Jasper Lake 16 EU) 1920x1080px ",
    },
    {
        nombre: "Auriculares Corsair Virtuoso",
        marca:"Corsair",
        precio:"$60.000",
        categoria:"Accesorios",
        descripcion:"Ryzen 7 7730, 16GB de ram, 1TB SSD, Panel IPS",
    }])


  return (
    <div className='page-container'>
        {accesorios.map((elm) => {
            return <Cards nombre = {elm.nombre} marca = {elm.marca} precio = {elm.precio} categoria = {elm.categoria} descripcion = {elm.descripcion} imagen = {elm.imagen}/>
        })}
    </div>
  )
}


