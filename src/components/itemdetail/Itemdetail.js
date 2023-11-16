import React from 'react'
import { useParams } from 'react-router-dom'

export default function itemdetail() {
    const{id}=useParams()
  return (
    <div>
      <h2>Detalles del producto {id}</h2>
      {/* Resto de la vista de detalle */}
    </div>
  )
}
