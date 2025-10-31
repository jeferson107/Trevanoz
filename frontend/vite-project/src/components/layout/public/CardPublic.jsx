import React from 'react'

const cards = [
  {
    img: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/latam/common/launch/2025/0515/plp/tablets/product-shelf-and-pop-up/view-all/all-matepad-11-5-s.jpg",
    title: "Card title 1",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    img: "https://electronicaonline.net/wp-content/uploads/2023/04/tableta-electronica.webp",
    title: "Card title 2",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    img: "https://comparativas.lavanguardia.com/wp-content/uploads/2021/07/mejores-teclados-gaming-opiniones-1-e1626889847799.jpg",
    title: "Card title 3",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
  },
  {
    img: "https://www.pcware.com.co/wp-content/uploads/2024/11/Arm900_1.jpg",
    title: "Card title 4",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  }
];

export const CardPublic = () => {
    return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        {cards.map((card, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div className="card custom-card h-100 shadow-sm">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}
