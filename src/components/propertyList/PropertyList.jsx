import './propertyList.css';

const PropertyList = () => {
  return (
    <div className='prop-list'>
        <div className="prop-list-item">
            <img src="https://p0.pxfuel.com/preview/589/134/360/various-america-hotel-hotels-royalty-free-thumbnail.jpg" alt="hoteles" className='prop-list-img' />
            <div className="prop-list-titles">
                <h1>Hoteles</h1>
                <h2>400 hoteles</h2>
            </div>
        </div>

        <div className="prop-list-item">
            <img src="https://p1.pxfuel.com/preview/638/954/413/logo-of-the-department-commercial-street-effect-picture.jpg" alt="hoteles" className='prop-list-img'/>
            <div className="prop-list-titles">
                <h1>Departamentos</h1>
                <h2>120 Departamentos</h2>
            </div>
        </div>

        <div className="prop-list-item">
            <img src="https://p1.pxfuel.com/preview/881/626/573/hut-forest-wooden-nature-outdoors-rustic.jpg" alt="hoteles" className='prop-list-img'/>
            <div className="prop-list-titles">
                <h1>Cabañas</h1>
                <h2>20 Cabañas</h2>
            </div>
        </div>

        <div className="prop-list-item">
            <img src="https://p0.pxfuel.com/preview/701/592/916/landscape-adventure-camp-camping-royalty-free-thumbnail.jpg" alt="hoteles" className='prop-list-img'/>
            <div className="prop-list-titles">
                <h1>Campings</h1>
                <h2>50 campings</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList