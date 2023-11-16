import React, { useContext } from 'react'
import { collectionContext } from '../../context/CollectionContext'
import {Link, Outlet} from 'react-router-dom'
import '../navbar/styles.css'
import CardWidget from '../cardwidget/CardWidget'
import { useState } from 'react'

export default function () {
  const {collection, setcollection}=useState(collectionContext)

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-custom">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src={'/logo-bazar-tech.png' }className='logo'></img></Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/notebooks">Notebooks</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/celulares">Celulares</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/accesorios">Accesorios</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
            </ul>
            </div>
            </div>
        <CardWidget/>
        </nav>
    </div>
  )
}
