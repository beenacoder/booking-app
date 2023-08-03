import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="search-item">
            <img src="https://p1.pxfuel.com/preview/376/529/162/bed-photos-hotel-room-interior-royalty-free-thumbnail.jpg" 
                alt="" 
                className="search-item-img"
            />
            <div className="search-item-description">
                <h1 className="search-item-title">Hotel Belsavac</h1>
                <span className="search-item-distance">Frente Plaza principal</span>
                <span className="search-item-taxi-option">Taxis a terminal</span>
                <span className="search-item-subtitle">Habitacion frente plaza</span>
                <span className="search-item-features">Aire acondicionado, Wi-fi, Tv Smart</span>
                <span className="search-item-cancel-option">Cancelación sin costo</span>
                <span className="search-item-cancel-option-description">Puedes cancelar en cualquier momento sin costo alguno</span>
            </div>
            <div className="search-item-details">
                <div className="search-item-rating">
                    <span>Excelente</span>
                    <button>9.0</button>
                </div>
                <div className="search-item-deatils-text">
                    <span className="search-item-price">$5000</span>
                    <span className="search-item-tax-option">Incluye IVA</span>
                    <button className="search-item-check-btn">Ver disponibilidad</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem