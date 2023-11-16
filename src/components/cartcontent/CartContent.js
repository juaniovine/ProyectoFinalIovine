import React from "react";
import "./contentstyles.css";
import CartElements from "./CartElements";

export default function CartContent() {
  return (
    <div className="cart-page">
      <h1>Carrito de compras</h1>
      <CartElements />
    </div>
  );
}
