import React, { useContext,useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../cards-productos/Cards'
import { db } from "../..";
import {collection, getDoc, getDocs} from "firebase/firestore"
import ContextProvider from '../../context/ContextProvider';

export default function Celulares() {

    

    const [celulares, setCelulares] = useState([]);

    const callFSDocs = async ()=> {
        const itemsCollection = collection (db,"celulares");
        const res = await getDocs(itemsCollection);
        const items = res.docs.map((elm) => ({...elm.data()}));
        setCelulares(items);
      }
      
      useEffect(()=> {
        callFSDocs()
      },[])

  return (
    <div className='page-container'>
        {celulares.map((elm) => {
            return <Cards key={elm.id} nombre = {elm.nombre} marca = {elm.marca} precio = {elm.precio} categoria = {elm.categoria} descripcion = {elm.descripcion} imagen = {elm.imagen}/>
        })}
    </div>
  )
}


