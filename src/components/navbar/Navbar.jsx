import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarContainer">
                <Link to='/' style={{textDecoration: 'none', color:'white'}}>
                    <span className="logo">CervantesBooking</span>
                </Link>
                <div className="navbarItems">
                    <button className="navbarBtn">Registrate</button>
                    <button className="navbarBtn">Inicia Sesión</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar