import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            <span className="logo">CervantesBooking</span>
            <div className="navbarItems">
                <button className="navbarBtn">Registrate</button>
                <button className="navbarBtn">Inicia Sesión</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar