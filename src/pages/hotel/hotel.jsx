import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hotel.css'

const images = [
    {
        src:"https://i2.pickpik.com/photos/515/349/183/hotel-rooms-living-room-room-hotel-preview.jpg",
    },
    {
        src:"https://storage.needpix.com/rsynced_images/hotel-rooms-663454_1280.jpg",
    },
    {
        src:"https://thumbs.dreamstime.com/b/bathroom-3-22530142.jpg",
    },
    {
        src:"https://c8.alamy.com/comp/AP39GG/hotel-room-ritz-carlton-hotel-singapore-AP39GG.jpg",
    },
    {
        src:"https://l450v.alamy.com/450v/m99816/singapore-apr-2nd-2015-beautiful-living-room-interior-with-view-in-a-luxury-hotel-room-of-the-marina-bay-sands-resort-m99816.jpg",
    },
    {
        src:"https://media-cdn.tripadvisor.com/media/photo-s/12/9f/0b/15/photo7jpg.jpg",
    },
]

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openSlider, setOpenSlider] = useState(false)

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotel-container">
                {openSlider &&
                    <div className="slider">

                    </div>
                }
                <div className="hotel-wrapper">
                    <button className='hotel-reserve-btn'>Reserva Ahora!</button>
                    <h1 className="hotel-title">Hotel Belsavac</h1>
                    <div className="hotel-address">
                        <FontAwesomeIcon icon={faLocation} />
                        <span>9 de Julio 72</span>
                    </div>
                    <span className="hotel-distance">Excelente ubicación, pleno centro de la ciudad</span>
                    <span className="hote-price-promo">Quedate 3 noches por el precio de 2</span>
                    <div className="hotel-images">
                        {images.map((image, index) => (
                            <div key={index} className="hotel-img-wrapper">
                                <img onClick={()=>setSlideNumber(index)} src={image.src} alt="" className='hotel-img'/>
                            </div>
                        ))}
                    </div>
                    <div className="hotel-details">
                        <div className="hotel-details-text">
                            <h1 className="hotel-details-title">Alójate en un clásico de la ciudad</h1>
                            <p className="hotel-deatils-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quis porro voluptatibus temporibus sapiente illum molestiae officia aliquam, sequi fuga illo asperiores modi eaque, odit natus reprehenderit doloremque sunt ab?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt numquam dignissimos autem quo voluptatibus exercitationem officia natus reiciendis sequi, recusandae quod, reprehenderit accusamus nulla. At in tempora distinctio aliquam animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias maiores veniam minus animi magni, vel totam dolores, asperiores eum, perferendis voluptate. Reiciendis ullam rerum aperiam autem veniam dignissimos eaque.</p>
                        </div>

                        <div className="hotel-details-price">
                            <h1>Precio promocional 9 noches!</h1>
                            <span>Ubicado en pleno centro de la ciudad este hotel tiene una excelente vista de toda la plaza principal.</span>
                            <h2><b>$5500</b>(9 noches)</h2>
                            <button>Reserva ahora!</button>
                        </div>
                    </div>
                </div>
                    <MailList />
                    <Footer />
            </div>
        </div>
    )
}

export default Hotel;