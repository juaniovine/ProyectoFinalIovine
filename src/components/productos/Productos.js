// import React, {useState} from 'react'
// import { useParams } from 'react-router-dom'
// import Cards from '../cards-productos/Cards'

// export default function Productos() {
//         // const { id } = useParams()
//         const [productos, setProductos] = useState([
//             {
//             id: '1',
//             nombre: "Asus Rog Stix G15",
//             marca:"Asus",
//             precio:"$1.200.000",
//             categoria:"Notebooks",
//             descripcion:"AMD Ryzen 7 6800H, 16GB de ram, 512 SSD, Nvidia geforce RTX 3060, 144Hz, 2560x1440 ",
//         },
//         {
//             id: '2',
//             nombre: "Asus VivoBook Go 15",
//             marca:"Asus",
//             precio:"$250.000",
//             categoria:"Notebooks",
//             descripcion:"Intel Celeron N4500 4GB de ram, 128GB SSD, Intel UHD Graphics (Jasper Lake 16 EU) 1920x1080px ",
//         },
//         {
//             id: '3',
//             nombre: "Asus Vivobook Ryzen 7",
//             marca:"Asus",
//             precio:"$760.000",
//             categoria:"Notebook",
//             descripcion:"Ryzen 7 7730, 16GB de ram, 1TB SSD, Panel IPS",
//         }])
    
    
//       return (
//         <div className='Card-container'>
//             {productos.map((elm) => {
//                 return <Cards nombre = {elm.nombre} marca = {elm.marca} precio = {elm.precio} categoria = {elm.categoria} descripcion = {elm.descripcion} imagen = {elm.imagen}/>
//             })}
//         </div>
//       )
//     }
    