import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import './list.css';

const List = () => {
    const location = useLocation();

    const [destination, setDestination] = useState(location.state.location);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);


    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="list-search-title">Buscar</h1>
                        <div className="list-item">
                            <label htmlFor="">Destino</label>
                            <input placeholder={destination} type="text" />
                        </div>

                        <div className="list-item">
                            <label htmlFor="">Check In</label>
                            <span>{`${format(date[0].startDate, "dd/MM/yyyy")} hasta ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        </div>
                    </div>




                    <div className="list-result"></div>
                </div>
            </div>
        </div>
    )
}

export default List;