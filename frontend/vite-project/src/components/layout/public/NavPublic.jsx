import React from 'react'
import { BsCart3 } from "react-icons/bs";


export const NavPublic = () => {
    return (
        <header>
            {/* Header azul superior */}
            <div  className=" text-white  py-3 px-4 d-flex align-items-center justify-content-between"  style={{ backgroundColor: "#1E2A78"  }}>
                {/* Logo */}
                <h1 className="m-0 fs-3 fw-bold " style={{ color: "#F75B1C" }}>
                    TR<span className="" style={{ color: "#ffffff" }}>E</span>VANOZ
                </h1>

                {/* Buscador */}
                <form className="d-flex w-50">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Hinted search text"
                        aria-label="Search"
                    />
                </form>

                {/* Botones sesión y carrito */}
                <div className="d-flex align-items-center gap-3">
                    <a href="#" className="text-white text-decoration-none fw-semibold">
                        Iniciar sesión
                    </a>
                    <a href="#" className="text-white text-decoration-none fw-semibold">
                        Regístrate
                    </a>
                    <div className="position-relative">
                        <BsCart3 size={24} />

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                        </span>
                    </div>
                </div>
            </div>

            {/* Barra de navegación inferior */}
            <nav className="navbar navbar-expand-lg bg-light border-top border-bottom sticky-top">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Iniciar sesión
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Oferta
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Computador
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Impresora
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                TV
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Equipo de sonido
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Videojuego
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Ropa mujer
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Accesorios
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
