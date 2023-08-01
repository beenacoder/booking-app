import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import './list.css';

const List = () => {
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
                            <input type="text" />
                        </div>

                        <div className="list-item">
                            <label htmlFor="">Llegada</label>
                            <input type="text" />
                        </div>
                    </div>




                    <div className="list-result"></div>
                </div>
            </div>
        </div>
    )
}

export default List;