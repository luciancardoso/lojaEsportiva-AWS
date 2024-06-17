import { Link } from "react-router-dom"

const Navbar = () => {
    return(

        <div className="container position-sticky z-index-sticky top-0">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar rounded-3 navbar-expand-lg bd-navbar blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div className="container-fluid px-0">
                            <a className="navbar-brand text-white font-weight-bolder ms-sm-3" href="/" rel="tooltip" title="Loja Esportiva" data-placement="bottom">
                            Loja Esportiva
                            </a>
                            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon mt-2 text-white">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </span>
                            </button>
                            <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                                <ul className="navbar-nav navbar-nav-hover ms-auto">
                                    <li className="nav-item dropdown dropdown-hover mx-2">
                                        <Link className="nav-link text-white ps-2 d-flex cursor-pointer align-items-center btn btn-outline-dark" aria-current="page" to="/clientes">
                                        <i className="bi bi-shop"></i>
                                         Clientes
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown dropdown-hover mx-2">
                                        <Link className="nav-link text-white ps-2 d-flex cursor-pointer align-items-center btn btn-outline-dark" aria-current="page" to="/pedidos">
                                            <i className="bi bi-bag-heart"></i> Pedidos
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown dropdown-hover mx-2">
                                        <Link className="nav-link text-white ps-2 d-flex cursor-pointer align-items-center btn btn-outline-dark">
                                            <i className="bi bi-truck"></i>
                                            Ratreio
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar