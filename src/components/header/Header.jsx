import { faBed, faCalendarDays, faCar, faChurch, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      
    const {openOptions, setOpenOptions} = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const {adult, children, room} = options;

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
                        <input type="text" placeholder="Busca tu próximo destino" className="header-search-input" />
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
                        <span onClick={() => {setOpenCalendar(!openCalendar)}} className="header-search-text">{`${format(date[0].startDate, "dd/MM/yyyy")} hasta ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openCalendar && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date-range"
                        />}
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faPerson} className="header-icon" />
                        <span className="header-search-text">{`${adult} adulto - ${children} menor/es - ${room} habitación `}</span>
                        <div className="options-host">
                            <div className="options-host-item">
                                <span className="option-host-text">Adulto</span>
                                <div className="options-host-counter">
                                    <button className="option-host-counter-btn">-</button>
                                    <span className="option-host-number">0</span>
                                    <button className="option-host-counter-btn">+</button>
                                </div>
                            </div>
                            <div className="options-host-item">
                                <span className="option-host-text">Menores</span>
                                <div className="options-host-counter">
                                    <button className="option-host-counter-btn">-</button>
                                    <span className="option-host-number">0</span>
                                    <button className="option-host-counter-btn">+</button>
                                </div>
                            </div>
                            <div className="options-host-item">
                                <span className="option-host-text">Habitación</span>
                                <div className="options-host-counter">
                                    <button className="option-host-counter-btn">-</button>
                                    <span className="option-host-number">0</span>
                                    <button className="option-host-counter-btn">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-search-item">
                        <button className="header-btn">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header