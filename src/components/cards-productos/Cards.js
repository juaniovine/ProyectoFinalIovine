import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContext";
import "../cards-productos/styles.css";
import BotonCompra from "../boton-compra/BotonCompra";

export default function Cards({
  id,
  nombre,
  marca,
  precio,
  categoria,
  descripcion,
  imagen,
  altimg,
}) {
  const { collection, setCollection } = useContext(collectionContext);

  const addToCart = () => {
    setCollection([...collection, { nombre, precio, marca, descripcion }]);
    // Guardar en el localStorage
    localStorage.setItem('cart', JSON.stringify(collection));
  };

  return (
    <div className="card-container">
      <h2 className="card-name">{nombre}</h2>
      <p className="card-price">Precio: ${precio}</p>
      <p className="card-brand">Marca: {marca}</p>
      <p className="card-desc">{descripcion}</p>
      <Link to={`/item/${id}`}>
        <img className="card-img" src={imagen} alt={altimg}></img>
      </Link>
      {/* <img classname="card-img" src={imagen} alt={altimg}></img> */}
      <BotonCompra addToCart={addToCart} />
    </div>
  );
}
