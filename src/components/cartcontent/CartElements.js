import React, { useContext, useEffect, useState } from 'react';
import { collectionContext } from '../../context/CollectionContext';

export default function CartElements() {
  const { collection, setCollection } = useContext(collectionContext);
  const [updatedCollection, setUpdatedCollection] = useState([...collection]);

  useEffect(() => {
    document.title = 'Bazar Tech - Carrito';
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...updatedCollection];
    updatedItems[index] = {
      ...updatedItems[index],
      cantidad: parseInt(newQuantity, 10) || 1,
    };

    setUpdatedCollection(updatedItems);
    setCollection(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...updatedCollection];
    updatedItems.splice(index, 1);

    setUpdatedCollection(updatedItems);
    setCollection(updatedItems);
  };

  const calculateTotal = () => {
    return updatedCollection.reduce((total, item) => {
      return total + (item.precio * (item.cantidad || 1));
    }, 0);
  };

  return (
    <div>
      {collection.length > 0 ? (
        <table className='cart-item-list'>
          <thead>
            <tr>
              <th>Producto</th>
              {/* <th>Imagen</th> */}
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Total producto</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {updatedCollection.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                {/* <td>
                  <img src={item.imagen} alt={`Imagen de ${item.nombre}`} style={{ width: '50px', height: '50px' }} />
                </td> */}
                <td>{item.descripcion}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.cantidad || 1}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                  />
                </td>
                <td>${item.precio * (item.cantidad || 1)}</td>
                <td>
                  <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay elementos en el carrito.</p>
      )}

      <div className='cart-item-total'>
        <strong>Total compra: ${calculateTotal()}</strong>
      </div>
    </div>
  );
}
