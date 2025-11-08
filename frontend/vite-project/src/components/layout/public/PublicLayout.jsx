import { NavPublic } from "./NavPublic"
import { CarouselPublic } from "./CarouselPublic"
import { CardPublic } from "./CardPublic"
import { ContentOfercta } from "./ContentOfercta"
import { Footer } from "./Footer"
import { CardDeOferta } from "./CardDeOferta"

export const PublicLayout = () => {
  return (
    <>
    <NavPublic/>
    <section>
      <CarouselPublic/>
            {/* Aquí colocamos el título */}
      <div className="text-center my-5">
        <h2 className="fw-bold text-uppercase ">Ofertas</h2>
        <hr className="mx-auto" style={{ width: "100px", height: "3px", backgroundColor: "#0d6efd" }} />
      </div>
      <CardDeOferta/>

      <ContentOfercta/>

              {/* Aquí colocamos el título */}
      <div className="text-center my-5">
        <h2 className="fw-bold text-uppercase ">Recomendaciones </h2>
        <hr className="mx-auto" style={{ width: "100px", height: "3px", backgroundColor: "#0d6efd" }} />
      </div>
      <CardPublic/>
      
    </section>
    <Footer/>
    </>
  )
}
