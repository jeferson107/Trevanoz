import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../../../assets/css/LayoutPublic/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row text-center text-md-start">
          {/* Logo y descripción */}
          <div className="col-md-4 mb-4">
            <h2 className="logo">
              TR<span className="highlight">E</span>VANOZ
            </h2>
            <p className="footer-text">
              Tu tienda tecnológica de confianza. Encuentra los mejores productos,
              precios y calidad garantizada.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Enlaces rápidos</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Ofertas</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Síguenos</h5>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <p className="m-0">© 2025 <span className="highlight">TREVANOZ</span> | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
