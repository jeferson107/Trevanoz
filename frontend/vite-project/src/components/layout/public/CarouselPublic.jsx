import React from 'react';
import '../../../assets/css/LayoutPublic/carusel.css';

export const CarouselPublic = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide banner-carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.pcware.com.co/wp-content/uploads/2025/04/DYN_01.jpg"
            alt="Banner 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador.jpg"
            alt="Banner 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ofiprix.com/img/cms/BLOG/Agosto/04/imagen-1.webp"
            alt="Banner 3"
          />
        </div>
      </div>

      {/* Capa de texto tipo banner */}
      <div className="banner-overlay">
        <h2>¡Potencia tu Mundo Digital!</h2>
        <p>Descubre las últimas PC, laptops y accesorios con las mejores ofertas de fin de año.</p>
        <button className="btn-banner">Explorar Productos</button>
      </div>
    </div>
  );
};
