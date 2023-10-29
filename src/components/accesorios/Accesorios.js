import React, {useEffect, useState} from 'react'
import Cards from '../cards-productos/Cards'
import { db } from "../..";
import {collection, getDoc, getDocs} from "firebase/firestore"

export default function Accesorios() {
    const [accesorios, setAccesorios] = useState([])

    const callFSDocs = async ()=> {
        const itemsCollection = collection (db,"accesorios");
        const res = await getDocs(itemsCollection);
        const items = res.docs.map((elm) => ({...elm.data()}));
        setAccesorios(items);
      }
      
      useEffect(()=> {
        callFSDocs()
      },[])
    

  return (
    <div className='page-container'>
        {accesorios.map((elm) => {
            return <Cards nombre = {elm.nombre} marca = {elm.marca} precio = {elm.precio} categoria = {elm.categoria} descripcion = {elm.descripcion} imagen = {elm.imagen}/>
        })}
    </div>
  )
}


