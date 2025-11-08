import React from 'react'
import '../../../assets/css/LayoutPublic/ContentOfercta.css'

const ofertas = [
  {
    img: "https://virtualtronic.com.co/wp-content/uploads/2021/09/Cargador-Lenovo-Ideapad-100S-11Iby-5V-4A-20w.jpg",
    titulo: "Laptop Gamer Pro",
    descripcion: "Potente y rápida con RTX 4060 y 16GB RAM.",
    precioOriginal: "$1,500.00",
    precioOferta: "$1,099.00",
    descuento: "-30%"
  },
  {
    img: "https://www.pcware.com.co/wp-content/uploads/2024/05/G18I-ST50_0211-1200x675.jpg",
    titulo: "Monitor Curvo 27''",
    descripcion: "Pantalla Full HD con diseño envolvente.",
    precioOriginal: "$300.00",
    precioOferta: "$210.00",
    descuento: "-30%"
  },
  {
    img: "https://www.pcware.com.co/wp-content/uploads/2020/11/ADATA-SSD-Ultimate-SU650-240GBSATA_530x530.jpg",
    titulo: "Teclado Mecánico RGB",
    descripcion: "Iluminación personalizable y switches táctiles.",
    precioOriginal: "$120.00",
    precioOferta: "$79.99",
    descuento: "OUTLET"
  }
]

export const ContentOfercta = () => {
  return (
    <section className="seccion-liquidacion">
      <h2>🔥 LIQUIDACIÓN TOTAL - ¡Últimas Unidades! 🔥</h2>

      <div className="lista-productos">
        {ofertas.map((item, index) => (
          <article className="producto" key={index}>
            <div className="etiqueta-descuento">{item.descuento}</div>
            <img src={item.img} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <span className="precio-original">{item.precioOriginal}</span>
            <span className="precio liquidado">{item.precioOferta}</span>
            <button className="btn-comprar">¡Comprar Ahora!</button>
          </article>
        ))}
      </div>
    </section>
  )
}
