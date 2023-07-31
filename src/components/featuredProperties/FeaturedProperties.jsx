import './featuredProperties.css';

const FeaturedProperties = () => {
    return (
        <div className='f-prop-container'>
            <div className="f-prop-item">
                <img src="https://p1.pxfuel.com/preview/63/337/133/desert-mountain-road-sunset-royalty-free-thumbnail.jpg" alt="" className='f-prop-img' />
                <span className='f-prop-name'>Guanchin</span>
                <span className='f-prop-city'>Chilecito</span>
                <span className='f-prop-price'>Desde $500 la noche</span>
                <div className='f-prop-rating'>
                    <button>9</button>
                    <span>Excelente</span>
                </div>
            </div>

            <div className="f-prop-item">
                <img src="https://p1.pxfuel.com/preview/490/181/207/mountain-landscape-people-man-guys-royalty-free-thumbnail.jpg" alt="" className='f-prop-img' />
                <span className='f-prop-name'>Santa Florentina</span>
                <span className='f-prop-city'>Chilecito</span>
                <span className='f-prop-price'>Desde $800 la noche</span>
                <div className='f-prop-rating'>
                    <button>9</button>
                    <span>Excelente</span>
                </div>
            </div>

            <div className="f-prop-item">
                <img src="https://p1.pxfuel.com/preview/658/277/129/nature-landscape-mountains-summit-royalty-free-thumbnail.jpg" alt="" className='f-prop-img' />
                <span className='f-prop-name'>Huayrapuca</span>
                <span className='f-prop-city'>Famatina</span>
                <span className='f-prop-price'>Desde $1200 la noche</span>
                <div className='f-prop-rating'>
                    <button>9</button>
                    <span>Excelente</span>
                </div>
            </div>

            <div className="f-prop-item">
                <img src="https://p1.pxfuel.com/preview/532/515/787/california-cars-city-crosswalk-royalty-free-thumbnail.jpg" alt="" className='f-prop-img' />
                <span className='f-prop-name'>Centro</span>
                <span className='f-prop-city'>Chilecito</span>
                <span className='f-prop-price'>Desde $1500 la noche</span>
                <div className='f-prop-rating'>
                    <button>9</button>
                    <span>Excelente</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties