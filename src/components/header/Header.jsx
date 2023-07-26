import { faBed, faCar, faChurch, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Estadía</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Vuelos/Colectivos</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Alquileres de autos</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faChurch} />
                        <span>Turismo</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxis a Aeropuerto/Terminal</span>
                    </div>
                </div>
                <h1 className="header-title">Vive la vida es hoy!</h1>
                <p className="header-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid temporibus blanditiis veniam quibusdam delectus voluptatem hic voluptate fuga nostrum reprehenderit odio impedit fugiat, debitis, minus ab voluptates natus, sint voluptas!
                </p>
                <button className="header-btn">Inicia Sesión / Regístrate</button>
                <div className="header-search">
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faBed} className="header-icon" />
                        <input type="text" placeholder="Busca tu próximo destino" className="header-search-input"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header