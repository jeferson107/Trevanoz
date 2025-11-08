import React from 'react';
import '../../../assets/css/LayoutPublic/carusel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const CarouselPublic = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade banner-carousel"
      data-bs-ride="carousel"
      data-bs-interval="4000" // 4 segundos por imagen
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active banner-slide"
          style={{ backgroundImage: "url('https://www.pcware.com.co/wp-content/uploads/2025/04/DYN_01.jpg')" }}
        ></div>
        <div
          className="carousel-item banner-slide"
          style={{ backgroundImage: "url('https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador.jpg')" }}
        ></div>
        <div
          className="carousel-item banner-slide"
          style={{ backgroundImage: "url('https://www.ofiprix.com/img/cms/BLOG/Agosto/04/imagen-1.webp')" }}
        ></div>
      </div>

      {/* Overlay de texto */}
      <div className="banner-overlay">
        <h2>¡Potencia tu Mundo Digital!</h2>
        <p>Descubre las últimas PC, laptops y accesorios con las mejores ofertas de fin de año.</p>
        <button className="btn-banner">Explorar Productos</button>
      </div>
    </div>
  );
};
