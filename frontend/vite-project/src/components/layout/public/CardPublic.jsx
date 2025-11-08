import React, { useState } from 'react';
import '../../../assets/css/LayoutPublic/card.css';

const cards = [
  {
    img: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/latam/common/launch/2025/0515/plp/tablets/product-shelf-and-pop-up/view-all/all-matepad-11-5-s.jpg",
    title: "Card title 1",
    text: "Esta es una tarjeta con un diseño elegante similar al estilo de TechStore.",
  },
  {
    img: "https://electronicaonline.net/wp-content/uploads/2023/04/tableta-electronica.webp",
    title: "Card title 2",
    text: "Diseño responsivo, sombras suaves y bordes redondeados.",
  },
  {
    img: "https://comparativas.lavanguardia.com/wp-content/uploads/2021/07/mejores-teclados-gaming-opiniones-1-e1626889847799.jpg",
    title: "Card title 3",
    text: "Ideal para presentar productos con ofertas o descuentos.",
  },
  {
    img: "https://www.pcware.com.co/wp-content/uploads/2024/11/Arm900_1.jpg",
    title: "Card title 4",
    text: "Inspirado en el diseño del proyecto TechStore.",
  },
  {
    img: "https://peruimporta.com/wp-content/uploads/2023/06/Lapiz-tactil-peruimporta.jpg",
    title: "Card title 5",
    text: "Laptop gamer con alto rendimiento y estilo profesional.",
  },
  {
    img: "https://tauretcomputadores.com/images/products/Product_20210420180828134312461.png",
    title: "Card title 6",
    text: "Pantallas 4K para una experiencia visual impresionante.",
  },
  {
    img: "https://enjoyvideogames.com.co/wp-content/uploads/2025/07/14-932-815-01.webp",
    title: "Card title 7",
    text: "Auriculares con sonido envolvente para gamers exigentes.",
  },
  {
    img: "https://jesistem.com/wp-content/uploads/2024/10/5700g.png.webp",
    title: "Card title 8",
    text: "Mouse ergonómico con alta precisión y diseño moderno.",
  },
  {
    img: "https://cdn.thewirecutter.com/wp-content/media/2024/03/webcam-2048px-1.jpg",
    title: "Card title 9",
    text: "Cámara web HD ideal para videollamadas y streaming.",
  },
  {
    img: "https://peruimporta.com/wp-content/uploads/2023/06/Lapiz-tactil-peruimporta.jpg",
    title: "Card title 10",
    text: "Notebook potente y ligera, ideal para estudiantes.",
  }
];

export const CardPublic = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Muestra 4 al inicio

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 4); // Muestra 4 más cada vez
  };

  const hasMore = visibleCards < cards.length; // Si hay más para mostrar

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        {cards.slice(0, visibleCards).map((card, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div className="custom-card">
              <div className="etiqueta-descuento">-20%</div>
              <img src={card.img} alt={card.title} />
              <h5>{card.title}</h5>
              <p>{card.text}</p>
              <button className="btn-comprar">Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón “Ver más” (solo aparece si hay más por mostrar) */}
      {hasMore && (
        <div className="text-center mt-4">
          <button className="btn-vermas" onClick={handleLoadMore}>
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};
