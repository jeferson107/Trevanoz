import React from 'react';
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
    img: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/latam/common/launch/2025/0515/plp/tablets/product-shelf-and-pop-up/view-all/all-matepad-11-5-s.jpg",
    title: "Card title 1",
    text: "Esta es una tarjeta con un diseño elegante similar al estilo de TechStore.",
  },
 
];

export const CardDeOferta = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        {cards.map((card, index) => (
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
    </div>
  );
};