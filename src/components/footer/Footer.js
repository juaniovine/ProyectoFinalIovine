import React from 'react'
import './styles.css'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-social">
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-links">
        {/* <a href="/acerca-de">Acerca de nosotros</a>
        <a href="/contacto">Contacto</a>
        <a href="/terminos">Términos y condiciones</a> */}
      </div>
      <h3>&copy; {new Date().getFullYear()} BazarTech</h3>
         <ul>
             <li>CUIT: 30-50246050-2</li>
             <li>Av. Libertador 6250 - Off: 505</li>
             <li>info@bazartech.com </li>
             <li>+54 11-7405-5680</li>
           </ul>
          
    </footer>
  );
}
