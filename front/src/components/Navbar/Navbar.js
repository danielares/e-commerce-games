import { useState, useEffect, Fragment } from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        e-commerce
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/games">
                                    Games
                                </NavLink>
                            </li>

                            {isAuth === true ? (
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/logout">
                                            Logout
                                        </NavLink>
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">
                                            Login
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signup">
                                            Cadastrar
                                        </NavLink>
                                    </li>
                                </Fragment>
                            )}

                            <li className="nav-item">
                                <a className="nav-link" href='/api/games'>
                                    Api
                                </a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Olá, Nome_da_pessoa
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar