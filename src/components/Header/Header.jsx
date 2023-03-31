import React from 'react'

const Header = () => {
    return (
        <div className='header'>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container">
                    <a className="navbar-brand" to='/'>Encontra Posto</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" role='button' aria-current="page"> Avaliações </a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sobre nós
                                </a>
                                <ul className="dropdown-menu pr-10" aria-labelledby="navbarDropdown">
                                    <a href='#'><li className="dropdown-item link" role='button'>Quem Somos</li></a>
                                    <a href='#'><li className="dropdown-item link" role='button'> Nossas Soluções </li></a>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;