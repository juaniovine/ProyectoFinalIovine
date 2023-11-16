import React from "react";
import "./styles.css";
import Notebooks from "../notebooks/Notebooks";
import Celulares from "../celulares/Celulares";
import Accesorios from "../accesorios/Accesorios";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <h1>Bienvenido a Bazar Tech </h1>
        <h3>¡Tu tienda de tecnología de confianza!</h3>
        <div>
        <Notebooks/>
        <Celulares/>
        <Accesorios/>
        </div>
    </div>
    </div>
  );
}
