import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hotel.css'

const Hotel = () => {
    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotel-container">
                <div className="hotel-wrapper">
                    <h1 className="hotel-title">Hotel Belsavac</h1>
                    <div className="hotel-address">
                        <FontAwesomeIcon icon={faLocation} />
                        <span>9 de Julio 72</span>
                    </div>
                    <span className="hotel-distance">Excelente ubicación, pleno centro de la ciudad</span>
                    <span className="hote-price-promo">Quedate 3 noches por el precio de 2</span>
                    <div className="hotel-images">
                        
                    </div>
                </div>
            </div>
            {/* <MailList />
            <Footer /> */}
        </div>
    )
}

export default Hotel;