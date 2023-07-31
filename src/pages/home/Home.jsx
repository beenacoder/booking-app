import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="home-container">
                <Featured />
                <h1 className="home-title">Busca por tipo de propiedad</h1>
                <PropertyList />
                <h1 className="home-title">Lo mas buscado</h1>
                <FeaturedProperties />
                <MailList />
            </div>
        </div>
    )
}

export default Home;