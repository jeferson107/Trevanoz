import { NavPublic } from "./NavPublic"
import { CarouselPublic } from "./CarouselPublic"
import { CardPublic } from "./CardPublic"

export const PublicLayout = () => {
  return (
    <>
    <NavPublic/>
    <section>
      <CarouselPublic/>
            {/* Aquí colocamos el título */}
      <div className="text-center my-5">
        <h2 className="fw-bold text-uppercase text-primary">Ofertas</h2>
        <hr className="mx-auto" style={{ width: "100px", height: "3px", backgroundColor: "#0d6efd" }} />
      </div>
      <CardPublic/>
              {/* Aquí colocamos el título */}
      <div className="text-center my-5">
        <h2 className="fw-bold text-uppercase text-primary">Explora y te gustara </h2>
        <hr className="mx-auto" style={{ width: "100px", height: "3px", backgroundColor: "#0d6efd" }} />
      </div>
      <CardPublic/>
    </section>
    </>
  )
}
