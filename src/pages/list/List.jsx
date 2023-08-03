import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import './list.css';
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
    const location = useLocation();

    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);

    


    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="list-search-title">Buscar</h1>
                        <div className="list-item">
                            <label>Destino</label>
                            <input placeholder={destination} type="text" />
                        </div>

                        <div className="list-item">
                            <label htmlFor="">Check In</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} hasta ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate &&
                                <DateRange
                                    onChange={(item) => { setDate([item.selection]) }}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            }
                        </div>
                        <div className="list-item">
                            <label>Opciones</label>
                            <div className="list-search-options">
                                <div className="list-search-options-item">
                                    <span className="list-search-options-text">Precio mín <small>por noche</small></span>
                                    <input type="number" className="list-search-option-input" />
                                </div>

                                <div className="list-search-options-item">
                                    <span className="list-search-options-text">Precio max <small>por noche</small></span>
                                    <input type="number" className="list-search-option-input" />
                                </div>

                                <div className="list-search-options-item">
                                    <span className="list-search-options-text">Adultos</span>
                                    <input type="number" min={1} className="list-search-option-input" placeholder={options.adult}/>
                                </div>

                                <div className="list-search-options-item">
                                    <span className="list-search-options-text">Menores</span>
                                    <input type="number" min={0} className="list-search-option-input" placeholder={options.children}/>
                                </div>

                                <div className="list-search-options-item">
                                    <span className="list-search-options-text">Habitación</span>
                                    <input type="number" min={1} className="list-search-option-input" placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        <button>Buscar</button>
                    </div>




                    <div className="list-result">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;