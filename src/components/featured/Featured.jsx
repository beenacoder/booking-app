import './featured.css';
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featured-item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Chilecito_calle_Joaqu%C3%ADn_V._Gonz%C3%A1lez.jpg" alt="" className='featured-img'/>
        <div className="featured-titles">
          <h1>Chilecito</h1>
          <h2>60 habitaciones</h2>
        </div>
      </div>
      <div className="featured-item">
        <img src="https://www.turismoestacion.tur.ar/wp-content/uploads/2016/05/Valle-de-la-luna1-1.jpg" alt="" className='featured-img'/>
        <div className="featured-titles">
          <h1>San Juan</h1>
          <h2>80 habitaciones</h2>
        </div>
      </div>
      <div className="featured-item">
        <img src="https://www.serargentino.com/public/images/2020/11/16049512330-Crdoba-773x458.jpg" alt="" className='featured-img'/>
        <div className="featured-titles">
          <h1>Córdoba</h1>
          <h2>190 habitaciones</h2>
        </div>
      </div>
      <div className="featured-item">
        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/80000/80259-Misiones-Province.jpg" alt="" className='featured-img'/>
        <div className="featured-titles">
          <h1>Misiones</h1>
          <h2>120 habitaciones</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
