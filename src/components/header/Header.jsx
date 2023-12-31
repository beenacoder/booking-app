import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faCar, faChurch, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    const [destination, setDestination] = useState('');

    const [openCalendar, setOpenCalendar] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);  
    
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const {adult, children, room} = options;

    const navigate = useNavigate()

    const handleDestination = (e) => {
        setDestination(e.target.value);
    }

    const handleOptions = (name, operation)=> {
        setOptions(prev=>{return{
            ...prev, [name]: operation === 'plus' ? options[name] + 1 : options[name] - 1
        }})
    }

    const handleSearch = () => {
        navigate('/hoteles', {state: {destination, date, options}})
    }
    return (
        <div className='header'>
            <div className={type === 'list' ? "header-container list-mode" : "header-container"}>
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
                {type !== 'list' &&
                    <>
                        <h1 className="header-title">Vive la vida es hoy!</h1>
                        <p className="header-description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid temporibus blanditiis veniam quibusdam delectus voluptatem hic voluptate fuga nostrum reprehenderit odio impedit fugiat, debitis, minus ab voluptates natus, sint voluptas!
                        </p>
                        <button className="header-btn">Inicia Sesión / Regístrate</button>
                        <div className="header-search">
                            <div className="header-search-item">
                                <FontAwesomeIcon icon={faBed} className="header-icon" />
                                <input type="text" placeholder="Busca tu próximo destino" className="header-search-input" onChange={handleDestination}/>
                            </div>
                            <div className="header-search-item">
                                <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
                                <span onClick={() => { setOpenCalendar(!openCalendar), setOpenOptions(false) }} className="header-search-text">{`${format(date[0].startDate, "dd/MM/yyyy")} hasta ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openCalendar && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    className="date-range"
                                />}
                            </div>
                            <div className="header-search-item">
                                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                                <span onClick={() => { setOpenOptions(!openOptions), setOpenCalendar(false) }} className="header-search-text">{`${adult} adulto - ${children} menor/es - ${room} habitación `}</span>
                                {openOptions &&
                                    <div className="options-host">
                                        <div className="options-host-item">
                                            <span className="option-host-text">Adulto</span>
                                            <div className="options-host-counter">
                                                <button className="option-host-counter-btn" onClick={() => { handleOptions('adult', 'minus') }} disabled={options.adult <= 1}>-</button>
                                                <span className="option-host-number">{options.adult}</span>
                                                <button className="option-host-counter-btn" onClick={() => { handleOptions('adult', 'plus') }}>+</button>
                                            </div>
                                        </div>
                                        <div className="options-host-item">
                                            <span className="option-host-text">Menores</span>
                                            <div className="options-host-counter">
                                                <button className="option-host-counter-btn" onClick={() => { handleOptions('children', 'minus') }} disabled={options.children <= 0}>-</button>
                                                <span className="option-host-number">{options.children}</span>
                                                <button className="option-host-counter-btn" onClick={() => { handleOptions('children', 'plus') }}>+</button>
                                            </div>
                                        </div>
                                        <div className="options-host-item">
                                            <span className="option-host-text">Habitación</span>
                                            <div className="options-host-counter">
                                                <button className="option-host-counter-btn" onClick={() => { handleOptions('room', 'minus') }} disabled={options.room <= 1}>-</button>
                                                <span className="option-host-number">{options.room}</span>
                                                <button className="option-host-counter-btn" onClick={() => { handleOptions('room', 'plus') }}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="header-search-item">
                                <button className="header-btn" onClick={handleSearch}>Buscar</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header