import React from 'react'

export const CarouselPublic = () => {
    return (
        <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{
        maxWidth: "1300px",      // ancho máximo
        margin: "0 auto",        // centrar horizontalmente
        borderRadius: "12px",    // bordes redondeados (opcional)
        overflow: "hidden",      // recorta bordes del carrusel
      }}
        >
            <div className="carousel-inner" style={{
          height: "500px", // 🔹 altura fija del contenedor
        }}>
                <div className="carousel-item active">
                    <img
                        src="https://www.pcware.com.co/wp-content/uploads/2025/04/DYN_01.jpg"
                        className="d-block "
                        alt="Banner 1"
                         style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // 🔹 mantiene proporción sin distorsionar
            }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador.jpg"
                        className="d-block "
                        alt="Banner 2"
                         style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // 🔹 mantiene proporción sin distorsionar
            }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://www.ofiprix.com/img/cms/BLOG/Agosto/04/imagen-1.webp"
                        className="d-block "
                        alt="Banner 3"
                         style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // 🔹 mantiene proporción sin distorsionar
            }}
                    />
                </div>
            </div>
        </div>
    )
}
